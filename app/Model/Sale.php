<?php

namespace App\Model;

use App\User;
use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class Sale extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    // public const columns = [
    //     'id', 'transaction_no', ,
    //     'fullname', 'created_at'
    // ];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id', 'customer_id');
    }

    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
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
