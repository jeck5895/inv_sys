<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    // public const columns = [
    //     'id', 'transaction_no', ,
    //     'fullname', 'created_at'
    // ];

    public function item()
    {
        return $this->belongsTo(Purchase::class, 'item_id', 'id');
        // return $this->belongsTo(Item::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id', 'customer_id');
    }

    public function freebies()
    {
        return $this->hasMany(Freebie::class, 'sales_id');
    }
}
