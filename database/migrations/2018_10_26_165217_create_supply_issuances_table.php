<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSupplyIssuancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('supply_issuances', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->foreign('user_id')->references('id')->on('users');
            $table->string('department', 255);
            $table->integer('item_id')->foreign('item_id')->references('id')->on('items');
            $table->integer('quantity')->default(1);
            $table->text('remarks');
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
        Schema::dropIfExists('supply_issuances');
    }
}
