<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSalesItemFreebies extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales_item_freebies', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("sales_item_id")->foreign("sales_item_id")->references("id")->on("sales_items");
            $table->integer("freebie_id")->foreign("freebie_id")->references("id")->on("freebies");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sales_item_freebies');
    }
}
