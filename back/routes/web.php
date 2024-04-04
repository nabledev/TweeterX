<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TweetController;
use App\Http\Controllers\UsersController;

Route::get('/', function () {
    return view('welcome');
});

// getTweet
Route::get('/tweets', [TweetController::class, 'index']);


Route::get('/tweetsjoin', [TweetController::class, 'indexJoin']);

// getUSers
Route::get('/Users', [UsersController::class, 'GetAllUser']);

// getByMail 
Route::get('/user/{email}', [UserController::class, 'getByMail']);

// post de users 
Route::post('/user/post', [UserController::class, 'store']);

// post de teweet
Route::post('/tweet', [TweetController::class, 'store']);

