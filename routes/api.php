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

    Route::apiResource('stocks', 'API\ItemController');
    Route::apiResource('sales', 'API\SalesController');
    Route::apiResource('units', 'API\UnitController');
    ROute::apiResource('sites', 'API\SiteController');
});