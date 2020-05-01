<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Model\Purchase::class, function (Faker $faker) {
    return [
        'supplier_id' => rand(1, 50),
        'brand_id' => rand(1, 8),
        'model_id' => rand(1, 20),
        'category_id' => rand(1, 20),
        'specs' => $faker->catchPhrase,
        'color_id' => rand(1, 20),
        'selling_price' => $faker->numberBetween($min = 10000, $max = 50000),
        'cost' => $faker->numberBetween($min = 10000, $max = 50000),
        'purchase_quantity' => 1,
        'imei' => $faker->ean8,
        'user_id' => $faker->numberBetween(1, 50),
        'created_at' => $faker->dateTime(),
        'updated_at' => $faker->dateTime(),
    ];
});
