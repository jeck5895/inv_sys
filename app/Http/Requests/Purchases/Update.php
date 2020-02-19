<?php

namespace App\Http\Requests\Purchases;

use Illuminate\Foundation\Http\FormRequest;

class Update extends FormRequest
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
            'imei' => 'required|numeric|unique:purchases,imei,' . $this->get('id'),
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
