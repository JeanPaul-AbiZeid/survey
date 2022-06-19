<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;
use App\Models\Question;
use App\Models\Option;
use App\Models\User_answer;
use App\Models\Type;
use App\Models\Completed_survey;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getAllsurveys($id = null){
        if($id != null){
            $survey = Survey::find($id);
        }else{
            $survey = Survey::all();
        }
        
        return response()->json([
            "status" => "Success",
            "surveys" => $survey
        ], 200);
    }

    public function getCompleted(){
        $user = Auth::user();
        $completed_surveys = $user->completedSurveys;

        return response()->json([
            "Completed_surveys" => $completed_surveys
        ], 200);
    }

    public function addCompleted(Request $request){
        $survey = Completed_survey::create([
            'user_id' => $request->user_id,
            'survey_id' => $request->survey_id
        ]);

        return response()->json([
            "status" => "Success"
        ], 200);
    }

    public function getAllquestions($id){
        $survey = Survey::find($id);
        $survey->questions = Survey::find($id)->questions;
        for ($i = 0; $i < count($survey->questions); $i++){
            $survey->questions[$i]->type = Type::find($survey->questions[$i]->type_id)->type;
        }
        for ($i = 0; $i < count($survey->questions); $i++){
            $survey->questions[$i]->options = Question::find($survey->questions[$i]->id)->options;
        }
        
        return response()->json([
            "status" => "Success",
            "survey" => $survey
        ], 200);
    }

    public function addAnswer(Request $request){
        $answer = User_answer::create([
            'user_id' => $request->user_id,
            'question_id' => $request->question_id,
            'answer' => $request->answer
        ]);

        return response()->json([
            "status" => "Success"
        ], 200);
    }
}
