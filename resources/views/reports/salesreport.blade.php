@extends('layouts.report-layout') 

@section('content')
    <html>
        <head>
            <style>
                body{
                    font-family: Helvetica, sans-serif;
                    font-size: 13px;
                }
                table{
                    width: 100%;
                    margin: 20px 0px 40px 0px;
                    border-collapse: collapse;
                }
                table th{
                    padding: 5px;
                }
                table td{
                    padding: 2px 5px;
                }
                table td, table th{
                    border: 1px solid black;
                }
                .general-total{
                    padding: 8px;
                    text-align: right;
                    font-size: 18px;
                    font-weight: bold;
                    border:none;
                }
                .total-amount{
                    border:none;
                }
                .signatories{
                    width: 100%;
                    text-align: center;
                }
                .signature{
                    padding: 0px 20px;
                    margin: 0 80px;
                    border-top: 0.5px solid black;
                }
            </style>
        </head>
        <body>
            <div class="report-hedear">
                <h2>Sales Report for Month of {{ $month }}</h2>
            </div>
            <hr>
            <table>
                <thead>
                    <tr>
                        <th>Item Code</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- subheader -->
                    @for($i = 0; $i < 3; $i++)
                        <tr>
                            <td>01234</td>
                            <td>Testing</td>
                            <td>500</td>
                            <td>1000</td>
                            <td>500000</td>
                        </tr>
                        <!-- content -->
                    @endfor    
                        <tr>
                            <td colspan="4" class="general-total">Total: </td>
                            <td class="total-amount">500,000</td>
                        </tr>               
                </tbody>
            </table>
            <div class="signatories">
                <span class="signature">Prepared By</span>
                <span class="signature">Approved By</span>
            </div>
            
        </body>
    </html>
    
@endsection