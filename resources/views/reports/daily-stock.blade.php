@extends('layouts.report') 

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
                    font-size: 16px;
                    font-weight: bold;
                    border:none;
                }
                .total-amount{
                    font-size: 15px;
                    border-top:none;
                    border-right:none;
                    border-left:none;
                    /* border:none none 1px solid black none ; */
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
                .report-header {
                    position: relative;
                }
                .logo-container {
                    position: absolute;
                    top:1rem;
                    left:0.25rem;
                }
            </style>
        </head>
        <body>
            <div class="report-hedear">
                <div class="logo-container">
                    <img height="65" width="65" src="./images/app/neust_logo.png" alt="">
                </div>
                <div >
                    <h2 style="text-align:center;">NUEVA ECIJA UNIVERSITY OF SCIENCE AND TECHNOLOGY</h2>
                    <h2 style="text-align:center;">Daily Stocks Report for {{ date('F j, Y', $data['date']) }}</h2>
                </div>
            </div>
            <hr>
            <table>
                <thead>
                    <tr>
                        <th>Item Code</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Issued Quantity</th>
                        <th>Current Quantity</th>
                    </tr>
                </thead>
                <tbody>
                   
                    @foreach($data['items'] as $key => $item)
                        <tr>
                            <td>{{ $item->item_code }}</td>
                            <td>{{ $item->item_name }}</td>
                            <td>{{ $item->previos_quantity }}</td>
                            <td>{{ $item->issued_quantity }}</td>
                            <td>{{ $item->items_on_hand }}</td>
                        </tr>
                        <!-- content -->
                    @endforeach    
                                     
                </tbody>
            </table>
            <div class="signatories">
                <span class="signature">Prepared By</span>
                <span class="signature">Approved By</span>
            </div>
            
        </body>
    </html>
    
@endsection