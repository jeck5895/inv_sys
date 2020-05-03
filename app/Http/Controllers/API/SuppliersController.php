<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Supplier;

class SuppliersController extends Controller
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

            $suppliers = Supplier::orderBy($sortBy, $orderBy)
                ->where(function ($query) use ($request, $keywords) {

                    if ($request->has('q') && $request->q != null) {
                        foreach ($keywords as $keyword) {
                            $query->where('name', 'LIKE', '%' . $keyword . '%');
                        }
                    }
                })->paginate($per_page);
        } else {
            $suppliers = Supplier::orderBy('name', 'ASC')->get();
        }

        return $suppliers;
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
            'name' => 'required|unique:suppliers',
        ]);

        $supplier  = new Supplier;
        $supplier->name = $request['name'];
        $supplier->save();

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
        $supplier = Supplier::firstOrFail($id);

        return $supplier;
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
            'name' => 'required|unique:suppliers,name,' . $id,
        ]);

        $supplier = Supplier::findOrFail($id);
        $supplier->name = $request['name'];
        $supplier->save();

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
        Supplier::destroy($id);

        return ['message' => 'Success'];
    }
}
