<?php

namespace App\Http\Controllers;

class FormController extends Controller
{

    public function index()
    {
        $formSections = [
            [
                'name' => 'Your Details',
                'fields' => [
                    [
                        'name' => 'first_name',
                        'label' => 'First Name',
                        'type' => 'text',
                        'validators' => ['required']
                    ],
                    [
                        'name' => 'last_name',
                        'label' => 'Last Name',
                        'type' => 'text',
                        'validators' => ['required']
                    ],
                    [
                        'name' => 'email_address',
                        'label' => 'Email Address',
                        'type' => 'email',
                        'validators' => ['required', 'email']
                    ]
                ]
            ],
            [
                'name' => 'More Fields',
                'fields' => [
                    [
                        'name' => 'mobile_number',
                        'label' => 'Mobile Number',
                        'type' => 'tel',
                        'validators' => ['required', 'uktelephone']
                    ],
                    [
                        'name' => 'gender',
                        'label' => 'Gender',
                        'type' => 'enum',
                        'options' => ['Male', 'Female', 'Other'],
                        'validators' => ['required']
                    ],
                    [
                        'name' => 'date_of_birth',
                        'label' => 'Date Of Birth',
                        'type' => 'date',
                        'validators' => ['required', 'date']
                    ]
                ]
            ],
            [
                'name' => 'Final Comments',
                'fields' => [
                    [
                        'name' => 'comments',
                        'label' => 'Comments',
                        'type' => 'textarea',
                        'validators' => []
                    ]
                ]
            ]
        ];

        return view('index')
            ->with('formSections', $formSections);
    }

}
