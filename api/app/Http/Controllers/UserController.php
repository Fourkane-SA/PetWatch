<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class UserController extends Controller
{
    public function index() {
        return response()->json(User::all());
    }

    public function store(Request $request) {
        $login = $request->login;
        $password = $request->password;
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
        return response()->json($user);
    }
}
