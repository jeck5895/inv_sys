<html>

<head>
    <style>
        body {
            font-family: Helvetica, sans-serif;
            font-size: 13px;
        }

        table {
            width: 100%;
            margin: 20px 0px 40px 0px;
            border-collapse: collapse;
        }

        table th {
            padding: 5px;
        }

        table td {
            padding: 2px 5px;
        }

        table td,
        table th {
            border: 1px solid black;
        }

        .general-total {
            padding: 8px;
            text-align: right;
            font-size: 16px;
            font-weight: bold;
            border: none;
            text-align: right;
        }

        .total-amount {
            font-size: 15px;
            border-top: none;
            border-right: none;
            border-left: none;
            /* border:none none 1px solid black none ; */
        }

        .signatories {
            width: 100%;
            text-align: center;
        }

        .signature {
            padding: 0px 20px;
            margin: 0 80px;
            border-top: 0.5px solid black;
        }

        .report-header {
            position: relative;
        }

        .logo-container {
            position: absolute;
            top: 1rem;
            left: 0.25rem;
        }
    </style>
</head>

<body>
    <div class="report-hedear">
        <div class="logo-container">
            <img height="65" width="65" src="./images/logo.png" alt="">
        </div>
        <div>
            <h2 style="text-align:center;">Monthly Sales Report for {{ $data['month'] }} - {{ $data['year'] }}</h2>
        </div>
    </div>
    <hr>
    <table>
        <thead>
            <tr>
                <th>DATE</th>
                <th>RECEIPT #</th>
                <th>PAYMENT MODE</th>
                <th>PAYMENT TERMS</th>
                <th>TOTAL ITEM COST</th>
                <th>TOTAL FREEBIES COST</th>
                <th>GROSS INCOME</th>
                <th>NET INCOME</th>
            </tr>
        </thead>
        <tbody>
            @php
            $total_net_income = 0.00;
            @endphp

            @foreach($data['sales'] as $key => $sales)

            @php
            $total_net_income = floatval($total_net_income) + floatval($sales->net_income["value"]);
            @endphp

            <tr>
                <td>{{ $sales->checkout_date["formatted"] }}</td>
                <td>{{ $sales->receipt_no }}</td>
                <td>{{ $sales->payment_mode }}</td>
                <td>{{ $sales->payment_terms === null ? 'N/A' : $sales->payment_terms }}</td>
                <td>{{ $sales->total_item_cost["formatted"] }}</td>
                <td>{{ $sales->total_freebies_cost["formatted"] }}</td>
                <td>{{ $sales->revenue["formatted"] }}</td>
                <td>{{ $sales->net_income["formatted"] }}</td>
            </tr>


            @endforeach
            <tr>
                <td colspan="7" class="general-total">Total: </td>
                <td class="total-amount">{{ number_format($total_net_income,2,'.',',') }}</td>
            </tr>
        </tbody>
    </table>
    <!-- <div class="signatories">
    <span class="signature">Prepared By</span>
    <span class="signature">Approved By</span>
  </div> -->

</body>

</html>
