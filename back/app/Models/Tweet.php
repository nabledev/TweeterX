<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Users;

class Tweet extends Model
{
    use HasFactory;
    protected $table = 'tweet'; // Nom de votre table de tweets dans la base de données
    protected $primaryKey = "idtweet";

    protected $fillable = [
        "idutilisateur",
        "MESSAGETWEET",
        "NBVUE",
    ];

    public function utilisateur()
    {
    
        return $this->belongsTo(Users::class, 'idutilisateur', 'idutilisateur');
    }


}