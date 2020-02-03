<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddModifiedFieldsToPurchasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('purchases', function (Blueprint $table) {
            $table->float('cost', 8, 2)->after('item_id');
            $table->float('selling_price', 8, 2)->after('item_id');
            $table->string('color')->nullable()->after('item_id');
            $table->string('specs')->nullable()->after('item_id');
            $table->integer('category_id')
                ->foreign('category_id')
                ->references('id')
                ->on('categories')
                ->after('item_id');
            $table->integer('model_id')
                ->foreign('model_id')
                ->references('id')
                ->on('models')
                ->after('item_id');
            $table->integer('brand_id')
                ->foreign('brand_id')
                ->references('id')
                ->on('brands')
                ->after('item_id');
            $table->dateTime('purchase_date', 0);
            $table->integer('user_id')->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('purchases', function (Blueprint $table) {
            //
        });
    }
}
