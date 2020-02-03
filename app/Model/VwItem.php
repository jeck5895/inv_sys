<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class VwItem extends Model
{
    protected $table = 'vw_items';

    public function unit() 
    {
        return $this->belongsTo(Unit::class, 'unit', 'id');
    }

    public function site() {
        return $this->belongsTo(Site::class, 'site', 'id');
    }
}
