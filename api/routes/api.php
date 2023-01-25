<?php

use App\Http\Controllers\PetController;
use App\Http\Controllers\ImageController;
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
