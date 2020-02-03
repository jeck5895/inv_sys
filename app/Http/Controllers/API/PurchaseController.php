<?php

namespace App\Http\Controllers\API;

use App\Model\Purchase;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Purchases\Store;

class PurchaseController extends Controller
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
    public function store(Store $request)
    {
        $purchase = new Purchase;
        $purchase->item_id = $request['item_id'];
        $purchase->purchase_quantity = $request['purchase_quantity'];
        $purchase->price_per_item = $request['price_per_item'];
        $purchase->total_amount = $request['total_amount'];
        $purchase->dr_number = $request['dr_number'];
        $purchase->save();

        return ['message' => 'Purchase has been saved'];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function show(Purchase $purchase)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Purchase $purchase)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function destroy(Purchase $purchase)
    {
        //
    }
}
