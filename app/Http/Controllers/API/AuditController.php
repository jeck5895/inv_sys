<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use \OwenIt\Auditing\Models\Audit;

class AuditController extends Controller
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

            $audits = Audit::orderBy($sortBy, $orderBy)
                ->where(function ($query) use ($request, $keywords) {
                    if ($request->has("q")) {
                        foreach ($keywords as $keyword) {
                            $query->orWhere('event', 'LIKE', '%' . $keyword . '%');
                            $query->orWhere('user_agent', 'LIKE', '%' . $keyword . '%');
                            $query->orWhere('auditable_type', 'LIKE', '%' . $keyword . '%');
                        }
                    }
                })
                // ->orWhereHas('user', function ($query) use ($request, $keywords) {
                //     if ($request->has('q')) {
                //         foreach ($keywords as $keyword) {
                //             $query->where('name', 'LIKE', '%' . $keyword . '%');
                //         }
                //     }
                // })
                ->with("user")
                ->paginate($per_page);;
        } else {
            $audits = Audit::with("user")->paginate(10);
        }

        return $audits;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
