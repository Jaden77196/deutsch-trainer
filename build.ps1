# Build a single self-contained index.html from template.html + the content files.
#
# Why this exists: the app is used on a phone over a network that is not always
# reliable. A single file is ONE request; eight separate content files are nine
# requests, and any one of them failing leaves the user staring at an empty shell.
# Inlining also makes the file work offline and from file://.
#
# Edit template.html and the content-*.js files, then run this script.
# Never edit index.html directly - it is generated and will be overwritten.
param()
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$tpl  = Join-Path $root 'template.html'
$out  = Join-Path $root 'index.html'

$files = @(
  'content-a1.js',
  'content-a2.js',
  'content-b1.js',
  'content-phrases.js',
  'content-b2.js',
  'content-readings.js',
  'content-grammar.js',
  'content-lectures.js'
)

$html = [System.IO.File]::ReadAllText($tpl)

foreach ($f in $files) {
  $path = Join-Path $root $f
  if (-not (Test-Path -LiteralPath $path)) { throw "missing content file: $f" }
  $js = [System.IO.File]::ReadAllText($path)
  if ($js.Contains('</script>')) { throw "$f contains </script> and cannot be inlined safely" }
  $tag = '<script src="' + $f + '"></script>'
  if (-not $html.Contains($tag)) { throw "template.html does not reference $f" }
  $inline = "<script>`r`n/* ==== $f ==== */`r`n" + $js + "`r`n</script>"
  $html = $html.Replace($tag, $inline)
}

if ($html.Contains('src="content-')) { throw "some content script tags were not inlined" }

[System.IO.File]::WriteAllText($out, $html, (New-Object System.Text.UTF8Encoding($false)))

$sizeKb = [math]::Round((Get-Item $out).Length / 1KB, 1)
Write-Host "built index.html : $sizeKb KB (single file, 1 request)"
Write-Host "sources inlined  : $($files.Count) content files"
