<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tweet;
use App\Models\Users;



class TweetController extends Controller
{
    public function index(){
        return Tweet::all();
    }

    public function indexJoin()
    {
        // Effectuer la jointure en utilisant la relation définie dans le modèle Utilisateur
        $tweets = Tweet::with('utilisateur')->get();

        return response()->json(['tweets' => $tweets], 200);
    }

  

    // post 
    public function store(Request $request)
    {
        // Validation des données reçues
        $request->validate([
            'idutilisateur' => 'required|integer', // Exemple de règle de validation
            'MESSAGETWEET' => 'required|string|max:280',
            'NBVUE' => 'nullable|integer', // Exemple de règle de validation
        ]);

        // Création du tweet
        $tweet = Tweet::create([
            'idutilisateur' => $request->input('idutilisateur'),
            'MESSAGETWEET' => $request->input('MESSAGETWEET'),
            'NBVUE' => $request->input('NBVUE'),
        ]);

        // Retourner une réponse
        return response()->json(['message' => 'Tweet créé avec succès', 'tweet' => $tweet], 201);
    }


}
