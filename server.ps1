param(
    [int]$Port = 3000
)

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
} catch {
    Write-Error "Failed to start server on $prefix : $_"
    exit 1
}

Write-Host "==========================================================" -ForegroundColor Green
Write-Host " Maharashtra B.Tech Scholarship Portal (MahaDBT Assistant)" -ForegroundColor Cyan
Write-Host " Local Web Server is LIVE at:" -ForegroundColor Yellow
Write-Host " -> $prefix" -ForegroundColor White
Write-Host "==========================================================" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server." -ForegroundColor Gray

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $localPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($localPath) -or $localPath -eq "/") {
            $localPath = "index.html"
        }

        # Prevent directory traversal
        $filePath = [System.IO.Path]::GetFullPath((Join-Path (Get-Location) $localPath))
        $rootPath = [System.IO.Path]::GetFullPath((Get-Location))

        if ($filePath.StartsWith($rootPath) -and (Test-Path $filePath -PathType Leaf)) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
            
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $response.AddHeader("Cache-Control", "no-cache")
            $response.StatusCode = 200

            $response.OutputStream.Write($bytes, 0, $bytes.Length)
            Write-Host "[200 OK] Served: $localPath ($contentType)" -ForegroundColor DarkGreen
        } else {
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $localPath")
            $response.ContentType = "text/plain; charset=utf-8"
            $response.ContentLength64 = $msg.Length
            $response.OutputStream.Write($msg, 0, $msg.Length)
            Write-Host "[404 Not Found] Requested: $localPath" -ForegroundColor DarkRed
        }

        $response.Close()
    }
} finally {
    $listener.Stop()
    $listener.Close()
}
