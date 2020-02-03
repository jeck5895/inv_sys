<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    public function category()
    {
        return $this->hasOne(Category::class);
    }

    public function model()
    {
        return $this->hasOne(Model::class);
    }

    public function color()
    {
        return $this->hasnOne(Color::class);
    }

    public function brand()
    {
        return $this->hasOne(Brand::class);
    }

    public function supplier()
    {
        return $this->hasOne(Supplier::class);
    }
}
