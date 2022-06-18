<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Type;
use App\Models\Survey;
use App\Models\Question;

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

    public function addQuestion(Request $request){
        $survey = Question::create([
            'question' => $request->question,
            'type_id' => $request->type_id,
            'survey_id' => $request->survey_id
        ]);
        
        return response()->json([
            "status" => "Success"
        ], 200);
    }
}
