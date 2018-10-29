<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Sales\StoreSale;
use App\Http\Requests\Sales\UpdateSale;
use App\Model\Sale;
use App\Model\Item;
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
        $item = Item::findOrFail($request['item_id']);

        if($item->quantity >= $request['quantity']) 
        {
            $sale = new Sale;
            $sale->customer_type = $request['customer_type'];
            $sale->customer_id = $request['customer_id'];
            $sale->fullname = $request['fullname'];
            $sale->department = $request['department'];
            $sale->item_id = $request['item_id'];
            $sale->quantity = $request['quantity'];
            $sale->remarks = $request['remarks'];
            $sale->save();

            $item->quantity = intval($item->quantity) - intval($request['quantity']);
            $item->save();

            return [
                'message' => 'Sales has been saved.',
                'sales_no' => $sale->id,
            ];
        }
        else {
            return response()->json(['message' => 'Not enough stock for request quantity. (Stocks left: '.$item->quantity.')'], 422);
        }
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
