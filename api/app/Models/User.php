<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['password', 'isCompany', 'isPetSitter', 'isIndividual', 'email', 'phoneNumber', 'city', 'postalCode', 'address', 'firstname', 'lastname', 'companyName', 'siretNumber', 'website', 'keepcats', 'keepDogs', 'acceptedWeight', 'description', 'profilImage', 'geopos', 'imageLocation'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['password'];

    protected $casts = [
        'geopos' => 'array',
        'imageLocation' => 'array'
    ];
}
