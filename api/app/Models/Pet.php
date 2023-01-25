<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'gender', 'type', 'birth', 'adoptionDate', 'weight', 'vaccines', 'isAllergies', 'allergies', 'isMedications', 'medicationsAndFrequences', 'isHealthProblems', 'healthProblems', 'dateLastVeterinaryConsultation', 'description', 'photoUrl'];
}
