<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Users\Store;
use App\Http\Requests\Users\Update;
use App\Http\Requests\Users\Delete;
use App\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return $users = User::orderBy('id', 'DESC')
            ->where(function ($query) use ($request) {
                if ($request->has('keyword')) {
                    $query->where('name', 'LIKE', '%' . $request->keyword . '%');
                } else {

                }

            })
            ->paginate(10);

        return response()->json([
            'model' => $users,
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
        $user = new User;
        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->account_type = $request['account_type'];
        $user->user_id = $request['user_id'];
        $user->password = bcrypt($request['password']);
        $user->save();

        return ['message' => $request['name'] . ' record has been saved.'];
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
    public function update(Update $request, $id)
    {
        $user = User::findOrFail($id);
        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->account_type = $request['account_type'];
        $user->user_id = $request['user_id'];
        $user->save();

        return ['message' => 'Changes has been saved'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(Auth::user()->account_type == 2){
            return response()->json(['message' => 'This action is unauthorized.'], 403);
        }

        User::destroy($id);

        return ['message' => 'Record has been deleted'];
    }
}
