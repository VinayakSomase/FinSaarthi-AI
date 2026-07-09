from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.models.msme import MSME
from app.core.auth import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/stats")
def dashboard_stats(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    total = db.query(MSME).count()

    approved = db.query(MSME).filter(
        MSME.status == "Approved"
    ).count()

    rejected = db.query(MSME).filter(
        MSME.status == "Rejected"
    ).count()

    pending = db.query(MSME).filter(
        MSME.status == "Pending"
    ).count()

    average_health = 0

    if total > 0:
        msmes = db.query(MSME).all()
        average_health = round(
            sum(m.health_score for m in msmes) / total,
            2
        )

    return {
        "total_msmes": total,
        "approved": approved,
        "rejected": rejected,
        "pending": pending,
        "average_health_score": average_health
    }