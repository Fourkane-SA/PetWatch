<?php

namespace App\Http\Controllers;

use App\Http\Services\GeoposService;
use App\Http\Services\TokenService;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{


    public function index() {
        $users = User::all();
        return response()->json($users);
    }

    public function store(Request $request) {
        $password = $request->input(['password']);
        $role = $request->input(['role']);
        $email = $request->input(['email']);
        $phoneNumber = $request->input(['phoneNumber']);
        $city = $request->input(['city']);
        $postalCode = $request->input(['postalCode']);
        $address = $request->input(['address']);
        $profilImage = $request->input(['profilImage']);
        if (!$password)
            return response()->json('Le mot de passe est manquant', Response::HTTP_BAD_REQUEST);
        if (!$role)
            return response()->json('Le champ role est manquant dans la requête', Response::HTTP_BAD_REQUEST);
        if (!$email)
            return response()->json("L'adresse mail est manquant", Response::HTTP_BAD_REQUEST);
        if (!$phoneNumber)
            return response()->json("Le numéro de téléphone est manquant", Response::HTTP_BAD_REQUEST);
        if (!$city)
            return response()->json("La ville est manquante", Response::HTTP_BAD_REQUEST);
        if (!$postalCode)
            return response()->json("Le code postal est manquant", Response::HTTP_BAD_REQUEST);
        if (!$address)
            return response()->json("L'adresse est manquante", Response::HTTP_BAD_REQUEST);
        $user = new User();
        $user->password = Hash::make($password);
        $user->email = $email;
        $user->phoneNumber = $phoneNumber;
        $user->city = $city;
        $user->postalCode = $postalCode;
        $user->address = $address;
        $user->profilImage = $profilImage;
        $find = User::whereEmail($email)->first();
        if ($find)
            return response()->json('Cette adresse mail est déjà prise', Response::HTTP_UNAUTHORIZED);
        $find = User::wherePhonenumber($phoneNumber)->first();
        if ($find)
            return response()->json('Ce numéro de téléphone est déjà pris', Response::HTTP_UNAUTHORIZED);
        $user->geopos = GeoposService::getPos($user->address, $user->postalCode);
        $user->isPetSitter = false;
        $user->isIndividual = false;
        $user->isCompany = false;
        if(!in_array($role, array('company', 'individual', 'petsitter')))
            return response()->json('Le champ rôle ne peux prendre comme valeur que company, individual et petsitter', Response::HTTP_BAD_REQUEST);
        if($role === 'company') {
            $user->isCompany = true;
            $companyName = $request->input(['companyName']);
            $siretNumber = $request->input(['siretNumber']);
            $website = $request->input(['website']);
            if(!$companyName)
                return response()->json("Le nom de l'entreprise est manquant", Response::HTTP_BAD_REQUEST);
            if(!$siretNumber)
                return response()->json("Le numéro siret l'entreprise est manquant", Response::HTTP_BAD_REQUEST);
            if(!$website)
                return response()->json("Le site internet de l'entreprise est manquant", Response::HTTP_BAD_REQUEST);
            $user->companyName = $companyName;
            $user->siretNumber = $siretNumber;
            $user->website = $website;
        } else {
            if($role === 'individual')
                $user->isIndividual = true;
            else
                $user->isPetSitter = true;
            $firstname = $request->input(['firstname']);
            $lastname = $request->input(['lastname']);
            if (!$firstname)
                return response()->json('Le prénom est manquant', Response::HTTP_BAD_REQUEST);
            if (!$lastname)
                return response()->json('Le nom est manquant', Response::HTTP_BAD_REQUEST);
            $user->firstname = $firstname;
            $user->lastname = $lastname;
        }


        $user->save();
        $token = TokenService::generate($user);
        return response()->json($token, Response::HTTP_CREATED);
    }

    public function show(int $id) {
        $user = User::find($id);
        if (!$user)
            return response()->json("Cet utilisateur n'existe pas", Response::HTTP_NOT_FOUND);
        return response()->json($user);
    }

    public function update(int $id, Request $request) {
        $user = User::find($id);
        if(!$user)
            return response()->json("Cet utilisateur n'existe pas", Response::HTTP_NOT_FOUND);
        $token = $request->header('Authorization');
        $idConnected = TokenService::decode($token);
        if($idConnected !== $id)
            return response()->json("Vous n'etes pas autorisé à modifier cet utilisateur", Response::HTTP_UNAUTHORIZED);
        if($user->isCompany)
            $userData = $request->only(['phoneNumber', 'city', 'postalCode', 'address', 'companyName', 'siretNumber', 'website', 'keepDogs', 'keepCats', 'acceptedWeight', 'description', 'profilImage', 'imageLocation', 'price']);
        else if ($user->isPetSitter)
            $userData = $request->only(['phoneNumber', 'city', 'postalCode', 'address', 'firstname', 'lastname', 'keepDogs', 'keepCats', 'acceptedWeight', 'description', 'profilImage', 'imageLocation', 'price']);
        else
            $userData = $request->only(['phoneNumber', 'city', 'postalCode', 'address', 'firstname', 'lastname', 'profilImage']);
        $user->fill($userData);
        if($request->input('password'))
            $user->password = Hash::make($request->input('password'));
        $user->geopos = GeoposService::getPos($user->address, $user->postalCode);
        $user->save();
        return response()->json($user);
    }

    public function destroy(int $id, Request $request) {
        $user = User::find($id);
        if(!$user)
            return response()->json("Cet utilisateur n'existe pas", Response::HTTP_NOT_FOUND);
        $token = $request->header('Authorization');
        $idConnected = TokenService::decode($token);
        if($idConnected !== $id)
            return response()->json("Vous n'etes pas autorisé à supprimer cet utilisateur", Response::HTTP_UNAUTHORIZED);
        $user->delete();
        return response()->json("L'utilisateur a été supprimé");
    }
}
