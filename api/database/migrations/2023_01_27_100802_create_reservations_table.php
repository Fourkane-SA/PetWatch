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
     *
     * demandes =>
     *      UserId du client
     *      UserId du pro / pet-sitter
     *      Date de début
     *      Date de fin
     *      Id Animaux concernés
     *      Status [En attente, acceptée, refusé]
     */
    public function up()
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('userIdClient');
            $table->foreign('userIdClient')->references('id')->on('users');
            $table->unsignedBigInteger('userIdPro');
            $table->foreign('userIdPro')->references('id')->on('users');
            $table->string('start');
            $table->string('end');
            $table->json('idPets');
            $table->string('status');
            $table->string('refuseReasons', 2000)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservations');
    }
};
