<?php

namespace App\Http\Controllers\API;

use App\Model\Item;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Items\Store;
use App\Http\Requests\Items\Update;
use Exception;
use Illuminate\Support\Facades\Validator;

class ItemsController extends Controller
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

            $items = Item::orderBy($sortBy, $orderBy)


                ->where(function ($query) use ($request, $keywords) {
                    if ($request->has("q")) {
                        foreach ($keywords as $keyword) {
                            $query->where('imei', 'LIKE', '%' . $keyword . '%');
                        }
                    }
                })
                ->with(['category', 'brand', 'color', 'model', 'supplier', 'sales_item.sales'])
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

                // ->available()
                ->paginate($per_page);
            // ->toSql();

            $items->map(function ($item) {
                $item->formatted_selling_price = number_format($item->selling_price, 2, '.', ',');
                $item->formatted_cost = number_format($item->cost, 2, '.', ',');
                return $item;
            });
        } else {

            $items = Item::orderBy('created_at', 'desc')->with('category')
                ->with('brand')
                ->with('color')
                ->with('model')
                ->with('supplier')
                ->paginate($per_page);

            $items->map(function ($item) {
                $item->formatted_selling_price = number_format($item->selling_price, 2, '.', ',');
                $item->formatted_cost = number_format($item->cost, 2, '.', ',');
                return $item;
            });
        }

        return $items;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Store $request)
    {


        $item = new Item;
        $item->imei = $request['imei'];
        $item->category_id = $request['category'];
        $item->model_id = $request['model'];
        $item->brand_id = $request['brand'];
        $item->supplier_id = $request['supplier'];

        $item->color_id = $request['color'];
        $item->cost = floatval($request['cost']);
        $item->selling_price = floatval($request['price']);
        $item->specs = $request['remarks'];
        $item->user_id = auth()->user()->id;
        $item->delivery_date = $request['delivery_date'];
        $item->save();

        return ['message' => 'Stocks has been saved'];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function show($param)
    {
        $item = null;

        if (is_numeric($param)) {
            $item = Item::findOrFail($param);
        }

        // $item = Item::where('imei', $param);

        return $item;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function update(Update $request, $id)
    {
        $item = Item::findOrFail($id);
        $item->imei = $request['imei'];
        $item->category_id = $request['category'];
        $item->model_id = $request['model'];
        $item->brand_id = $request['brand'];
        $item->supplier_id = $request['supplier'];

        $item->color_id = $request['color'];
        $item->cost = floatval($request['cost']);
        $item->selling_price = floatval($request['price']);
        $item->specs = $request['remarks'];
        $item->delivery_date = $request['delivery_date'];
        $item->save();

        return ['message' => 'Stocks has been saved', 'item_id' => $item->id];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Purchase  $item
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Item::destroy($id);

        return ['message' => 'Record deleted.'];
    }

    public function bulk(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'items' => 'required|array',
            'items.imei' => 'required',
        ]);


        try {
            foreach ($request->items as $r) {
                $item = new Item;
                $item->imei = $r['imei'];
                $item->category_id = $r['category'];
                $item->model_id = $r['model'];
                $item->brand_id = $r['brand'];
                $item->supplier_id = $r['supplier'];

                $item->color_id = $r['color'];
                $item->cost = floatval($r['cost']);
                $item->selling_price = floatval($r['price']);
                $item->delivery_date = $r['delivery_date'];
                if (isset($r['remarks'])) {
                    $item->specs = $r['remarks'];
                }
                $item->save();
            }
        } catch (Exception $e) {

            $item = Item::latest('id')->first();
            return response(['message' => "Data provided is invalid. Please check if missing fields or IMEI may have been duplicated", 'exception' => $e->getMessage(), 'last_record' => $item], 422);
        }

        return ['message' => 'Items has been saved', 'items' => $request->items];
    }

    public function findBy($field, $val)
    {
        $item = Item::where($field, $val)
            // ->available()
            ->firstOrFail();
        if ($item->is_available === 0) {
            return response(['message' => $item->imei . ' is already been sold.'], 400);
        }

        return $item;
    }
}
