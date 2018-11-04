<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    public const columns = [
        'id', 'transaction_no', 'customer_type',
        'fullname', 'created_at'
    ];
}
