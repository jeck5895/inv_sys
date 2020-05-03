<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Brand;

class BrandsController extends Controller
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

            $orderBy = $request->has('order_by') && $request->order_by != null ? $request->order_by : 'asc';
            $sortBy = $request->has('sort_by') && $request->sort_by != null ? $request->sort_by : 'name';

            $brands = Brand::orderBy($sortBy, $orderBy)
                ->where(function ($query) use ($request, $keywords) {

                    if ($request->has('q') && $request->q != null) {
                        foreach ($keywords as $keyword) {
                            $query->where('name', 'LIKE', '%' . $keyword . '%');
                        }
                    }
                })->paginate($per_page);
        } else {
            $brands = Brand::orderBy('name', 'ASC')->get();
        }

        return $brands;
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
            'name' => 'required|unique:brands'
        ]);

        $brand = new Brand;

        $brand->name = $request['name'];

        $brand->save();


        return ['message' => 'success'];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $brand = Brand::findOrFailt($id);

        return $brand;
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
            'name' => 'required|unique:brands,name,' . $id
        ]);

        $brand = Brand::findOrFail($id);

        $brand->name = $request['name'];

        $brand->save();


        return ['message' => 'success'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Brand::destroy($id);
        return ['message' => 'Record successfully deleted.'];
    }
}
