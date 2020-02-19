const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js(
    [
        "resources/js/app.js"
        // 'resources/plugins/simplebar.js',
        // 'resources/plugins/waves.js',
        // 'resources/plugins/sidebar-menu.js',
        // 'resources/plugins/app-script.js',
    ],
    "public/js"
)
    .sass("resources/sass/app.scss", "public/css")
    .styles(
        [
            "resources/css/animate.css",
            "resources/css/simplebar.css",
            "resources/css/icons.css",
            "resources/css/sidebar-menu.css",
            "resources/css/toastr.min.css",
            "resources/css/app-style.css",
            "resources/css/styles.css"
        ],
        "public/css/custom-styles.css"
    );
