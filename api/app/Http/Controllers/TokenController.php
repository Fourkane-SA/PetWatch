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
        if (!$request->input(['login']))
            return response()->json(['error' => 'Le champ login est manquant dans la requête']);
        if (!$request->input(['password']))
            return response()->json(['error', 'Le champ password est manquant dans la requête']);
        $user = User::whereLogin($request->input(['login']))->first();
        if (!$user)
            return response()->json(['error' => "Ce login n'existe pas"], Response::HTTP_UNAUTHORIZED);
        if (!Hash::check($request->input(['password']), $user->password))
            return response()->json(['error' => "Le mot de passe est incorrect"]);
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
            return response()->json(['error' => "L'utilisateur n'existe pas"], Response::HTTP_NOT_FOUND);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

}
