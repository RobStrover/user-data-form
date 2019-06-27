@extends('layouts.index', ['bodyClass' => 'form-template'])

@section('body')
    <div class="container">
        <div class="row align-items-center site-form__container" data-form-endpoint="{{ $formEndpoint }}" data-form-sections="{{ json_encode($formSections) }}">
            <div class="col">
                <SiteForm />
            </div>
        </div>
    </div>
@stop