<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $guarded = [];

    public static $columns = [
        'id', 'item_code', 'item_name',
        'unit', 'quantity', 'price',
        'site', 'dr_number', 'created_at'
    ];

    public function unit() 
    {
        return $this->belongsTo(Unit::class, 'unit', 'id');
    }

    public function site() {
        return $this->belongsTo(Site::class, 'site', 'id');
    }
}
