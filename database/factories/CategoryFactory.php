<?php

use Faker\Generator as Faker;

$factory->define(App\Model\Category::class, function (Faker $faker) {

    $categories = ['mobile', 'headphone', 'earphone', 'powerbank'];

    return [
        'name' => $faker->randomElement($categories),
        'created_at' => $faker->dateTime(),
        'updated_at' => $faker->dateTime(),
    ];
});
