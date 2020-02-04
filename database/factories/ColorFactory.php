<?php

use Faker\Generator as Faker;

$factory->define(App\Model\Color::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->colorName,
        'value' => $faker->unique()->hexcolor,
        'created_at' => $faker->dateTime(),
        'updated_at' => $faker->dateTime(),
    ];
});
