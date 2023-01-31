<?php

namespace App\Http\Controllers;

use App\Http\Services\TokenService;
use App\Models\reservation;
use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ReservationController extends Controller
{
    public function index() {
        return response()->json(reservation::all());
    }

    public function store(Request $request) {
        $userId = TokenService::decode($request->header('Authorization'));
        $userIdPro = $request->input('userIdPro');
        $start = $request->input('start');
        $end = $request->input('end');
        $idPets = $request->input('idPets');
        if(!$userIdPro || !$start || !$end || !$idPets)
            return response()->json("Les champs userIdPro, start, end et idPets sont manquants", Response::HTTP_BAD_REQUEST);
        $reservation = new reservation();
        $reservation->userIdClient = $userId;
        $reservation->userIdPro = $userIdPro;
        $reservation->start = $start;
        $reservation->end = $end;
        $reservation->idPets = $idPets;
        $reservation->status = 'En attente';
        $reservation->save();
        return response()->json($reservation, Response::HTTP_CREATED);
    }

    public function accept(int $id, Request $request) {
        $reservation = reservation::find($id);
        if(!$reservation)
            return response()->json("Cette reservation n'existe pas", Response::HTTP_NOT_FOUND);
        $userId = TokenService::decode($request->header('Authorization'));
        if($reservation->userIdPro !== $userId)
            return response()->json("Vous ne pouvez pas modifier cette reservation", Response::HTTP_UNAUTHORIZED);
        $reservation->status = 'Acceptée';
        $reservation->save();
        return response()->json($reservation);
    }

    public function refuse(int $id, Request $request) {
        $reservation = reservation::find($id);
        if(!$reservation)
            return response()->json("Cette reservation n'existe pas", Response::HTTP_NOT_FOUND);
        $userId = TokenService::decode($request->header('Authorization'));
        if($reservation->userIdPro !== $userId)
            return response()->json("Vous ne pouvez pas modifier cette reservation", Response::HTTP_UNAUTHORIZED);
        $reservation->status = 'Refusé';
        $reservation->refuseReasons = $request->input('refuseReasons');
        $reservation->save();
        return response()->json($reservation);
    }

    public function show($id) {
        $reservation = reservation::find($id);
        if(!$reservation)
            return response()->json("Cette reservation n'existe pas", Response::HTTP_NOT_FOUND);
        return response()->json($reservation);
    }

    public function byUserIdClient($id) {
        $user = User::find($id);
        if(!$user)
            return response()->json("Cet utitlisateur n'existe pas", Response::HTTP_NOT_FOUND);
        $reservations = reservation::whereUseridclient($id)->get();
        return response()->json($reservations);
    }
    public function byUserIdPetSitterPro($id) {
        $user = User::find($id);
        if(!$user)
            return response()->json("Cet utitlisateur n'existe pas", Response::HTTP_NOT_FOUND);
        $reservations = reservation::whereUseridpro($id)->get();
        return response()->json($reservations);
    }
}
