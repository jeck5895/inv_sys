<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SalesItemFreebie extends Model
{
    protected $fillable = ["sales_item_id", "freebie_id"];

    public function sales_item()
    {
        return $this->belongsTo(SalesItem::class, 'item_id');
    }

    public function freebie()
    {
        return $this->hasOne(Freebie::class, 'id', 'freebie_id');
    }
}
