<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;
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
}
