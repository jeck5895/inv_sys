<?php

namespace App\Http\Requests\Items;

use Illuminate\Foundation\Http\FormRequest;

class StoreItem extends FormRequest
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
            'item_name' => 'required|unique:items',
            'item_code' => 'required|unique:items',
            'unit' => 'required|numeric',
            'quantity' => 'required|numeric',
            'price' => 'required',
            'site' => 'required|numeric',
            'dr_number' => 'required' 
        ];
    }
}
