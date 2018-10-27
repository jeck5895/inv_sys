<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ItemsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('items')->insert([
            [
                'item_code' => strtoupper(str_random(10)),
                'item_name' => 'Bag',
                'unit' => 2 ,
                'quantity' => 150,
                'price' =>  200,
                'site' => rand(1, 2),
                'dr_number' => mt_rand(10,100),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'), 
            ],
            [
                'item_code' => strtoupper(str_random(10)),
                'item_name' => 'Jogging Pants',
                'unit' => 2 ,
                'quantity' => 150,
                'price' =>  750,
                'site' => rand(1, 2),
                'dr_number' => mt_rand(10,100),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'), 
            ],
            [
                'item_code' => strtoupper(str_random(10)),
                'item_name' => 'Polo',
                'unit' => 2 ,
                'quantity' => 150,
                'price' =>  250,
                'site' => rand(1, 2),
                'dr_number' => mt_rand(10,100),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'), 
            ],
            [
                'item_code' => strtoupper(str_random(10)),
                'item_name' => 'Lanyard',
                'unit' => 2 ,
                'quantity' => 150,
                'price' =>  150,
                'site' => rand(1, 2),
                'dr_number' => mt_rand(10,100),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'), 
            ],
            [
                'item_code' => strtoupper(str_random(10)),
                'item_name' => 'Book',
                'unit' => 2 ,
                'quantity' => 150,
                'price' =>  200,
                'site' => rand(1, 2),
                'dr_number' => mt_rand(10,100),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'), 
            ],
            [
                'item_code' => strtoupper(str_random(10)),
                'item_name' => 'Manuals',
                'unit' => 2 ,
                'quantity' => 150,
                'price' =>  200,
                'site' => rand(1, 2),
                'dr_number' => mt_rand(10,100),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'), 
            ],
            [
                'item_code' => strtoupper(str_random(10)),
                'item_name' => 'T-Shirts',
                'unit' => 2 ,
                'quantity' => 150,
                'price' =>  200,
                'site' => rand(1, 2),
                'dr_number' => mt_rand(10,100),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'), 
            ],
            [
                'item_code' => strtoupper(str_random(10)),
                'item_name' => 'Ballpen',
                'unit' => 2 ,
                'quantity' => 150,
                'price' =>  200,
                'site' => rand(1, 2),
                'dr_number' => mt_rand(10,100),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'), 
            ]
        ]);   
    }
}
