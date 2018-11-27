<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class CreateViewForItems extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("CREATE OR REPLACE VIEW vw_items AS
            SELECT 
                i.*, 
                IFNULL(p.purchase_quantity, 0) AS purchase_quantity,
                IFNULL(s.quantity,0) AS sold_quantity,
                i.quantity + IFNULL(p.purchase_quantity, 0) - IFNULL(s.quantity, 0) AS remaining_quantity
            FROM `items` i
            LEFT JOIN `purchases` p 
                ON i.id = p.item_id
            LEFT JOIN `sales` s
                ON i.id = s.item_id
            WHERE 1
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement("DROP VIEW vw_items");
    }
}
