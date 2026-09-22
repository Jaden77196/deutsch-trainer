# Deutsch trainer - static file server (ASCII-only to avoid PS 5.1 encoding issues)
# Serves this folder over the LAN. Phone opens http://<PC-IP>:8080 on the same WiFi.
# Usage: powershell -NoProfile -ExecutionPolicy Bypass -File serve.ps1 [-Port 8080]
param([int]$Port=8787)
$ErrorActionPreference='Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path

$mime = @{
  '.html'='text/html; charset=utf-8'; '.js'='text/javascript; charset=utf-8'
  '.css'='text/css; charset=utf-8'; '.json'='application/json; charset=utf-8'
  '.png'='image/png'; '.jpg'='image/jpeg'; '.svg'='image/svg+xml'; '.ico'='image/x-icon'
  '.woff2'='font/woff2'; '.txt'='text/plain; charset=utf-8'
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://+:$Port/")
$listener.Start()

Write-Host ""
Write-Host "  Deutsch trainer server running"
Write-Host "  ----------------------------------------"
Write-Host "  This PC : http://localhost:$Port/"
$ips = Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue |
  Where-Object { $_.IPAddress -notlike '127.*' -and $_.IPAddress -notlike '169.254.*' } |
  Select-Object -ExpandProperty IPAddress
foreach($ip in $ips){ Write-Host "  Phone   : http://${ip}:$Port/" }
Write-Host "  ----------------------------------------"
Write-Host "  Phone must be on the same WiFi. Ctrl+C to stop."
Write-Host ""

while($listener.IsListening){
  try{
    $ctx = $listener.GetContext()
    $req = $ctx.Request; $res = $ctx.Response
    $path = [System.Uri]::UnescapeDataString($req.Url.AbsolutePath)
    if($path -eq '/'){ $path = '/index.html' }
    $rel = $path.TrimStart('/').Replace('/','\')
    $full = [System.IO.Path]::GetFullPath((Join-Path $root $rel))
    if(-not $full.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase)){
      $res.StatusCode=403; $res.Close(); continue
    }
    if(Test-Path -LiteralPath $full -PathType Leaf){
      $ext=[System.IO.Path]::GetExtension($full).ToLower()
      $ct = if($mime.ContainsKey($ext)){$mime[$ext]}else{'application/octet-stream'}
      $bytes=[System.IO.File]::ReadAllBytes($full)
      $res.StatusCode=200; $res.ContentType=$ct; $res.ContentLength64=$bytes.Length
      $res.OutputStream.Write($bytes,0,$bytes.Length)
    }else{
      $buf=[System.Text.Encoding]::UTF8.GetBytes('404 Not Found')
      $res.StatusCode=404; $res.ContentType='text/plain; charset=utf-8'; $res.ContentLength64=$buf.Length
      $res.OutputStream.Write($buf,0,$buf.Length)
    }
    $res.Close()
  }catch{}
}
