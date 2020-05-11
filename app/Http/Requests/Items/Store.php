<?php

namespace App\Http\Requests\Items;

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
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'imei' => 'required|numeric|unique:items',
            'category' => 'required|numeric',
            'color' => 'required|numeric',
            'brand' => 'required|numeric',
            'model' => 'required|numeric',
            'supplier' => 'required|numeric',
            'cost' => 'required|numeric',
            'price' => 'required|numeric',
        ];
    }
}
