<?php

namespace App\Http\Controllers;

use App\Http\Services\TokenService;
use App\Models\Review;
use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ReviewController extends Controller {

    public function index() {
        return response()->json(Review::all());
    }

    public function store (Request $request) {
        $userId = TokenService::decode($request->header('Authorization'));
        $userReceiverId = $request->input('userReceiverId');
        if(!$userReceiverId)
            return response()->json("Cet utilisateur n'a pas été trouvé", Response::HTTP_NOT_FOUND);
        if($userId === $userReceiverId)
            return response()->json("Impossible de se donner un avis", Response::HTTP_UNAUTHORIZED);
        $review = new Review();
        $checkReview = Review::whereUsersenderid($userId)->whereUserreceiverid($userReceiverId)->first();
        if($checkReview)
            $review = $checkReview;
        $review->userReceiverId = $userReceiverId;
        $review->userSenderId = $userId;
        $review->description = $request->input('description');
        $review->stars = $request->input('stars');
        if(!$review->description || !$review->stars)
            return response()->json("La requête doit contenir les champs description et stars");
        if($review->stars > 5 || $review->stars < 1)
            return response()->json("Le champ stars doit être compris entre 1 et 5", Response::HTTP_BAD_REQUEST);
        $review->save();
        return response()->json($review, Response::HTTP_CREATED);
    }

    public function show(int $id) {
        $review = Review::find($id);
        if(!$review)
            return response()->json("Cet avis n'existe pas", Response::HTTP_NOT_FOUND);
        return response()->json($review);
    }

    public function countStars(int $id) {
        $user = User::find($id);
        if(!$user)
            return response()->json("Cet utilisateur n'existe pas", Response::HTTP_NOT_FOUND);
        $reviews = Review::whereUserreceiverid($id)->get();
        if($reviews->count() === 0)
            return response()->json(0);
        $count = 0;
        for($i=0; $i<$reviews->count(); $i++)
            $count+=$reviews[$i]->stars;
        $count /= $reviews->count();
        return response()->json($count);
    }

    public function byUserId(int $id) {
        $user = User::find($id);
        if(!$user)
            return response()->json("Cet utilisateur n'existe pas", Response::HTTP_NOT_FOUND);
        $reviews = Review::whereUserreceiverid($id)->get();
        return response()->json($reviews);
    }

    public function sendByUserId(int $id) {
        $user = User::find($id);
        if(!$user)
            return response()->json("Cet utilisateur n'existe pas", Response::HTTP_NOT_FOUND);
        $reviews = Review::whereUsersenderid($id)->get();
        return response()->json($reviews);
    }

    public function destroy(int $id, Request $request) {
        $userId = TokenService::decode($request->input('Authorisation'));
        $review = Review::find($id);
        if(!$review)
            return response()->json("Cet avis n'existe pas", Response::HTTP_NOT_FOUND);
        if($review->userSenderId !== $userId)
            return response()->json("Vous ne pouvez pas supprimer cet avis", Response::HTTP_UNAUTHORIZED);
        $review->delete();
        return response()->json("Avis supprimé");
    }
}
