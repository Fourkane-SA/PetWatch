<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ImageController extends Controller
{
    public function addImage(Request $request) {
        $image = new Image();
        $image->title = 'test';//$request->input(['title']);
        if(!$request->hasFile('image'))
            return response()->json("Le champ image est manquant dans la requête", Response::HTTP_BAD_REQUEST);
        $path = $request->file('image')->store('images');
        $image->uri = $path;
        $image->save();
        return response()->json($image);
    }
}
