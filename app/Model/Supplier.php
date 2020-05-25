<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;


class Supplier extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    //
}
