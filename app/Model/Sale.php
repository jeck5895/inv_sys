<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    // public const columns = [
    //     'id', 'transaction_no', ,
    //     'fullname', 'created_at'
    // ];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id', 'customer_id');
    }


    public function sales_items()
    {
        return $this->hasMany(SalesItem::class, 'sales_id', 'id');
    }

    public function items()
    {
        return $this->belongsToMany(Item::class);
    }

    public function freebies()
    {
        return $this->hasManyThrough(SalesItemFreebie::class, SalesItem::class, 'sales_id', 'sales_item_id', 'id');
    }

    public function delete()
    {
        $this->freebies()->delete();
        $this->sales_items()->delete();

        return parent::delete();
    }
}
