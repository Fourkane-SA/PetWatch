<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;



class UserController extends Controller {
    
    public function generate(Request $request) {
        if (!$request->login)
            return response()->json(['error' => 'Le champ login est manquant dans la requête']);
        if (!$request->password)
            return response()->json(['error', 'Le champ password est manquant dans la requête']);
        $user = User::whereLogin($request->login);
        if (!$user)
            return response()->json(['error' => "Ce login n'existe pas"], Response::HTTP_UNAUTHORIZED);
        if (!Hash::check($request->password, $user->password))
            return response()->json(['error' => "Le mot de passe est incorrect"]);
    }

    public function decode(Request $request) {

    }

}