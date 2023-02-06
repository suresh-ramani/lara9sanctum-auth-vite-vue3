<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;


class QuestionController extends Controller



{





    // Get all questions 

    public function index()


    {

        $questions = Question::all();

        return response()->json(['questions' => $questions], 200);

    }

  


   

    // store a new question 

    public function store(Request $request)
    {
        $question = Question::create($request->all());

        return response()->json($question, 201);
    }


    // Delete a question 

    public function delete(Question $question)
    {
        $question->delete();

        return response()->json(null, 204);
    }
    


}
