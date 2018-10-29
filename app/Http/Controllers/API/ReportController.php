<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\ReportService;
use PDF;

class ReportController extends Controller
{
  
    public function index()
    {
        
    }

   
    public function store(Request $request)
    {
        //
    }


    public function show($id)
    {
    
    }

   
    public function update(Request $request, $id)
    {
        
    }

    public function destroy($id)
    {
        
    }

    public function receipt(Request $request){
        $data = array(
            'test' => 'test'
        );

        $pdf = PDF::loadView('reports.receipt',compact('data'));
        // return $pdf->download('firstreport.pdf');
        return $pdf->stream('receipt.pdf');
    }
}
