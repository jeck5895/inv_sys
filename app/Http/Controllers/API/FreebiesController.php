<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Freebie;

class FreebiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $keywords = $request->has('q') ? explode(' ', $request->q) : null;
        $per_page = $request->has('per_page') ? $request->per_page : 10;

        if ($request->has('order_by') || $request->has('sort_by') || $request->has('per_page') || $request->has('page')) {

            $orderBy = $request->has('order_by') ? $request->order_by : 'desc';
            $sortBy = $request->has('sort_by') ? $request->sort_by : 'created_at';

            $freebies = Freebie::orderBy($sortBy, $orderBy)
                ->where(function ($query) use ($request, $keywords) {

                    if ($request->has('q') && $request->q != null) {
                        foreach ($keywords as $keyword) {
                            $query->where('name', 'LIKE', '%' . $keyword . '%');
                        }
                    }
                })->paginate($per_page);

            $freebies->map(function ($item) {
                $item->formatted_price = number_format($item->price, 2, '.', ',');
                return $item;
            });
        } else {
            $freebies = Freebie::all();
        }

        return $freebies;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:freebies',
            'price' => 'required|numeric'
        ]);

        $freebie = new Freebie;
        $freebie->name = $request->name;
        $freebie->price = $request->price;
        $freebie->save();

        return ['message' => 'Success'];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $freebie = Freebie::findOrFail($id);
        return $freebie;
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
        $request->validate([
            'name' => 'required|unique:freebies,name,' . $id,
            'price' => 'required|numeric'
        ]);

        $freebie =  Freebie::findOrFail($id);
        $freebie->name = $request->name;
        $freebie->price = $request->price;
        $freebie->save();

        return ['message' => 'Success'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Freebie::destroy($id);
    }
}
