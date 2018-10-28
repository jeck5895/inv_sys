<?php

namespace App\Http\Requests\Items;

use Illuminate\Foundation\Http\FormRequest;

class UpdateItem extends FormRequest
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
            'item_name' => 'required|unique:items,item_name,'.$this->get('id'),
            'item_code' => 'required|unique:items,item_code,'.$this->get('id'),
            'unit' => 'required|numeric',
            'quantity' => 'required|numeric',
            'price' => 'required',
            'site' => 'required|numeric',
            'dr_number' => 'required' 
        ];
    }
}
