# Changelog

List of major changes  made:

---

## Switched from barryvdh/laravel-dompdf to barryvdh/laravel-snappy
- Note: wkhtmltopdf installation as composer dependecy is not working.
- Workaround download executable from https://wkhtmltopdf.org/downloads.html install, make a copy from /usr/local/bin to resources:
  - cp resources/wkhtmltoimage vendor/h4cc/wkhtmltoimage-amd64/bin
  - cp resources/wkhtmltopdf vendor/h4cc/wkhtmltopdf-amd64/bin
