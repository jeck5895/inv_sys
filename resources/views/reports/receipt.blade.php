@extends('layouts.report-layout') 

@section('content')
    <html>
        <head>
            <style>
                body{
                    font-family: Helvetica, sans-serif;
                    font-size: 13px;
                }
                .container{
                    margin: auto;
                    width:350px;
                    height:500px;
                }
                p{
                    margin: 0px;
                }
                .ewan p{
                    margin: 0px;
                    font-size: 12px;
                }
                .header{
                    padding: 10px 5px;
                    margin-top:5px;
                    border: 3px solid black;
                    box-sizing: border-box;
                }   
                .header .content{
                    text-align: center;
                }
                table{
                    margin-left: -1px;
                    margin-top: -3px;
                    width: 100.37%;
                    border: 2px solid black;
                    border-bottom: 1px solid black;

                    border-collapse: collapse;
                    font-size: 11px;
                }
                .table2 tr td{
                    padding-top: 4px !important;
                    padding-bottom: 4px !important;
                }
                .table4 td{
                    height: 350px !important;
                }
                .signature{
                    display: block;
                    margin-top: 30px;
                    width: 200px;
                    border-top:2px solid black;
                    margin-left: 146px;
                    text-align: center;
                }
                .square{
                    border: 1px solid black;
                    height: 10px;
                    width: 10px;
                    margin-right: 5px;
                    display: inline-block;
                    margin-top: 1px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="ewan">
                    <p>Accountable form number 91</p>
                    <p>Revised January 1992 <span style="float:right; font-weight: bold;">(Original)</span></p>
                </div>
                <div class="header">
                    <div class="first-logo"></div>
                    <div class="content">
                        <p style="font-size: 14px; font-weight: 600">OFFICIAL RECEIPT</p> 
                        <p style="font-size: 12px; font-weight: normal;">Republic of the Philippines</p>
                        <p style="font-size: 15px; font-weight: bold;">NUEVA ECIJA UNIVERSITY OF<br>SCIENCE AND TECHNOLOGY</p>
                        <p style="font-size: 12px; font-weight: normal;">Cabanatuan City</p>
                    </div>
                    <div class="second-logo"></div>
                </div>
                <table class="table1">
                    <tbody>
                        <tr>
                            <td style="width: 40%; padding: 8px 5px; border-right:1px solid black;">Date:</td>
                            <td style="width: 60%; padding: 8px 5px;" colspan="2">No 1471851 - A</td>
                        </tr>
                    </tbody>
                </table>
                <table  class="table2">
                    <tbody>
                        <tr>
                            <td style="width: 70%; padding: 8px 5px; border-right:1px solid black;">Payor:</td>
                            <td style="width: 30%; padding: 8px 5px;" colspan="2">Fund</td>
                        </tr>
                    </tbody>
                </table>
                <table  class="table3">
                    <tbody>
                        <tr>
                            <td style="padding: 1.5px !important; border-bottom:1px solid black;" colspan="3"></td>
                        </tr>
                        <tr>
                            <td style="width: 40%; padding: 8px 5px; border-right:1px solid black;">Nature of Collection:</td>
                            <td style="width: 30%; padding: 8px 5px; border-right:1px solid black;">Account Code</td>
                            <td style="width: 30%; padding: 8px 5px;">Amount</td>
                        </tr>
                    </tbody>
                </table>
                <table  class="table4">
                    <tbody>
                        <tr>
                            <td style="width: 40%; padding: 8px 5px; border-right:1px solid black;" valign="top">dito kana mag loop haha <br> adasdasd</td>
                            <td style="width: 30%; padding: 8px 5px; border-right:1px solid black;" valign="top"></td>
                            <td style="width: 30%; padding: 8px 5px;" valign="top"></td>
                        </tr>
                    </tbody>
                </table>
                <table  class="table2">
                    <tbody>
                        <tr>
                            <td style="width: 70%; padding: 8px 5px; border-right:1px solid black; text-align: center;">Total:</td>
                            <td style="width: 30%; padding: 8px 5px;" colspan="2">P</td>
                        </tr>
                    </tbody>
                </table>
                <table  class="table2">
                    <tbody>
                        <tr>
                            <td style="padding: 1.5px !important; border-bottom:1px solid black;" colspan="3"></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 5px;" colspan="3">Amount in Words</td>
                        </tr>
                    </tbody>
                </table>
                <table  class="table2">
                    <tbody>
                        <tr>
                            <td style="padding: 10px 5px !important;" colspan="3"></td>
                        </tr>
                    </tbody>
                </table>
                <table  class="table5">
                    <tbody>
                        <tr style="font-size: 9px;">
                            <td style="width: 25%; border-right:1px solid black; padding-left: 3px"><span class="square"></span> Cash</td>
                            <td style="width: 25%; border-right:1px solid black; text-align: center;">Drawee<br>Bank</td>
                            <td style="width: 25%; border-right:1px solid black; text-align: center;">Number</td>
                            <td style="width: 25%; text-align: center;">Date</td>
                        </tr>
                    </tbody>
                </table>
                <table  class="table5">
                    <tbody>
                        <tr style="font-size: 9px;">
                            <td style="width: 25%; border-right:1px solid black; padding-left: 3px;"><span class="square"></span> Cash</td>
                            <td style="width: 25%; border-right:1px solid black; text-align: center; padding: 10px 5px !important;"></td>
                            <td style="width: 25%; border-right:1px solid black; text-align: center;"></td>
                            <td style="width: 25%; text-align: center;"></td>
                        </tr>
                    </tbody>
                </table>
                <table  class="table5">
                    <tbody>
                        <tr style="font-size: 9px;">
                            <td style="width: 25%; padding-left: 3px;"><span class="square"></span> Money Order</td>
                            <td style="width: 25%; border-right:1px solid black; text-align: center;  padding: 10px 5px !important;"></td>
                            <td style="width: 25%; border-right:1px solid black; text-align: center;"></td>
                            <td style="width: 25%; text-align: center;"></td>
                        </tr>
                    </tbody>
                </table>
                <table  class="table2">
                    <tbody>
                        <tr>
                            <td colspan="3">Receive the Amount stated Above<br>
                                <span class="signature">Collecting Officer</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table  class="table2">
                    <tbody>
                        <tr>
                            <td colspan="3" style="border-bottom:2px solid black; padding: 3px;">Note: Write the number and date of this Receipt on the back of<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; check or money order receive
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </body>
    </html>
    
@endsection