<?php

namespace App\Http\Middleware;

use App\Http\Services\TokenService;
use Closure;
use Exception;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class VerifyToken {
    public function handle(Request $request, Closure $next) {
        $token = $request->header('Authorization'); // Recupère le token dans le header de la requête
        if(!$token) { // Si le token n'est pas présent
            return response()->json("Le token est manquant dans le header de la requête", Response::HTTP_BAD_REQUEST);
        }
        try {
            TokenService::decode($token); // Lève une exception si le token n'est pas valide
            return $next($request); // Le middleware est valide
        } catch (Exception $e) { // Le token n'est pas valide
            return response()->json($e->getMessage(), Response::HTTP_UNAUTHORIZED);
        }
    }
}
