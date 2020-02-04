<?php

use Faker\Generator as Faker;

$factory->define(App\Model\Supplier::class, function (Faker $faker) {
    return [
        'supplier_name' => $faker->unique()->company,
        'created_at' => $faker->dateTime(),
        'updated_at' => $faker->dateTime(),
    ];
});
