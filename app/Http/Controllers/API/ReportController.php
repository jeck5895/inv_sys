<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Sale;
use Carbon\Carbon;
use DateTime;
use Illuminate\Support\Facades\DB;
use PDF;

class ReportController extends Controller
{
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
    public function store(Request $request)
    {
        //
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
    public function update(Request $request, $id)
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

    public function daily(Request $request)
    {

        $request->validate([
            'date_from' => 'required|date_format:"Y-m-d"',
            'date_to' => 'required|date_format:"Y-m-d"|after_or_equal:date_from',
            'branch' => 'required|numeric'
        ]);

        $dateFrom = $request->date_from;
        $dateTo = $request->date_to;
        $from_date = date('F j, Y', strtotime($dateFrom));
        $to_date = date('F j, Y', strtotime($dateTo));
        $branch = $request->branch;

        //https://stackoverflow.com/questions/19852927/get-specific-columns-using-with-function-in-laravel-eloquent
        // $sales = Sale::select('item_id', DB::raw('SUM(amount) as sub_total'))
        //     ->whereBetween(DB::raw("DATE_FORMAT(created_at, '%Y-%m-%d')"), [$dateFrom, $dateTo])
        //     ->groupBy('item_id')->with(['item.model' => function ($query) {
        //         $query->select('id', 'name');
        //     }])->get();
        $sales = Sale::whereBetween(DB::raw("DATE_FORMAT(checkout_date, '%Y-%m-%d')"), [$dateFrom, $dateTo])
            ->where('branch_id', $branch)
            ->with(['sales_items.item', 'sales_items.sales_item_freebies.freebie', 'branch'])
            ->get();

        $sales->map(function ($item) {
            $total_item_cost = 0;
            $total_freebies_cost = 0;

            foreach ($item['sales_items'] as $sales_item) {
                $total_item_cost = (int) $total_item_cost + (int) $sales_item["item"]->cost;
            }

            foreach ($item['sales_items'] as $sales_item) {
                foreach ($sales_item['sales_item_freebies'] as $item_freebie) {
                    $total_freebies_cost = (int) $total_freebies_cost + (int) $item_freebie["freebie"]->price;
                }
            }

            $total_cost = (int) $total_freebies_cost +  (int) $total_item_cost;

            $net_income = (int) $item->amount - (int) $total_cost;

            $item->total_item_cost = [
                'value' => $total_item_cost,
                'formatted' => number_format($total_item_cost, 2, '.', ',')
            ];

            $item->total_freebies_cost = [
                'value' => $total_freebies_cost,
                'formatted' => number_format($total_freebies_cost, 2, '.', ',')
            ];

            $item->revenue = [
                'value' => $item->amount,
                'formatted' => number_format($item->amount, 2, '.', ',')
            ];

            $item->net_income = [
                'value' => $net_income,
                'formatted' => number_format($net_income, 2, '.', ',')
            ];

            // $item->branch = $item['branch']->name || '';


            // $item->total_item_cost = $total_freebies_cost;
            // $item->total_freebies_cost = $total_freebies_cost;

            // $item->formatted_total_freebies_cost = number_format($item->total_freebies_cost, 2, '.', ',');

            return $item;
        });

        $data = [
            "date_from" => $dateFrom,
            "date_to" => $dateTo,
            "from_date" => $from_date,
            "to_date" => $to_date,
            "sales" => $sales,
        ];

        // return view('reports/daily-sales', compact('data'));

        $pdf = PDF::loadView('reports.daily-sales', compact('data'))->setPaper('a4', 'landscape');
        $filename = $dateFrom . ' - ' . $dateTo . '.pdf';

        return [
            "filename" => $filename,
            "file" => "data:application/pdf;base64," . base64_encode($pdf->download($filename)),
        ];
    }

    public function monthly(Request $request)
    {
        $request->validate([
            'month' => 'required|date_format:"m"',
            'year' => 'required|date_format:"Y"',
            'branch' => 'required|numeric'
        ]);

        $month = $request->month;
        $year = $request->year;
        $month_obj = DateTime::createFromFormat('!m', $month);
        $month_name = $month_obj->format('F');
        $branch = $request->branch;


        /**
         * TODO:
         * - verify if sales reference in purchase is increment id or model_id
         */

        $sales = Sale::where(DB::raw("DATE_FORMAT(checkout_date, '%m')"), $month)
            ->where(DB::raw("DATE_FORMAT(checkout_date, '%Y')"), $year)
            ->where('branch_id', $branch)
            ->with(['sales_items.item', 'sales_items.sales_item_freebies.freebie', 'branch'])
            // ->groupBy('item_id')->with(['item.model' => function ($query) {
            //     $query->select('id', 'name');
            // }])
            ->get();

        $sales->map(function ($item) {
            $total_item_cost = 0;
            $total_freebies_cost = 0;

            foreach ($item['sales_items'] as $sales_item) {
                if($sales_item) {
                    $total_item_cost = (int) $total_item_cost + (int) $sales_item["item"]["cost"];
                }
            }

            foreach ($item['sales_items'] as $sales_item) {
                foreach ($sales_item['sales_item_freebies'] as $item_freebie) {
                    $total_freebies_cost = (int) $total_freebies_cost + (int) $item_freebie["freebie"]["price"];
                }
            }

            $total_cost = (int) $total_freebies_cost +  (int) $total_item_cost;

            $net_income = (int) $item->amount - (int) $total_cost;

            $item->total_item_cost = [
                'value' => $total_item_cost,
                'formatted' => number_format($total_item_cost, 2, '.', ',')
            ];

            $item->total_freebies_cost = [
                'value' => $total_freebies_cost,
                'formatted' => number_format($total_freebies_cost, 2, '.', ',')
            ];

            $item->revenue = [
                'value' => $item->amount,
                'formatted' => number_format($item->amount, 2, '.', ',')
            ];

            $item->net_income = [
                'value' => $net_income,
                'formatted' => number_format($net_income, 2, '.', ',')
            ];

            $item->checkout_date = [
                'value' => $item->checkout_date,
                'formatted' => date('F j, Y', strtotime($item->checkout_date))
            ];

            // $item->branch = $item['branch']->name || '';


            // $item->total_item_cost = $total_freebies_cost;
            // $item->total_freebies_cost = $total_freebies_cost;

            // $item->formatted_total_freebies_cost = number_format($item->total_freebies_cost, 2, '.', ',');

            return $item;
        });

        $data = [
            'month' => $month_name,
            'year' => $year,
            'sales' => $sales
        ];

        //return $sales;

        // return view('reports.monthly-sales', compact('data'));

        $pdf = PDF::loadView('reports.monthly-sales', compact('data'))->setPaper('a4', 'landscape');
        $filename = $month_name . ' - ' . $year . '.pdf';

        return [
            "filename" => $filename,
            "file" => "data:application/pdf;base64," . base64_encode($pdf->download($filename)),
        ];
    }
}
