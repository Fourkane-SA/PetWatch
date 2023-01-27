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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('password');
            $table->boolean('isIndividual');
            $table->boolean('isCompany');
            $table->boolean('isPetSitter');
            $table->string('email')->unique();
            $table->string('phoneNumber')->unique();
            $table->string('city');
            $table->string('postalCode');
            $table->string('address');

            // individual / petsitter account only
            $table->string('firstname')->nullable();
            $table->string('lastname')->nullable();

            // company account only
            $table->string('companyName')->nullable();
            $table->string('siretNumber')->unique()->nullable();
            $table->string('website')->nullable();

            // petsitter / company only
            $table->boolean('keepDogs')->nullable();
            $table->boolean('keepCats')->nullable();
            $table->string('acceptedWeight')->nullable();
            $table->string('description', 2000)->nullable();
            $table->string('imageURL')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
