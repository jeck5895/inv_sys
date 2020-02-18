<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Route::get('reports/firstreport', 'Reports\ReportsController@firstreport');
// Route::get('reports/receipt', 'Reports\ReportsController@receipt');
// Route::get('reports/sales', 'Reports\ReportsController@sales');

// Route::get('/', 'IndexController@index')->name('index');
// Route::get('sales/receipt', 'API\ReportController@receipt');
// Route::get('sales/report', 'API\ReportController@sales_report');
// Route::get('report/items/daily', 'API\ReportController@daily_stock_report');
// Route::get('/phpinfo', function() {
//     echo phpinfo();
// });

Route::get('/{vue_capture?}', function () {
    return view('pages.index');
})->where('vue_capture', '[\/\w\.-]*');
