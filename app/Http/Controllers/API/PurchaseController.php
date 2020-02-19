<?php

namespace App\Http\Controllers\API;

use App\Model\Purchase;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Purchases\Store;
use App\Http\Requests\Purchases\Update;
use Exception;

class PurchaseController extends Controller
{
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

            $purchases = Purchase::orderBy($sortBy, $orderBy)
                ->where(function ($query) use ($request, $keywords) {
                    if ($request->has("q")) {
                        foreach ($keywords as $keyword) {
                            $query->where('imei', 'LIKE', '%' . $keyword . '%');
                        }
                    }
                })
                ->orWhereHas('brand', function ($query) use ($request, $keywords) {
                    if ($request->has('q')) {
                        foreach ($keywords as $keyword) {
                            $query->where('name', 'LIKE', '%' . $keyword . '%');
                        }
                    }
                })
                ->orWhereHas('color', function ($query) use ($request, $keywords) {
                    if ($request->has('q')) {
                        foreach ($keywords as $keyword) {
                            $query->where('name', 'LIKE', '%' . $keyword . '%');
                        }
                    }
                })
                ->orWhereHas('category', function ($query) use ($request, $keywords) {
                    if ($request->has('q')) {
                        foreach ($keywords as $keyword) {
                            $query->where('name', 'LIKE', '%' . $keyword . '%');
                        }
                    }
                })
                ->orWhereHas('supplier', function ($query) use ($request, $keywords) {
                    if ($request->has('q')) {
                        foreach ($keywords as $keyword) {
                            $query->where('name', 'LIKE', '%' . $keyword . '%');
                        }
                    }
                })
                ->orWhereHas('model', function ($query) use ($request, $keywords) {
                    if ($request->has('q')) {
                        foreach ($keywords as $keyword) {
                            $query->where('name', 'LIKE', '%' . $keyword . '%');
                        }
                    }
                })
                ->with(['category', 'brand', 'color', 'model', 'supplier'])

                ->paginate($per_page);

            $purchases->map(function ($item) {
                $item->selling_price = number_format($item->selling_price, 2, '.', ',');
                return $item;
            });
        } else {

            $purchases = Purchase::orderBy('created_at', 'desc')->with('category')
                ->with('brand')
                ->with('color')
                ->with('model')
                ->with('supplier')
                ->paginate($per_page);

            $purchases->map(function ($item) {
                $item->selling_price = number_format($item->selling_price, 2, '.', ',');
                return $item;
            });
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

        $purchase->color_id = $request['color'];
        $purchase->cost = floatval($request['cost']);
        $purchase->selling_price = floatval($request['price']);
        $purchase->specs = $request['remarks'];
        $purchase->save();

        return ['message' => 'Stocks has been saved'];
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
    public function update(Update $request, $id)
    {
        $item = Purchase::findOrFail($id);
        $item->imei = $request['imei'];
        $item->category_id = $request['category'];
        $item->model_id = $request['model'];
        $item->brand_id = $request['brand'];
        $item->supplier_id = $request['supplier'];

        $item->color_id = $request['color'];
        $item->cost = floatval($request['cost']);
        $item->selling_price = floatval($request['price']);
        $item->specs = $request['remarks'];
        $item->save();

        return ['message' => 'Stocks has been saved', 'item_id' => $item->id];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Purchase::destroy($id);

        return ['message' => 'Record deleted.'];
    }

    public function bulk(Request $request)
    {
        $request->validate([
            'items' => 'required|array'
        ]);


        try {
            foreach ($request->items as $r) {
                $purchase = new Purchase;
                $purchase->imei = $r['imei'];
                $purchase->category_id = $r['category'];
                $purchase->model_id = $r['model'];
                $purchase->brand_id = $r['brand'];
                $purchase->supplier_id = $r['supplier'];

                $purchase->color_id = $r['color'];
                $purchase->cost = floatval($r['cost']);
                $purchase->selling_price = floatval($r['price']);
                $purchase->specs = $r['remarks'];
                $purchase->save();
            }
        } catch (Exception $e) {

            $item = Purchase::latest('id')->first();
            return response(['message' => "Data provided is invalid. Please check if missing fields or IMEI may have been duplicated", 'exception' => $e->getMessage(), 'last_record' => $item], 402);
        }

        return ['message' => 'Items has been saved', 'items' => $request->items];
    }
}
