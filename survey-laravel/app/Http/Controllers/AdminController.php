<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Type;
use App\Models\Survey;

class AdminController extends Controller
{
    public function getAlltypes(){
        $type = Type::all();
        
        return response()->json([
            "status" => "Success",
            "types" => $type
        ], 200);
    }

    public function addSurvey(Request $request){
        $survey = Survey::create([
            'name' => $request->name
        ]);
        
        return response()->json([
            "status" => "Success"
        ], 200);
    }
}
