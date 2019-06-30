<?php

namespace App\Http\Controllers;

use App\FormSubmission;
use Illuminate\Http\Request;

class FormSubmissionController extends Controller
{

    public function store(Request $request)
    {

        $data = $request->all();

        $formSubmission = new FormSubmission();

        if ($formSubmission->validate($data)) {
            FormSubmission::create($data);
            return response(
                [
                    'success' => true,
                    'message'=>'Thanks for your submission. All done!'
                ], 200);
        }

    return response(
        [
            'success' => false,
            'message' => 'Whoops! Please complete all the required fields.',
            'errors' => $formSubmission->errors()->toArray()
        ], 400);
    }

    public function show(Request $request, $id)
    {
        dd(FormSubmission::find($id)->toArray());
    }

}
