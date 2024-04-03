<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $table = 'utilisateur'; // Nom de votre table de tweets dans la base de données
    protected $primaryKey = "idutilisateur";

    protected $fillable = [
        "pseudoutilisateur",
        "mpdutilisateur",
        "mailutilisateur",
    ];
}
