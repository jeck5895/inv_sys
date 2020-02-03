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
    public function index(Request $request)
    {
        $orderBy = $request->order_by == "false" ? 'asc' : 'desc';
        $per_page = $request->has('per_page') ? $request->per_page : 10;
        $applicant = [];

        if ($request->has('order_by') && $request->has('sort_by')) {
            $purchases = Purchase::orderBy($request->sort_by, $orderBy)
                ->where(function ($query) use ($request) {
                    if ($request->has("q")) {
                        $query->where('name', 'LIKE', '%' . $request->q . '%');
                    }
                })
                ->with('category')
                ->with('brand')
                ->with('color')
                ->with('model')
                ->with('supplier')
                ->paginate($per_page);
        } else {

            $purchases = Purchase::with('category')
                ->with('brand')
                ->with('color')
                ->with('model')
                ->with('supplier')
                ->paginate($per_page);
        }

        return $purchases;
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
        $purchase->imei = $request['imei'];
        $purchase->category_id = $request['category'];
        $purchase->model_id = $request['model'];
        $purchase->brand_id = $request['brand'];
        $purchase->supplier_id = $request['supplier'];
        $purchase->purchase_quantity = $request['quantity'];
        $purchase->color = $request['color'];
        $purchase->cost = $request['cost'];
        $purchase->selling_price = $request['selling_price'];
        $purchase->specs = $request['remarks'];
        $purchase->save();


        // $purchase->item_id = $request['item_id'];
        // $purchase->imei = $request['imei'];
        // $purchase->category_id = $request['category'];
        // $purchase->model_id = $request['model'];
        // $purchase->supplier_id = $request['supplier'];
        // $purchase->purchase_quantity = $request['purchase_quantity'];
        // $purchase->price_per_item = $request['price_per_item'];
        // $purchase->total_amount = $request['total_amount'];
        // $purchase->dr_number = $request['dr_number'];
        // $purchase->save();

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
