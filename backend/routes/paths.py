from fastapi import APIRouter
from pydantic import BaseModel
import joblib
import pandas as pd
import numpy as np


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
sc = joblib.load("models/sc.bin")

# Routes
router = APIRouter()

# ML Routes


@router.post('/grad/')
async def grad_predict(req: GradRequest):
    df = np.array([req.gre, req.toefl, req.university,
                   req.sop, req.lor, req.cgpa, req.research])
    new_df = sc.transform(df.reshape(1, -1))
    prediction = grad.predict(new_df)
    return {"name": req.name, "pred": prediction[0]}
