<?php
namespace App\Services;
use PDF;

class ReportService {

    /**
     * @data array
     */
    public function receipt($data) 
    {

        $pdf = PDF::loadView('reports.receipt',$data);
        // return $pdf->download('firstreport.pdf');
        return $pdf->stream('receipt.pdf');
    }
}