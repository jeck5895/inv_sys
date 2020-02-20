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
            'date_to' => 'required|date_format:"Y-m-d"|before:date_from'
        ]);

        $dateFrom = $request->date_from;
        $dateTo = $request->date_to;
        $from_date = date('F j, Y', strtotime($dateFrom));
        $to_date = date('F j, Y', strtotime($dateTo));

        //https://stackoverflow.com/questions/19852927/get-specific-columns-using-with-function-in-laravel-eloquent
        $sales = Sale::select('item_id', DB::raw('SUM(amount) as sub_total'))
            ->whereBetween(DB::raw("DATE_FORMAT(created_at, '%Y-%m-%d')"), [$dateFrom, $dateTo])
            ->groupBy('item_id')->with(['item.model' => function ($query) {
                $query->select('id', 'name');
            }])->get();

        $data = [
            "date_from" => $dateFrom,
            "date_to" => $dateTo,
            "from_date" => $from_date,
            "to_date" => $to_date,
            "sales" => $sales,
        ];

        // return view('reports/daily-sales', compact('data'));

        $pdf = PDF::loadView('reports.daily-sales', compact('data'));
        $filename = $dateFrom . ' - ' . $dateTo . '.pdf';

        return [
            "filename" => $filename,
            "file" => "data:application/pdf;base64," . base64_encode($pdf->download($filename)),
        ];
    }

    public function monthly(Request $request)
    {
        // $request->validate([
        //     'month' => 'required|date_format:"mm"',
        //     'year' => 'required|date_format:"Y"'
        // ]);

        $month = $request->month;
        $year = $request->year;
        $month_obj = DateTime::createFromFormat('!m', $month);
        $month_name = $month_obj->format('F');


        /**
         * TODO:
         * - verify if sales reference in purchase is increment id or model_id
         */

        $sales = Sale::select('item_id', DB::raw('SUM(amount) as sub_total'))
            ->where(DB::raw("DATE_FORMAT(created_at, '%m')"), $month)
            ->where(DB::raw("DATE_FORMAT(created_at, '%Y')"), $year)
            ->groupBy('item_id')->with(['item.model' => function ($query) {
                $query->select('id', 'name');
            }])->get();

        $data = [
            'month' => $month_name,
            'year' => $year,
            'sales' => $sales
        ];

        //return $sales;

        //return view('reports.monthly-sales', compact($data));

        $pdf = PDF::loadView('reports.monthly-sales', compact('data'));
        $filename = $month_name . ' - ' . $year . '.pdf';

        return [
            "filename" => $filename,
            "file" => "data:application/pdf;base64," . base64_encode($pdf->download($filename)),
        ];
    }
}
