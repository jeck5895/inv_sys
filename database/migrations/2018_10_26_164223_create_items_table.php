<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->increments('id');
            $table->string('item_code', 255);
            $table->string('item_name', 255);
            $table->string('unit', 50)->foreign('unit')->references('id')->on('units');
            $table->integer('quantity');
            $table->float('price', 8, 2);
            $table->integer('site')->foreign('site')->references('id')->on('sites');
            $table->string('dr_number');
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
        Schema::dropIfExists('items');
    }
}
