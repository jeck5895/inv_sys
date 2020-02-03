<?php

namespace App\Http\Controllers\API;

use App\Model\Customer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Customers\Store;
use App\Http\Requests\Customers\Update;
use Illuminate\Support\Facades\Auth;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return $customers = Customer::orderBy('id', 'DESC')
            ->where(function ($query) use ($request) {
                if ($request->has('keyword')) {
                    $query->where('fullname', 'LIKE', '%' . $request->keyword . '%');
                } else {

                }

            })
            ->paginate(10);

        return response()->json([
            'model' => $customers,
            // 'columns' => Item::$columns,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Store $request)
    {
        $customer = new Customer;
        $customer->customer_id = $request['customer_id'];
        $customer->customer_type = $request['customer_type'];
        $customer->fullname = $request['fullname'];
        $customer->course = $request['course'];
        $customer->year = $request['year'];
        $customer->department = $request['department'];
        $customer->save();

        return ['message' => ucwords($request['name']) . ' record has been saved.'];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $customer = Customer::firstOrFail($id);

        return $customer;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Update $request, $id)
    {
        $customer = Customer::findOrFail($id);
        $customer->customer_id = $request['customer_id'];
        $customer->customer_type = $request['customer_type'];
        $customer->fullname = $request['fullname'];
        $customer->course = $request['course'];
        $customer->year = $request['year'];
        $customer->department = $request['department'];
        $customer->save();

        return ['message' => 'Changes has been saved'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(Auth::user()->account_type == 2){
            return response()->json(['message' => 'This action is unauthorized.'], 403);
        }

        Customer::destroy($id);

        return ['message' => 'Record has been deleted'];
    }

    public function search(Request $request) 
    {
        $customer = Customer::where(function($query) use ($request)
        {
            if($request->has('customer_id')) 
            {
                $query->where('customer_id', $request['customer_id']);
            }
            if($request->has('customer_type'))
            {
                $query->where('customer_type', $request['customer_type']);
            }
        })->first();

        return $customer;
    }
}
