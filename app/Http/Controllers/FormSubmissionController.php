<?php

namespace App\Http\Controllers;

use App\FormSubmission;
use Illuminate\Http\Request;

class FormSubmissionController extends Controller
{

    public function store(Request $request)
    {

        $data = $request->all();

        FormSubmission::create($data);

    }

    public function show(Request $request, $id)
    {
        dd(FormSubmission::find($id)->toArray());
    }

}
