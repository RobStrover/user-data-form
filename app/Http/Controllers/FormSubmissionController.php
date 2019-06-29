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

        echo '<pre>';
        var_dump($formSubmission->validate($data));
        die;

        if ($formSubmission->validate($data)) {
            FormSubmission::create($data);
        } else {
            die('nope');
        }

    }

    public function show(Request $request, $id)
    {
        dd(FormSubmission::find($id)->toArray());
    }

}
