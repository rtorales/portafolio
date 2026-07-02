# Regenera CV_Ricardo_Torales.pdf a partir de cv.html.
# Ejecutar desde la raíz del repositorio cada vez que se actualice el contenido del sitio:
#   .\generate-cv.ps1
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) { $edge = "C:\Program Files\Microsoft\Edge\Application\msedge.exe" }
$root = $PSScriptRoot
$src = "file:///" + ($root -replace '\\', '/') + "/cv.html"
$out = Join-Path $root "CV_Ricardo_Torales.pdf"
& $edge --headless --disable-gpu --no-pdf-header-footer --virtual-time-budget=10000 --print-to-pdf="$out" $src | Out-Null
Write-Host "PDF generado: $out"
