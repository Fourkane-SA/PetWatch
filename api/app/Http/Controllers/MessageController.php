<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class MessageController extends Controller
{
    function getByConversation($id) {
        $messages = Message::whereIdconversation($id)->get();
        return response()->json($messages);
    }

    function postMessage(Request $request) {
        $message = new Message();
        $message->idConversation = $request->input('idConversation');
        $message->idSender = $request->input('idSender');
        $message->message = $request->input('message');
        $message->save();
        return response()->json($message, Response::HTTP_CREATED);
    }
}
