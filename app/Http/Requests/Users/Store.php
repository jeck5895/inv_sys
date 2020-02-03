<?php

namespace App\Http\Requests\Users;

use Illuminate\Foundation\Http\FormRequest;

class Store extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->account_type == 1 ? true : false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id' => 'required|unique:users',
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'account_type' => 'required|numeric|in:1,2',
            'password' => 'required|confirmed|min:8',
            'password_confirmation' => 'required'
        ];
    }
}
