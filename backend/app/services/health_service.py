from app.models.msme import MSME


def calculate_health(msme: MSME):

    # ----------------------------
    # Individual Scores (0-100)
    # ----------------------------

    # Cash Flow
    if msme.annual_turnover >= 10000000:
        cash_flow = 95
    elif msme.annual_turnover >= 5000000:
        cash_flow = 80
    else:
        cash_flow = 60

    # Compliance
    if msme.status == "Active":
        compliance = 95
    else:
        compliance = 50

    # Growth
    if msme.business_age >= 10:
        growth = 90
    elif msme.business_age >= 5:
        growth = 75
    else:
        growth = 60

    # Repayment Capacity
    if msme.employee_count >= 100:
        repayment = 90
    elif msme.employee_count >= 50:
        repayment = 75
    else:
        repayment = 60

    # Digital Adoption (temporary logic)
    digital_adoption = 80

    # Stability
    stability = round(
        (
            cash_flow +
            compliance +
            growth +
            repayment +
            digital_adoption
        ) / 5
    )

    # Overall Health Score
    health_score = round(
        (
            cash_flow +
            compliance +
            growth +
            repayment +
            digital_adoption +
            stability
        ) / 6
    )

    # ----------------------------
    # Risk
    # ----------------------------

    if health_score >= 80:
        risk = "Low"
        eligibility = "Eligible"
        confidence = 95

    elif health_score >= 60:
        risk = "Medium"
        eligibility = "Review Required"
        confidence = 80

    else:
        risk = "High"
        eligibility = "Not Eligible"
        confidence = 60

    recommended_loan = round(
        msme.annual_turnover * 0.30,
        2
    )

    return {
        "business_name": msme.business_name,
        "owner_name": msme.owner_name,

        "health_score": health_score,

        "cash_flow": cash_flow,
        "compliance": compliance,
        "growth": growth,
        "repayment": repayment,
        "digital_adoption": digital_adoption,
        "stability": stability,

        "risk_level": risk,
        "loan_eligibility": eligibility,
        "recommended_loan_amount": recommended_loan,
        "confidence": confidence,

        "recommendation": (
            "Eligible for MSME loan."
            if eligibility == "Eligible"
            else "Needs financial review."
            if eligibility == "Review Required"
            else "Improve financial health before applying."
        )
    }