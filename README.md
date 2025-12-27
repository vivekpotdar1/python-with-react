# Simple React + FastAPI Adder

Very small full-stack demo:

- `backend/`: FastAPI with a single `POST /add`
- `frontend/`: React (Vite) UI that calls the API

## Run backend (FastAPI)

```powershell
python -m venv .venv
.\\.venv\\Scripts\\Activate.ps1
pip install -r backend/requirements.txt
uvicorn backend.main:app --reload --port 8000
```

Or (Windows): `./start-backend.ps1`

Backend will be at `http://localhost:8000`.

## Run frontend (React)

If PowerShell blocks `npm` because of execution policy, run via `cmd`:

```powershell
cd frontend
cmd /c "npm install"
cmd /c "npm run dev"
```

Or (Windows): double-click `start-frontend.cmd`

Open the URL Vite prints (typically `http://localhost:5173`).
