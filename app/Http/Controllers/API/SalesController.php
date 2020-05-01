<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\Sales\StoreSale;
use App\Http\Requests\Sales\UpdateSale;
use App\Model\Sale;
use App\Model\Freebie;
use Webpatser\Uuid\Uuid;
use PDF;

class SalesController extends Controller
{
    protected $report;
    public function __construct(
        \App\Services\ReportService $report
    ) {
        $this->report = $report;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $per_page = $request->has('per_page') ? $request->per_page : 10;
        $keywords = $request->has('q') ? explode(' ', $request->q) : null;

        if ($request->has('q') || $request->has('order_by') || $request->has('sort_by')) {
            $orderBy = $request->has('order_by') ? $request->order_by : 'desc';
            $sortBy = $request->has('sort_by') ? $request->sort_by : 'created_at';

            $sales = Sale::orderBy($sortBy, $orderBy)
                ->where(function ($query) use ($request, $keywords) {
                    if ($request->has("q") && $request->q != null) {
                        foreach ($keywords as $keyword) {
                            $query->orWhere('transaction_no', 'LIKE', '%' . $keyword . '%')
                                ->orWhere('amount', 'LIKE', '%' . $keyword . '%')
                                ->orWhere('payment_mode', 'LIKE', '%' . $keyword . '%');
                        }
                    }
                })
                ->whereHas('item.model', function ($query) use ($request, $keywords) {
                    if ($request->has('q')) {
                        foreach ($keywords as $keyword) {
                            $query->orWhere('name', 'LIKE', '%' . $keyword . '%');
                        }
                    }
                })
                ->whereHas('item.brand', function ($query) use ($request, $keywords) {
                    if ($request->has('q')) {
                        foreach ($keywords as $keyword) {
                            $query->orWhere('name', 'LIKE', '%' . $keyword . '%');
                        }
                    }
                })
                ->whereHas('item.color', function ($query) use ($request, $keywords) {
                    if ($request->has('q')) {
                        foreach ($keywords as $keyword) {
                            $query->orWhere('name', 'LIKE', '%' . $keyword . '%');
                        }
                    }
                })
                ->whereHas('item.category', function ($query) use ($request, $keywords) {
                    if ($request->has('q')) {
                        foreach ($keywords as $keyword) {
                            $query->orWhere('name', 'LIKE', '%' . $keyword . '%');
                        }
                    }
                })
                ->whereHas('item.supplier', function ($query) use ($request, $keywords) {
                    if ($request->has('q')) {
                        foreach ($keywords as $keyword) {
                            $query->orWhere('name', 'LIKE', '%' . $keyword . '%');
                        }
                    }
                })
                // ->whereHas('freebies', function ($query) use ($request) {
                //   $query->orWhere('freebie', 'LIKE', '%' . $request->q . '%');
                // })
                ->where(function ($query) use ($request) {
                    if (($request->has('date_from') && $request->date_from != null) && ($request->has('date_to') && $request->date_to != null)) {
                        $query->whereBetween(DB::raw("DATE_FORMAT(created_at, '%Y-%m-%d')"), [$request->date_from, $request->date_to]);
                    }
                })
                // ->toSql();
                ->with(['item.model', 'item.brand', 'item.color', 'item.category', 'item.supplier'])
                ->with('freebies')
                ->paginate($per_page);
        } else {
            $sales = Sale::orderBy('created_at', 'desc')
                ->with(['item.model', 'item.brand', 'item.color', 'item.category', 'item.supplier'])
                ->with('freebies')
                ->paginate($per_page);
        }

        return $sales;
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

        $sales = new Sale;
        $sales->transaction_no = $transaction_no;
        $sales->item_id = $request->item_id;
        $sales->amount = $request->amount;
        $sales->payment_mode = $request->payment_mode;
        if ($request->has('credit_term')) {
            $sales->payment_terms = $request->credit_term;
        }

        $sales_id = $sales->save();

        if ($request->has('freebies')) {
            $new_sales = Sale::find($sales_id);
            foreach ($request['freebies'] as $freebie) {
                $sales_freebie = new Freebie(
                    array(
                        'name' => $freebie,
                        'sales_id' => $sales_id
                    )
                );
                $new_sales->freebies()->save($sales_freebie);
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
