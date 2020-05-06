<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SalesItem extends Model
{
    protected $fillable = ['sales_id', 'item_id'];

    public function sales_item_freebies()
    {
        return $this->hasMany(SalesItemFreebie::class, 'sales_item_id', 'item_id');
    }

    public function items()
    {
        return $this->hasOne(Item::class, 'item_id', 'id');
    }
}
