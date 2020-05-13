<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Color;

class ColorsController extends Controller
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

            $colors = Color::orderBy($sortBy, $orderBy)
                ->where(function ($query) use ($request, $keywords) {

                    if ($request->has('q') && $request->q != null) {
                        foreach ($keywords as $keyword) {
                            $query->where('name', 'LIKE', '%' . $keyword . '%');
                        }
                    }
                })->paginate($per_page);
        } else {
            $colors = Color::orderBy('name', 'ASC')->get();
        }

        return $colors;
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
            'name' => 'required|unique:colors',
            // 'value' => 'required|unique:colors'
        ]);
        $color = new Color;

        $color->name = $request['name'];
        $color->value = $request['value'];
        $color->user_id = auth()->user()->id;

        $color->save();

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
        $color = Color::findOrFail($id);

        return $color;
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
            'name' => 'required|unique:colors,name,' . $id,
            // 'value' => 'required|unique:colors,value,' . $id
        ]);
        $color = Color::findOrFail($id);

        $color->name = $request['name'];
        $color->value = $request['value'];

        $color->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Color::destroy($id);
        return ['message' => 'Record successfully deleted.'];
    }
}
