from sqlalchemy.orm import Session
from app.models.prediction import Prediction


def get_trend(db: Session):

    predictions = (
        db.query(Prediction)
        .order_by(Prediction.created_at.asc())
        .all()
    )

    if len(predictions) == 0:
        return {
            "message": "No prediction history found."
        }

    history = []

    for item in predictions:
        history.append({
            "date": item.created_at.strftime("%Y-%m-%d"),
            "health_score": item.health_score
        })

    latest = predictions[-1].health_score

    if len(predictions) > 1:
        previous = predictions[-2].health_score

        if latest > previous:
            trend = "Improving"
        elif latest < previous:
            trend = "Declining"
        else:
            trend = "Stable"

        difference = round(latest - previous, 2)

    else:
        previous = latest
        trend = "No History"
        difference = 0

    return {
        "latest_health_score": latest,
        "previous_health_score": previous,
        "trend": trend,
        "difference": difference,
        "history": history
    }