from app.models.msme import MSME
from app.services.health_service import calculate_health


def predict_loan(msme: MSME):

    health = calculate_health(msme)

    score = health["health_score"]

    if score >= 80:
        decision = "Approved"
        interest_rate = 8.5

    elif score >= 60:
        decision = "Manual Review"
        interest_rate = 10.5

    else:
        decision = "Rejected"
        interest_rate = 0

    return {
        "business_name": msme.business_name,
        "health_score": score,
        "risk_level": health["risk_level"],
        "loan_decision": decision,
        "interest_rate": interest_rate,
        "recommended_loan_amount": health["recommended_loan_amount"],
        "confidence": health["confidence"]
    }