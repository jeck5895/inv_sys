<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
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

        // return ['request' => $request->all()];
        $dateFrom = $request->date_from;
        $dateTo = $request->date_to;
        $from_date = date('F j, Y', strtotime($dateFrom));
        $to_date = date('F j, Y', strtotime($dateTo));

        $data = [
            "date_from" => $dateFrom,
            "date_to" => $dateTo,
            "from_date" => $from_date,
            "to" => $to_date
        ];


        $pdf = PDF::loadView('reports.daily-sales', compact('data'));
        $filename = $dateFrom . ' - ' . $dateTo . '.pdf';

        return [
            "filename" => $filename,
            "file" => "data:application/pdf;base64," . base64_encode($pdf->download($filename)),
        ];
    }

    public function monthly(Request $request)
    {
        return ['request' => $request->all()];
    }
}
