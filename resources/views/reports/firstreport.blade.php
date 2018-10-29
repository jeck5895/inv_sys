@extends('layouts.report-layout') 

@section('content')
    <html>
        <head>
            <style>
                body{
                    font-family: Helvetica, sans-serif;
                    font-size: 13px;
                }
                .report-hedear p{
                    margin: 0px !important;
                    font-size:13px;
                    font-weight: bold;
                }
                .report-title, .report-subtitle{
                    margin: 5px 0px !important;
                }
                .report-subtitle{
                    font-weight: bold;
                }
                table{
                    padding-right: 100px;
                    width: 100%;
                    margin-bottom: 100px;
                }
                .sub-total{
                    border-top:1px solid black;
                    text-align: right;
                }
                .account-total{
                    text-align: right;
                    font-weight: bold;
                    padding: 10px 0; 
                }
                .general-total{
                    text-align: right;
                    font-weight: bold;
                    border-top: 1px solid black;
                    border-bottom:2px double black;
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
                <h2 class="report-title">Nueva Ecija University of Science and Technology</h2>
                <h4 class="report-subtitle">SUMMARY COLLECTIONS BY SUB ACCOUNTS</h4>
                <p>Data Ordered: 10/19/2018 to 10/20/2018</p>
                <p>OR covered: 10/19/2018 to 10/20/2018</p>
                <p>Cashier: MJRC MJRC MJRC</p>
            </div>
            <hr>
            <table>
                <thead>
                    <tr>
                        <th style="width: 15%; padding-left: 30px;">GFund</th>
                        <th colspan="3" style="padding-left: 30px;">GENERAL FUND</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- subheader -->
                    @for($i = 0; $i < 3; $i++)
                        <tr style="font-weight:bold;">
                            <td style="text-align: right; width: 15%">AL</td>
                            <td style="width:20%"></td>
                            <td style="width:40%">All Programs</td>
                            <td style="width:25%">All</td>
                        </tr>
                        <!-- content -->
                        @for($j = 0; $j < 3; $j++)
                            <tr>
                                <td></td>
                                <td style="padding-left: 30px;">58{{$j}}-b</td>
                                <td style="padding-left: 50px;">Officer Science Income</td>
                                <td style="text-align: right;">5,000</td>
                            </tr>
                            @if($j == 2)
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td class="sub-total">15,000</td>
                            </tr>
                            @endif
                        @endfor

                        @if($i == 2)
                            <tr>
                                <td></td>
                                <td></td>
                                <td style="font-style: italic; text-align: right;">Total General Fund</td>
                                <td class="account-total">15,000</td>
                            </tr>
                        @endif
                    @endfor    
                        <tr>
                            <td></td>
                            <td></td>
                            <td style="padding: 10px 0 5px 50px; font-weight: bold;">Total Collections</td>
                            <td class="general-total">15,000</td>
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