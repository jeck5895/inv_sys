<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware('auth:api')->group(function() {
    Route::get('/stocks/lists', 'API\ItemController@lists');
    Route::get('/sites/lists', 'API\SiteController@lists');
    Route::get('/units/lists', 'API\UnitController@lists');
    Route::get('/customers/search', 'API\CustomerController@search');

    Route::apiResource('stocks', 'API\ItemController');
    Route::apiResource('sales', 'API\SalesController');
    Route::apiResource('units', 'API\UnitController');
    Route::apiResource('sites', 'API\SiteController');
    Route::apiResource('users', 'API\UserController');
    Route::apiResource('customers', 'API\CustomerController');
});