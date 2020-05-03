<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Category;

class CategoriesController extends Controller
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

            $categories = Category::orderBy($sortBy, $orderBy)
                ->where(function ($query) use ($request, $keywords) {

                    if ($request->has('q') && $request->q != null) {
                        foreach ($keywords as $keyword) {
                            $query->where('name', 'LIKE', '%' . $keyword . '%');
                        }
                    }
                })->paginate($per_page);
        } else {
            $categories = Category::orderBy('name', 'ASC')->get();
        }

        return $categories;
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
            'name' => 'required|unique:categories'
        ]);
        $category = new Category();
        $category->name = $request['name'];
        $category->save();

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
        $category =  Category::findOrFail($id);

        return $category;
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
            'name' => 'required|unique:categories,name,' . $id
        ]);

        $category =  Category::findOrFail($id);
        $category->name = $request['name'];
        $category->save();

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
        Category::destroy($id);

        return ['message' => 'Record successfully deleted.'];
    }
}
