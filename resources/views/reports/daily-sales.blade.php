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
            /* border-top: none; */
            border-right: none;
            border-left: none;
            /* border:none none 1px solid black none ; */
        }

        .signatories {
            margin-top: 10rem;
            width: 100%;
            text-align: center;
        }

        .signature {
            width: 300px;
            padding: 0px 20px;
            border-top: 0.5px solid black;
            display: inline-block;
        }

        .signature-1 {
            margin-right: 5rem;
        }

        .signature-2 {}

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

        <div>
            <!-- <h2 style="text-align:center;">Company Name</h2> -->
            @if($data['from_date'] === $data['to_date'])
            <h2 style="text-align:center;">Daily Sales Report for {{ $data['from_date'] }}</h2>
            @else
            <h2 style="text-align:center;">Daily Sales Report for {{ $data['from_date'] }} - {{ $data['to_date'] }}</h2>
            @endif

        </div>
    </div>
    <hr>
    <table>
        <thead>
            <tr>
                <th>RECEIPT #</th>
                <th>BRANCH</th>
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
                <td>{{ $sales->receipt_no }}</td>
                <td>{{ $sales->branch->name }}</td>
                <td>{{ $sales->payment_mode }}</td>
                <td>{{ $sales->payment_terms === null ? 'N/A' : $sales->payment_terms }}</td>
                <td>{{ $sales->total_item_cost["formatted"] }}</td>
                <td>{{ $sales->total_freebies_cost["formatted"] }}</td>
                <td>{{ $sales->revenue["formatted"] }}</td>
                <td>{{ $sales->net_income["formatted"] }}</td>
            </tr>

            @endforeach
            <tr>
                <td colspan="7" class="general-total">Total Net Income: </td>
                <td class="total-amount">{{ number_format($total_net_income,2,'.',',') }}</td>
            </tr>

        </tbody>

    </table>
    <!-- <div class="signatories">
        <div class="signature signature-1">Prepared By: </div>
        <div class="signature signature-2">Approved By: </div>
    </div> -->

</body>

</html>
