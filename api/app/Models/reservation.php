<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class reservation extends Model
{
    use HasFactory;

    protected $casts = [
        'idPets' => 'array'
    ];

    protected $fillable = ['status', 'refuseReasons'];
}
