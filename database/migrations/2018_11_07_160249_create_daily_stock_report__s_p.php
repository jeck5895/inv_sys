<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class CreateDailyStockReportSP extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::unprepared('CREATE PROCEDURE dailyStocksReport(IN param DATE)
        BEGIN
        SELECT 
        i.`item_code`,
        i.`item_name`,
        temp.issued_quantity + i.`quantity` AS previos_quantity,
        i.`quantity` AS items_on_hand,
        temp.issued_quantity
        FROM items i
        LEFT JOIN  sales s ON i.id = s.`item_id`
        LEFT JOIN (
                SELECT id, item_id, SUM(quantity) AS issued_quantity	 
                FROM sales 
                WHERE DATE_FORMAT(`created_at`, "%Y-%m-%d") <= param
                GROUP BY item_id
            ) temp ON s.item_id = temp.item_id
        WHERE DATE_FORMAT(s.`created_at`, "%Y-%m-%d") = param
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
