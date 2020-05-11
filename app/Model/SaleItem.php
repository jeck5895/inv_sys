<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Relations\Pivot;

class SaleItem extends Pivot
{
    public function sales()
    {
        return $this->hasMany(Sale::class);
    }

    public function items()
    {
        return $this->hasMany(Item::class);
    }
}
