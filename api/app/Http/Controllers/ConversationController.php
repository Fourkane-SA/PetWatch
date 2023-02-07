<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use Illuminate\Http\Request;

use function GuzzleHttp\Promise\all;

class ConversationController extends Controller
{
    function index() {
        return response()->json(Conversation::all());
    }

    function getByClientID(int $id) {
        return response()->json(Conversation::whereIdclient($id)->get());
    }

    function getByProID(int $id) {
        return response()->json(Conversation::whereIdclient($id)->get());
    }

    function getByClientAndPro(int $clientId, int $proId) {
        $conv = Conversation::whereIdclient($clientId)->whereIdpro($proId)->first();
        if(!$conv) {
            $newConv = new Conversation();
            $newConv->idClient = $clientId;
            $newConv->idPro = $proId;
            $newConv->save();
            $conv = $newConv;
        }
        return response()->json($conv);
    }
}
