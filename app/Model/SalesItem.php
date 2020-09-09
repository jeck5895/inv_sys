<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SalesItem extends Model
{
    protected $fillable = ['sales_id', 'item_id', 'discount'];

    public function sales_item_freebies()
    {
        return $this->hasMany(SalesItemFreebie::class, 'sales_item_id', 'id');
    }

    public function item()
    {
        return $this->hasOne(Item::class, 'id', 'item_id');
    }

    public function sales()
    {
        return $this->hasOne(Sale::class, 'id', 'sales_id');
    }
}
