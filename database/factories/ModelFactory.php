<?php

use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(App\Model\ItemModel::class, function (Faker $faker) {
    return [
        'name' => Str::random(5) . '-' . $faker->ean8,
        'created_at' => $faker->dateTime(),
        'updated_at' => $faker->dateTime(),
    ];
});
