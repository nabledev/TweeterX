<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    // Déclaration des middlewares...
    protected $middleware = [
        // Autres middlewares...
        'cors' =>  \App\Http\Middleware\OwnCors::class,
    ];
}
