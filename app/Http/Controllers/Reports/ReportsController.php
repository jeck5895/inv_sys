<?php

namespace App\Http\Controllers\Reports;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use PDF;

class ReportsController extends Controller
{
    // public function __construct(){
    //     PDF::setOptions(['defaultFont' => 'Helvetica']);
    // }

    public function index()
    {   
        
       
    }

    public function firstreport()
    {
        $data = array(
            'month' => 'January'
        );

        $pdf = PDF::loadView('reports.firstreport',$data);
        // return $pdf->download('firstreport.pdf');
        return $pdf->stream('firstreport.pdf');
    }

    public function receipt(){
        $data = array(
            'test' => 'test'
        );

        $pdf = PDF::loadView('reports.receipt',$data);
        // return $pdf->download('firstreport.pdf');
        return $pdf->stream('receipt.pdf');
    }

    public function sales(){
        $data = array(
            'month' => 'January'
        );

        $pdf = PDF::loadView('reports.salesreport',$data);
        // return $pdf->download('firstreport.pdf');
        return $pdf->stream('salesreport.pdf');
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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
}
