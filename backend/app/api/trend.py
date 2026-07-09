from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.core.auth import get_current_user
from app.models.user import User
from app.services.trend_service import get_trend

router = APIRouter(
    prefix="/trend",
    tags=["Trend Analysis"]
)


@router.get("/")
def trend_analysis(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return get_trend(db)