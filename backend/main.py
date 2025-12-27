from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI(title="Adder API")

# Keep dev setup simple: allow the React dev server (and other localhost origins).
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class AddRequest(BaseModel):
    a: float
    b: float


class AddResponse(BaseModel):
    result: float


@app.get("/")
def root() -> dict:
    return {"message": "FastAPI is running. POST /add with {a,b}."}


@app.post("/add", response_model=AddResponse)
def add(payload: AddRequest) -> AddResponse:
    return AddResponse(result=payload.a + payload.b)
