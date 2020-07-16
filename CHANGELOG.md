# Changelog

List of major changes made is documented here.

---


## [1.0.0] - 2020-070-16

### Changed
- Switched pdf library from [@laravel-dompdf](https://github.com/barryvdh/laravel-dompdf) to [@laravel-snappy](https://github.com/barryvdh/laravel-snappy)
- Fixed 'Trying to get property 'cost' of non-object' in API/ReportController


### Additional Notes
- Note: wkhtmltopdf installation as composer dependecy is not working.
- Workaround download executable from https://wkhtmltopdf.org/downloads.html based on your OS and install, make a copy of executable from installation path (Mac & Ubuntu (/usr/local/bin) / C:\Program Files) to vendor/h4cc/wkhtmltopdf-amd64/bin & vendor/h4cc/wkhtmltoimage-amd64/bin
    #### For deployment (Ubuntu 18.04.3 LTS)
  - cp /usr/local/bin/wkhtmltopdf /var/www/html/vendor/h4cc/wkhtmltopdf-amd64/bin
  - cp /usr/local/bin/wkhtmltoimage /var/www/html/vendor/h4cc/wkhtmltoimage-amd64/bin
