<?php

use Faker\Generator as Faker;

$factory->define(App\Model\Item::class, function (Faker $faker) {
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
