from fastapi import APIRouter
from pydantic import BaseModel
import joblib
import pandas as pd


class GradRequest(BaseModel):
    name: str
    gre: int
    toefl: int
    university: int
    sop: float
    lor: float
    cgpa: float
    research: int


grad = joblib.load("models/grad.joblib")


# Routes
router = APIRouter()

# ML Routes


@router.post('/grad/')
async def grad_predict(req: GradRequest):
    df = pd.DataFrame({
        "GRE Score": [req.gre],
        "TOEFL Score": [req.toefl],
        "University Rating": [req.university],
        "SOP": [req.sop],
        "LOR": [req.lor],
        "CGPA": [req.cgpa],
        "Research": [req.research]
    })
    prediction = grad.predict(df)
    return {"name": req.name, "pred": prediction[0]}
