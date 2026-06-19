param(
    [Parameter(Mandatory = $true)]
    [string]$Name
)

$appsDir = Join-Path -Path $PSScriptRoot -ChildPath "..\apps"
$sourceDir = Join-Path -Path $appsDir -ChildPath "tikno-01"
$targetDir = Join-Path -Path $appsDir -ChildPath $Name

if (Test-Path -LiteralPath $targetDir) {
    Write-Error "Directory $targetDir already exists!"
    exit 1
}

Write-Host "Creating landing page: $Name..."

Copy-Item -Path $sourceDir -Destination $targetDir -Recurse

# Update package.json name
$pkgJson = Join-Path -Path $targetDir -ChildPath "package.json"
$content = Get-Content -Path $pkgJson -Raw | ConvertFrom-Json
$content.name = $Name
$content | ConvertTo-Json -Depth 10 | Set-Content -Path $pkgJson

# Update port in scripts
$content.scripts.dev = $content.scripts.dev -replace '--port \d+', "--port 300$(([int]($Name -replace 'tikno-', '')) + 1)"
$content.scripts.start = $content.scripts.start -replace '--port \d+', "--port 300$(([int]($Name -replace 'tikno-', '')) + 1)"
$content | ConvertTo-Json -Depth 10 | Set-Content -Path $pkgJson

Write-Host "Landing page '$Name' created successfully at: $targetDir"
Write-Host ""
Write-Host "Next steps:"
Write-Host "  1. Run: pnpm install"
Write-Host "  2. Start: pnpm --filter $Name dev"
