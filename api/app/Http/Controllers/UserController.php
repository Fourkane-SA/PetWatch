<?php

namespace App\Http\Controllers;

use App\Http\Services\TokenService;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function index() {
        return response()->json(User::all());
    }

    public function store(Request $request) {
        $login = $request->input(['login']);
        $password = $request->input(['password']);
        if (!$login)
            return response()->json('Le champ login est manquant dans la requête', Response::HTTP_BAD_REQUEST);
        if (!$password)
            return response()->json('Le champ password est manquant dans la requête', Response::HTTP_BAD_REQUEST);
        $user = new User();
        $user->login = $login;
        $user->password = Hash::make($password);
        $find = User::whereLogin($login)->first();
        if ($find)
            return response()->json('Ce login est déjà pris', Response::HTTP_UNAUTHORIZED);
        $user->save();
        $token = TokenService::generate($user);
        return response()->json($token, Response::HTTP_CREATED);
    }

    public function show(int $id) {
        $user = User::find($id);
        if (!$user)
            return response()->json(['error' => "Cet utilisateur n'existe pas"], Response::HTTP_NOT_FOUND);
        return response()->json($user);
    }

    // TODO => ajouter d'autres données dans users pour les modifier
    /*public function update(int $id, Request $request) {
        $user = User::find($id);
        if(!$user)
            return response()->json(['error' => "Cet utilisateur n'existe pas"], Response::HTTP_NOT_FOUND);
        $token = $request->header('Authorization');
        $idConnected = TokenService::decode($token);
        if($idConnected !== $id)
            return response()->json(['error' => "Vous n'etes pas autorisé à modifier cet utilisateur"], Response::HTTP_UNAUTHORIZED);

    }*/

    public function destroy(int $id, Request $request) {
        $user = User::find($id);
        if(!$user)
            return response()->json(['error' => "Cet utilisateur n'existe pas"], Response::HTTP_NOT_FOUND);
        $token = $request->header('Authorization');
        $idConnected = TokenService::decode($token);
        if($idConnected !== $id)
            return response()->json(['error' => "Vous n'etes pas autorisé à supprimer cet utilisateur"], Response::HTTP_UNAUTHORIZED);
        $user->delete();
        return response()->json("L'utilisateur a été supprimé");
    }
}
