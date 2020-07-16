# Changelog

List of major changes made is documented here.

---


## [1.0.0] - 2020-070-16

### Changed
- Switched pdf library from [@laravel-dompdf](https://github.com/barryvdh/laravel-dompdf) to [@laravel-snappy](https://github.com/barryvdh/laravel-snappy)
- Fixed 'Trying to get property 'cost' of non-object' in API/ReportController


### Additional Notes
- Note: wkhtmltopdf installation as composer dependecy is not working.
- Workaround download executable from https://wkhtmltopdf.org/downloads.html install, make a copy from /usr/local/bin to app/resources:
  - cp resources/wkhtmltoimage vendor/h4cc/wkhtmltoimage-amd64/bin
  - cp resources/wkhtmltopdf vendor/h4cc/wkhtmltopdf-amd64/bin
