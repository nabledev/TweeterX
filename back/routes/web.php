<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TweetController;
use App\Http\Controllers\UsersController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/tweets', [TweetController::class, 'index']);

Route::get('/Users', [UsersController::class, 'GetAllUser']);