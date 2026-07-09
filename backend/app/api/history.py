from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.models.prediction import Prediction
from app.core.auth import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/history",
    tags=["Prediction History"]
)


@router.get("/")
def get_history(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    history = db.query(Prediction).order_by(
        Prediction.created_at.desc()
    ).all()

    return history