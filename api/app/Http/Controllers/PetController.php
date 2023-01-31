<?php

namespace App\Http\Controllers;

use App\Http\Services\TokenService;
use App\Models\Pet;
use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PetController extends Controller
{
    public function index() {
        return response()->json(Pet::all());
    }

    public function store(Request $request) {
        $userId = TokenService::decode($request->header('Authorization'));
        $user = User::find($userId);
        if(!$user->isIndividual)
            return response()->json("Vous ne pouvez pas ajouter d'animal puisque vous n'avez pas un compte personnel", Response::HTTP_UNAUTHORIZED);
        $requiredFields = ['name', 'gender', 'type', 'birth', 'adoptionDate', 'weight', 'vaccines', 'isAllergies', 'isMedications', 'isHealthProblems', 'dateLastVeterinaryConsultation', 'description', 'photoUrl'];
        $missingFields = array_diff($requiredFields, array_keys($request->all()));
        if ($missingFields)
            return response()->json("La requête doit contenir les champs " . implode(', ', $missingFields), Response::HTTP_BAD_REQUEST);
        $pet = new Pet();
        $pet->userId = $userId;
        $pet->name = $request->input('name');
        $pet->gender = $request->input('gender');
        $pet->type = $request->input('type');
        $pet->birth = $request->input('birth');
        $pet->adoptionDate = $request->input('adoptionDate');
        $pet->weight = $request->input('weight');
        $pet->vaccines = $request->input('vaccines');
        $pet->isAllergies = $request->input('isAllergies');
        if($pet->isAllergies)
            $pet->allergies = $request->input('allergies');
        $pet->isMedications = $request->input('isMedications');
        if($pet->isMedications)
            $pet->medicationsAndFrequences = $request->input('medicationsAndFrequences');
        $pet->isHealthProblems = $request->input('isHealthProblems');
        if($pet->isHealthProblems)
            $pet->healthProblems = $request->input('healthProblems');
        $pet->dateLastVeterinaryConsultation = $request->input('dateLastVeterinaryConsultation');
        $pet->description = $request->input('description');
        $pet->photoUrl = $request->input('photoUrl');
        $pet->save();
        return response()->json($pet, Response::HTTP_CREATED);
    }

    public function show(int $id) {
        $pet = Pet::find($id);
        if(!$pet)
            return response()->json("Cet animal n'existe pas", Response::HTTP_NOT_FOUND);
        return response()->json($pet);
    }

    public function update(int $id, Request $request) {
        $pet = Pet::find($id);
        if(!$pet)
            return response()->json("Cet animal n'existe pas", Response::HTTP_NOT_FOUND);
        $userId = TokenService::decode($request->header('Authorization'));
        if($id !== $userId)
            return response()->json("Vous ne pouvez pas supprimer cet animal", Response::HTTP_UNAUTHORIZED);
        $petData = $request->only(['name', 'gender', 'type', 'birth', 'adoptionDate', 'weight', 'vaccines', 'isAllergies', 'allergies', 'isMedications', 'medicationsAndFrequences', 'isHealthProblems', 'healthProblems', 'dateLastVeterinaryConsultation', 'description', 'photoUrl']);
        $pet->fill($petData)->save();
        return response()->json($pet);
    }

    public function destroy(int $id, Request $request) {
        $pet = Pet::find($id);
        if(!$pet)
            return response()->json("Cet animal n'existe pas", Response::HTTP_NOT_FOUND);
        $userId = TokenService::decode($request->header('Authorization'));
        if($id !== $userId)
            return response()->json("Vous ne pouvez pas supprimer cet animal", Response::HTTP_UNAUTHORIZED);
        $pet->delete();
        return response()->json("L'animal a été supprimé");
    }

    public function findByUserId(int $id) {
        $user = User::find($id);
        if(!$user)
            return response()->json("L'utilisateur n'existe pas", Response::HTTP_NOT_FOUND);
        $pets = Pet::whereUserid($id)->get();
        return response()->json($pets);
    }
}
