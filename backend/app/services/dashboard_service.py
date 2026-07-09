from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.msme import MSME


def get_dashboard_stats(db: Session):

    total_msmes = db.query(MSME).count()

    active_msmes = db.query(MSME).filter(
        MSME.status == "Active"
    ).count()

    inactive_msmes = db.query(MSME).filter(
        MSME.status == "Inactive"
    ).count()

    average_turnover = db.query(
        func.avg(MSME.annual_turnover)
    ).scalar()

    return {
        "total_msmes": total_msmes,
        "active_msmes": active_msmes,
        "inactive_msmes": inactive_msmes,
        "average_turnover": round(average_turnover or 0, 2)
    }


def get_recent_msmes(db: Session):

    return db.query(MSME).order_by(
        MSME.id.desc()
    ).limit(5).all()