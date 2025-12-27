Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

Set-Location $PSScriptRoot

$python = Join-Path $PSScriptRoot '.venv\Scripts\python.exe'
if (-not (Test-Path $python)) {
  Write-Host "Missing venv: $python"
  Write-Host "Create it with: python -m venv .venv"
  Write-Host "Then install deps: .\.venv\Scripts\python.exe -m pip install -r backend\requirements.txt"
  exit 1
}

& $python -m uvicorn backend.main:app --reload --port 8000
