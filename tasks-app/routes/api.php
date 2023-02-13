<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProjectUserController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');

});

Route::apiResource('projects',ProjectController::class);
Route::apiResource('users_in_project',ProjectUserController::class);
Route::apiResource('users',UserController::class);
Route::apiResource('tasks',TaskController::class);
Route::delete('users_in_project',[ProjectUserController::class,'destroy']);
Route::get('projects_with_user/{user_id}',[ProjectUserController::class,'getProjectByUserId']);
Route::get('projects_tasks/{id}',[ProjectController::class,'getTasksOfProject']);
Route::get('user_by_mail/{email}',[UserController::class,'getUserByMail']);