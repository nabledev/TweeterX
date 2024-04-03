<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users;

class UsersController extends Controller
{
    public function GetAllUser(){
        return Users::all();
    }

    // getBy mail 
    public function getByMail($email)
    {
        try {
            // Recherche de l'utilisateur par son adresse e-mail
            $user = User::where('mailutilisateur', $email)->first();

            if ($user) {
                // Si l'utilisateur est trouvé, retournez-le en réponse JSON
                return response()->json(['user' => $user], 200);
            } else {
                // Si aucun utilisateur n'est trouvé, retournez une réponse avec un message d'erreur
                return response()->json(['message' => 'Aucun utilisateur trouvé pour cette adresse e-mail'], 404);
            }
        } catch (\Exception $e) {
            // En cas d'erreur, retournez une réponse avec un message d'erreur
            return response()->json(['message' => 'Une erreur est survenue lors de la récupération de l\'utilisateur.'], 500);
        }
    }

    // post user 
    public function store(Request $request)
    {
        // Validation des données reçues
        $request->validate([
            'pseudoutilisateur' => 'required|string',
            'mpdutilisateur' => 'required|string',
            'mailutilisateur' => 'required|email|unique:utilisateur',
        ]);

        // Création de l'utilisateur
        $user = User::create([
            'pseudoutilisateur' => $request->input('pseudoutilisateur'),
            'mpdutilisateur' => $request->input('mpdutilisateur'),
            'mailutilisateur' => $request->input('mailutilisateur'),
        ]);

        // Retourner une réponse
        return response()->json(['message' => 'Utilisateur créé avec succès', 'user' => $user], 201);
    }
}
