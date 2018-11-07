<?php

namespace App\Http\Controllers\API;

use App\Model\Item;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Items\StoreItem;
use App\Http\Requests\Items\UpdateItem;
use App\Model\ItemLog;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $request = app()->make('request');

        //Check if there's any request parameters
        // if(!empty($request->all()))
        // {
        //     $validation = Validator::make($request->only([
        //                 'per_page','order_by', 'sort_column'
        //             ]),[
        //                 'per_page' => 'required|integer|min:1',
        //                 'order_by' => 'required|in:asc,desc',
        //                 'sort_column' => 'required'
        //             ]);
        
        //     if($validation->fails()) {
        //         return response()->json(['message' => $validation->messages], 400);
        //     }
            
                // return Item::orderBy($request->sort_column, $request->order_by)
                return $items = Item::orderBy('id', 'DESC')
                        ->where(function($query) use ($request){
                            if($request->has('keyword'))
                            {
                                $query->where('item_name', 'LIKE' ,'%'.$request->keyword.'%');
                                    //->orWhere('user_initial', 'LIKE' ,'%'.$request->keyword.'%');
                                    // ->orWhere('administrative_area_level_1', 'LIKE' ,'%'.$request->keyword.'%');
                                // if($request->has('industry') && $request->industry != null)
                                // {
                                //     $query->where('industry',$request->industry);
                                // }
                            }
                            else{

                            }
                            
                        })
                        ->with('unit')
                        ->with('site')
                        ->paginate(10);
                        // ->paginate($request->per_page);

            return response()->json([
                'model' => $items,
                'columns' => Item::$columns,
            ]);
        //}
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreItem $request)
    {
        $item = new Item;
        $item->item_name = $request['item_name'];
        $item->item_code = $request['item_code'];
        $item->unit = $request['unit'];
        $item->quantity = $request['quantity'];
        $item->price = $request['price'];
        $item->site = $request['site'];
        $item->dr_number = $request['dr_number'];
        $item->save();

        return [
            'message' => ucfirst($request['item_name']) . ' has been save'
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function show(Item $item)
    {
        $item = Item::findOrFail($item);

        return $item;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateItem $request, $id)
    {
        $item = Item::findOrFail($id);
        $item->item_name = $request['item_name'];
        $item->item_code = $request['item_code'];
        $item->unit = $request['unit'];
        $item->quantity = $request['quantity'];
        $item->price = $request['price'];
        $item->site = $request['site'];
        $item->dr_number = $request['dr_number'];
        $item->save();

        $log = new ItemLog;
        $log->item_id = $id;
        $log->quantity_added = $request['quantity'];
        $log->save();

        return [
            'message' => 'Changes has been save'
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function destroy(Item $item)
    {
        $item_name = $item->item_name;

        $item->delete();

        return [
            'message' => ucfirst($item_name) .' has been deleted.'
        ];
    }

    public function lists() 
    {
        $items = Item::get();

        return $items;
    }
}
