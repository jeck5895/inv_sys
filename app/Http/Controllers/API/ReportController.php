<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\ReportService;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
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
        $data = [];
        $items = [];
        $total_amount = 0;
        $formatter = new \NumberFormatter('en', \NumberFormatter::SPELLOUT);
        $transactions = DB::table('sales')
                        ->leftJoin('items', 'sales.item_id','=','items.id')
                        ->select('sales.*','items.item_code','items.item_name', 'items.price')
                        ->where('sales.transaction_no', '=', $request['transaction_no'])
                        ->get();

        if(count($transactions) > 0) 
        {
            foreach ($transactions as $key => $transaction) 
            {    
                $items[] = array(
                    'transaction_id' => $transaction->id,
                    'customer_name' => $transaction->fullname,
                    'item_code' => $transaction->item_code,
                    'item_name' => $transaction->item_name,
                    'fund' => $transaction->fund,
                    'transaction_date' => Carbon::parse($transaction->created_at)->format('F d, Y'),
                    'amount' => $transaction->amount
                );
                $total_amount = floatval($total_amount) + floatval($transaction->amount);
            }
            $data['items'] = $items;
            $data['total_amount'] = $total_amount;
            $data['transaction_no'] = $request['transaction_no'];
            $data['amount_in_words'] = ucwords($formatter->format($data['total_amount']));
            $data['total_items'] = count($transactions);
            //dd($data);
            $pdf = PDF::loadView('reports.receipt',compact('data'));
            // // return $pdf->download('firstreport.pdf');
            return $pdf->stream('receipt.pdf');

            //return view('reports.receipt', compact('data'));
        }
        else {
            return response()->json(['status' => FALSE, 'message' => 'Transaction receipt could not be found'], 400);
        }
    }
}
