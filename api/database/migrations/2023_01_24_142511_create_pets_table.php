<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pets', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('userId');
            $table->foreign('userId')->references('id')->on('users');
            $table->string('name');
            $table->string('gender');
            $table->string('type'); //chien / chat
            $table->string('birth');
            $table->string('adoptionDate');
            $table->string('weight'); // [Petit, Moyen, Grand, Géant]
            $table->string('vaccines');
            $table->boolean('isAllergies');
            $table->string('allergies')->nullable();
            $table->boolean('isMedications');
            $table->string('medicationsAndFrequences')->nullable();
            $table->boolean('isHealthProblems');
            $table->string('healthProblems')->nullable();
            $table->string('dateLastVeterinaryConsultation');
            $table->string('description', 2000);
            $table->string('photoUrl');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pets');
    }
};
