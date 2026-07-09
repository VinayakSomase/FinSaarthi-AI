from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.schemas.prediction import (
    PredictionRequest,
    PredictionResponse
)

from app.ml.predictor import predict_loan
from app.core.dependencies import get_db
from app.models.prediction import Prediction
from app.core.auth import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/prediction",
    tags=["AI Prediction"]
)


@router.post(
    "/predict-loan",
    response_model=PredictionResponse
)
def predict(
    request: PredictionRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    # AI Prediction
    result = predict_loan(request.model_dump())

    # Save Prediction History
    prediction = Prediction(
        business_name="Demo Business",
        probability=result["approval_probability"],
        health_score=result["health_score"],   # NEW
        risk_level=result["risk_level"],
        status="Approved" if result["loan_approved"] else "Rejected"
    )

    db.add(prediction)
    db.commit()
    db.refresh(prediction)

    return result