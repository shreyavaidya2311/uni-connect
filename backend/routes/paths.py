from fastapi import APIRouter
from pydantic import BaseModel
import joblib


class PredictRequest(BaseModel):
    name: str


# Vectoriser
gender_cv = joblib.load("models/gender_vectorizer.pkl")

# Models
gender_clf = joblib.load("models/gender_nv_model.pkl")


# Routes
router = APIRouter()


@router.get('/')
async def index():
    return {"text": "Hello World!"}


@router.get('/items/{name}')
async def get_items(name):
    return {"name": name}

# ML Routes


@router.post('/predict/')
async def predict(req: PredictRequest):
    vectorised_name = gender_cv.transform([req.name]).toarray()
    prediction = gender_clf.predict(vectorised_name)
    if prediction[0] == 0:
        result = "female"
    else:
        result = "male"

    return {"orig_name": req.name, "prediction": result}
