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
        return $this->user()->account_type == 1 ? true : false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $payment_mode = "HOME CREDIT";

        return [
            'receipt_no' => 'required|unique:sales,receipt_no,' . $this->get("id"),
            'payment_mode' => 'required|string',
            // 'payment_terms' => 'required_if:payment_mode,==,' . $payment_mode,
            'total_amount' => 'required|numeric',
            'items' => 'required|array'
        ];
    }
}
