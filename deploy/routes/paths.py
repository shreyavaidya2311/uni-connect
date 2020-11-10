from os import stat
from fastapi import APIRouter, Response, status
from fastapi import responses
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
async def grad_predict(req: GradRequest, response: Response):
    if(req.gre < 0 or req.toefl < 0 or req.university < 0 or req.sop < 0 or req.lor < 0 or req.cgpa < 0 or req.research < 0):
        response.status_code = 400
        return {"message": "Fields cannot be less then 0"}
    df = np.array([req.gre, req.toefl, 6 - req.university,
                   req.sop, req.lor, req.cgpa, req.research])
    new_df = sc.transform(df.reshape(1, -1))
    prediction = grad.predict(new_df)
    if(prediction[0] > 100):
        prediction[0] = 0.992
    elif(prediction[0] < 0):
        prediction[0] = 0.0008
    return {"name": req.name, "pred": prediction[0]}
