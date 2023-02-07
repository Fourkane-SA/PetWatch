<?php

use App\Http\Controllers\ConversationController;
use App\Http\Controllers\PetController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\TokenController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::patch('/users/{id}', [UserController::class, 'update'])->middleware('verifyToken');
Route::delete('/users/{id}', [UserController::class, 'destroy'])->middleware('verifyToken');

Route::post('/tokens', [TokenController::class, 'generate']);
Route::get('/tokens', [TokenController::class, 'decode'])->middleware('verifyToken');

Route::post('/uploadImage', [ImageController::class, 'addImage'])->middleware('verifyToken');

Route::get('/pets', [PetController::class, 'index']);
Route::post('/pets', [PetController::class, 'store'])->middleware('verifyToken');
Route::get('/pets/{id}', [PetController::class, 'show']);
Route::patch('/pets/{id}', [PetController::class, 'update'])->middleware('verifyToken');
Route::delete('/pets/{id}', [PetController::class, 'destroy'])->middleware('verifyToken');
Route::get('/pets/byUserId/{id}', [PetController::class, 'findByUserId']);

Route::get('/reviews', [ReviewController::class, 'index']);
Route::post('/reviews', [ReviewController::class, 'store'])->middleware('verifyToken');
Route::get('/reviews/{id}', [ReviewController::class, 'show']);
Route::delete('/reviews/{id}', [ReviewController::class, 'destroy'])->middleware('verifyToken');
Route::get('/reviews/stars/{id}', [ReviewController::class, 'countStars']);
Route::get('/reviews/byUserId/{id}', [ReviewController::class, 'byUserId']);
Route::get('/reviews/sendByUserId/{id}', [ReviewController::class, 'sendByUserId']);

Route::get('/reservations', [ReservationController::class, 'index']);
Route::post('/reservations', [ReservationController::class, 'store'])->middleware('verifyToken');
Route::get('/reservations/{id}', [ReservationController::class, 'show']);
Route::patch('/reservations/accept/{id}', [ReservationController::class, 'accept'])->middleware('verifyToken');
Route::patch('/reservations/refuse/{id}', [ReservationController::class, 'refuse'])->middleware('verifyToken');
Route::get('/reservations/byUserId/client/{id}', [ReservationController::class, 'byUserIdClient']);
Route::get('/reservations/byUserId/petSitterPro/{id}', [ReservationController::class, 'byUserIdPetSitterPro']);


Route::get('/conversations', [ConversationController::class, 'index']);
Route::get('/conversations/getByClientID/{id}', [ConversationController::class, 'getByClientID']);
Route::get('/conversations/getByProID/{id}', [ConversationController::class, 'getByProID']);
Route::get('/conversations/getByClientAndPro/{clientId}/{proId}', [ConversationController::class, 'getByClientAndPro']);

Route::get('/messages/{id}', [MessageController::class, 'getByConversation']);
Route::post('/messages', [MessageController::class, 'postMessage']);
