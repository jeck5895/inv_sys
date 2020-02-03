<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>NEUST - Inventory System</title>

        <link rel="icon" href="/images/favicon.ico" type="image/x-icon">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/custom-styles.css') }}" rel="stylesheet">
        <link href="{{ asset('css/animate.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="app" class="wrapper">
            <!-- @yield('content') -->
            <!-- <div class="container-fluid"> -->
                <router-view></router-view>
            <!-- </div> -->
        </div>
        <!-- <script src="assets/plugins/simplebar/js/simplebar.js"></script> -->
        <!-- waves effect js -->
        <script src="{{ asset('js/app.js') }}"></script>
        <script src="{{asset('js/simplebar.js')}}"></script>
        <!-- waves effect js -->
        <script src="{{asset('js/waves.js')}}"></script>
        <!-- sidebar-menu js -->
        <script src="{{asset('js/sidebar-menu.js')}}"></script>
        <!-- Custom scripts -->
        <script src="{{asset('js/app-script.js')}}"></script>
    </body>
</html>
