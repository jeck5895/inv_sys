<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Sales\StoreSale;
use App\Http\Requests\Sales\UpdateSale;
use App\Model\Sale;
use App\Model\Item;
use Webpatser\Uuid\Uuid;
use PDF;

class SalesController extends Controller
{
    protected $report;
    public function __construct(
        \App\Services\ReportService $report
    ) 
    {
        $this->report = $report;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSale $request)
    {
        $transaction_no = strtoupper(uniqid('TR-'));

        foreach ($request['items'] as $key => $req_item) 
        {
            $item = Item::findOrFail($req_item['id']);

            if($item->quantity >= $req_item['request_quantity']) 
            {
                $sale = new Sale;
                $sale->transaction_no = $transaction_no;
                $sale->customer_type = $request['customer_type'];
                $sale->customer_id = $request['customer_id'];
                $sale->fullname = $request['fullname'];
                $sale->fund = $request['fund'];
                $sale->department = $request['department'];
                $sale->item_id = $req_item['id'];
                $sale->quantity = $req_item['request_quantity'];
                $sale->amount = floatval($item->price) * floatval($req_item['request_quantity']);
                $sale->remarks = $request['remarks'];
                $sale->save();

                $item->quantity = intval($item->quantity) - intval($req_item['request_quantity']);
                $item->save();
            }
            else {
                return response()->json(['message' => 'Not enough stock for request quantity. (Stocks left: '.$item->quantity.')'], 422);
            }
        }
        
        return [
            'message' => 'Sales has been saved.',
            'transaction_no' => $transaction_no,
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSale $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
