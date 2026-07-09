from sqlalchemy.orm import Session
from app.models.msme import MSME


def get_peer_benchmark(msme_id: int, db: Session):

    msme = db.query(MSME).filter(MSME.id == msme_id).first()

    if not msme:
        return {"message": "MSME not found"}

    peers = db.query(MSME).filter(
        MSME.industry == msme.industry
    ).all()

    if len(peers) == 0:
        return {"message": "No peer data available"}

    average_score = round(
        sum(p.health_score for p in peers) / len(peers),
        2
    )

    difference = round(msme.health_score - average_score, 2)

    ranking = (
        "Above Average"
        if difference >= 0
        else "Below Average"
    )

    return {
        "business_name": msme.business_name,
        "industry": msme.industry,
        "your_health_score": msme.health_score,
        "industry_average": average_score,
        "difference": difference,
        "ranking": ranking
    }