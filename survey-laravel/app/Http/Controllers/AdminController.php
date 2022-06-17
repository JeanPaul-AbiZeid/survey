<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Type;

class AdminController extends Controller
{
    public function getAlltypes(){
        $type = Type::all();
        
        return response()->json([
            "status" => "Success",
            "types" => $type
        ], 200);
    }
}
