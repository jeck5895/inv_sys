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
        }

        .total-amount {
            font-size: 15px;
            border-top: none;
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
        <div class="logo-container">
            <img height="65" width="65" src="./images/logo.png" alt="">
        </div>
        <div>
            <h2 style="text-align:center;">Company Name</h2>
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
                <th>Model</th>
                <th>Sub Total</th>
            </tr>
        <tbody>
        <tbody>
            @php
            $total_sales = 0.00;
            @endphp
            @foreach($data['sales'] as $key => $item)
            @php
            $total_sales = floatval($total_sales) + floatval($item->sub_total);
            @endphp
            <tr>
                <td>{{ $item->item->model->name }}</td>

                <td>{{ number_format($item->sub_total,2,'.',',') }}</td>
            </tr>

            @endforeach
            <tr>
                <td class="general-total">Total: </td>
                <td class="total-amount">{{ number_format($total_sales,2,'.',',') }}</td>
            </tr>
        </tbody>
        </thead>
        <tbody>

        </tbody>
    </table>
    <!-- <div class="signatories">
        <div class="signature signature-1">Prepared By: </div>
        <div class="signature signature-2">Approved By: </div>
    </div> -->

</body>

</html>