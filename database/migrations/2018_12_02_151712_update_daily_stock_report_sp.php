<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class UpdateDailyStockReportSp extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::unprepared("DROP procedure IF EXISTS dailyStocksReport");  
        DB::unprepared('CREATE PROCEDURE dailyStocksReport(IN param DATE)
        BEGIN
        SELECT 
            i.`item_code`,
            i.`item_name`,
            IFNULL(i.`quantity`,0) + IFNULL(temp3.total_purchase_quantity,0) - IFNULL(temp2.total_issued_quantity,0) AS items_on_hand,
            (IFNULL(i.`quantity`,0) + IFNULL(temp3.total_purchase_quantity,0) - IFNULL(temp2.total_issued_quantity,0)) + IFNULL(temp3.total_purchase_quantity,0) + IFNULL(temp2.total_issued_quantity,0) AS previous_quantity ,
            IFNULL(temp.issued_quantity,0) AS issued_quantity,
            IFNULL(temp3.total_purchase_quantity,0) AS total_purchase_quantity,
            IFNULL(temp2.total_issued_quantity,0) AS total_issued_quantity
        FROM items i
        LEFT JOIN  sales s ON i.id = s.`item_id`
        /*For issued quantity on given date*/
        LEFT JOIN (
            SELECT id, item_id, SUM(quantity) AS issued_quantity	 
            FROM sales 
            WHERE DATE_FORMAT(`created_at`, "%Y-%m-%d") = param
            GROUP BY item_id
        ) temp ON s.item_id = temp.item_id
        /*For total issued quantity*/
        LEFT JOIN (
            SELECT id, item_id, SUM(quantity) AS total_issued_quantity	 
            FROM sales 
            WHERE DATE_FORMAT(`created_at`, "%Y-%m-%d") <= param
            GROUP BY item_id
        ) temp2 ON s.item_id = temp2.item_id 
        /*total purchase*/  
        LEFT JOIN (
            SELECT id, item_id, SUM(purchase_quantity) AS total_purchase_quantity	 
            FROM purchases 
            WHERE DATE_FORMAT(`created_at`, "%Y-%m-%d") <= param
            GROUP BY item_id
        ) temp3 ON i.id = temp3.item_id   
        GROUP BY i.item_code;
        END');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
