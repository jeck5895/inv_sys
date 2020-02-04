<?php

use Faker\Generator as Faker;

$factory->define(App\Model\Brand::class, function (Faker $faker) {
    $brands = ['Samsung', 'Huawei', 'Oppo', 'Vivo', 'Xiaomi', 'Apple', 'Nokia', ' Sony'];
    return [
        'name' => $faker->randomElement($brands),
        'created_at' => $faker->dateTime(),
        'updated_at' => $faker->dateTime(),
    ];
});
