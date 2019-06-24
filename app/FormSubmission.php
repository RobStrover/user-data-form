<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FormSubmission extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email_address',
        'mobile_number',
        'gender',
        'date_of_birth',
        'comments'
    ];

    protected $guarded = ['id'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['id'];

    private $rules = [
        'first_name' => 'required|max:191'
    ];

    public function validate($data)
    {
        // make a new validator object
        $v = Validator::make($data, $this->rules);

        // return the result
        return $v;
    }

    /**
     * Encrypt the email address for form submission
     *
     * @var $value
     */
    public function setEmailAddressAttribute($value)
    {
        $this->attributes['email_address'] = encrypt($value);
    }

    /**
     * Decrypt the email address for form submission
     *
     * @var $value
     * @return string
     */
    public function getEmailAddressAttribute($value)
    {
        return decrypt($value);
    }


    /**
     * Encrypt the first name for form submission
     *
     * @var $value
     */
    public function setFirstNameAttribute($value)
    {
        $this->attributes['first_name'] = encrypt($value);
    }

    /**
     * Decrypt the first name for form submission
     *
     * @var $value
     * @return string
     */
    public function getFirstNameAttribute($value)
    {
        return decrypt($value);
    }

    /**
     * Encrypt the last name for form submission
     *
     * @var $value
     */
    public function setLastNameAttribute($value)
    {
        $this->attributes['last_name'] = encrypt($value);
    }

    /**
     * Decrypt the last name for form submission
     *
     * @var $value
     * @return string
     */
    public function getLastNameAttribute($value)
    {
        return decrypt($value);
    }

    /**
     * Encrypt the mobile number for form submission
     *
     * @var $value
     */
    public function setMobileNumberAttribute($value)
    {
        $this->attributes['mobile_number'] = encrypt($value);
    }

    /**
     * Decrypt the mobile number for form submission
     *
     * @var $value
     * @return string
     */
    public function getMobileNumberAttribute($value)
    {
        return decrypt($value);
    }

    /**
     * Encrypt the date of birth for form submission
     *
     * @var $value
     */
    public function setDateOfBirthAttribute($value)
    {
        $this->attributes['date_of_birth'] = encrypt($value);
    }

    /**
     * Decrypt the date of birth for form submission
     *
     * @var $value
     * @return string
     */
    public function getDateOfBirthAttribute($value)
    {
        return decrypt($value);
    }
}
