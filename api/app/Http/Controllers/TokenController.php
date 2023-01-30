<?php

namespace App\Http\Controllers;
use App\Http\Services\TokenService;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;



class TokenController extends Controller {

    public function generate(Request $request) {
        if (!$request->input(['email']))
            return response()->json('Le champ email est manquant dans la requête');
        if (!$request->input(['password']))
            return response()->json('Le champ password est manquant dans la requête');
        $user = User::whereEmail($request->input(['email']))->first();
        if (!$user)
            return response()->json("Cet adresse mail n'est pas enregistré", Response::HTTP_UNAUTHORIZED);
        if (!Hash::check($request->input(['password']), $user->password))
            return response()->json("Le mot de passe est incorrect");
        $token = TokenService::generate($user);
        return response()->json($token);
    }

    public function decode(Request $request) {
        $token = $request->header('Authorization');
        try {
            $id = TokenService::decode($token);
            User::findOrFail($id);
            return response()->json($id);
        } catch (ModelNotFoundException $modelNotFoundException) {
            return response()->json("L'utilisateur n'existe pas", Response::HTTP_NOT_FOUND);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

}
