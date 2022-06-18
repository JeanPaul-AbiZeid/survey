<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');

});

Route::controller(AdminController::class)->group(function () {
    Route::get('/gettypes', 'getAlltypes');
    Route::post('/addsurvey', 'addSurvey');
    Route::post('/addquestion', 'addQuestion');
    Route::post('/addoption', 'addOption');
});

Route::controller(UserController::class)->group(function () {
    Route::get('/getsurveys/{id?}', 'getAllsurveys');
    Route::get('/getcompleted', 'getCompleted');
    Route::post('/addcompleted', 'addCompleted');
    Route::get('/getquestions/{id}', 'getAllquestions');
    Route::post('/addanswer', 'addAnswer');

});