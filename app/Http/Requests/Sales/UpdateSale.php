<?php

namespace App\Http\Requests\Sales;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSale extends FormRequest
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
            'customer_type' => 'required',
            'customer_id' => 'required',
            'fullname' => 'required',
            'fund' => 'required',
            'items' => 'required'
            // 'item_id' => 'required|numeric',
            // 'quantity' => 'required|numeric',
        ];
    }
}
