# from fastapi import APIRouter, Depends, HTTPException
# from sqlalchemy.orm import Session

# from app.core.dependencies import get_db
# from app.models.msme import MSME

# from app.services.health_service import calculate_health
# from app.ml.predictor import predict_loan

# router = APIRouter(
#     prefix="/analyze",
#     tags=["Complete Analysis"]
# )


# @router.post("/{msme_id}")
# def analyze_msme(
#     msme_id: int,
#     db: Session = Depends(get_db)
# ):

#     msme = db.query(MSME).filter(
#         MSME.id == msme_id
#     ).first()

#     if not msme:
#         raise HTTPException(
#             status_code=404,
#             detail="MSME not found"
#         )

#     # Financial Health
#     health = calculate_health(msme)

#     # AI Prediction
#     prediction = predict_loan({
#         "business_age": msme.business_age,
#         "annual_turnover": msme.annual_turnover,
#         "monthly_profit": msme.monthly_profit,
#         "monthly_expenses": msme.monthly_expenses,
#         "existing_loan_amount": msme.existing_loan_amount,
#         "employee_count": msme.employee_count,
#         "credit_score": msme.credit_score,
#         "gst_compliance_score": msme.gst_compliance_score,
#         "debt_to_income_ratio": msme.debt_to_income_ratio,
#         "years_with_bank": msme.years_with_bank,
#         "upi_transaction_volume": msme.upi_transaction_volume
#     })

#     # Simple Trend (placeholder)
#     trend = {
#         "status": "Improving",
#         "change": "+8%",
#         "summary": "Business performance has improved over the last quarter."
#     }

#     # Simple Benchmark (placeholder)
#     benchmark = {
#         "industry_average": 75,
#         "business_score": health["health_score"],
#         "status": (
#             "Above Industry Average"
#             if health["health_score"] >= 75
#             else "Below Industry Average"
#         )
#     }

#     return {
#         "business": {
#             "id": msme.id,
#             "business_name": msme.business_name,
#             "owner_name": msme.owner_name,
#             "industry": msme.industry,
#             "city": msme.city,
#             "state": msme.state
#         },
#         "health_card": health,
#         "loan_prediction": prediction,
#         "trend_analysis": trend,
#         "peer_benchmark": benchmark
#     }


from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.models.msme import MSME
from app.models.prediction import Prediction

from app.services.health_service import calculate_health
from app.ml.predictor import predict_loan

router = APIRouter(
    prefix="/analyze",
    tags=["Complete Analysis"]
)


@router.post("/{msme_id}")
def analyze_msme(
    msme_id: int,
    db: Session = Depends(get_db)
):

    # Fetch MSME
    msme = db.query(MSME).filter(
        MSME.id == msme_id
    ).first()

    if not msme:
        raise HTTPException(
            status_code=404,
            detail="MSME not found"
        )

    # ----------------------------
    # Financial Health Calculation
    # ----------------------------
    health = calculate_health(msme)

    # ----------------------------
    # AI Loan Prediction
    # ----------------------------
    prediction = predict_loan({
        "business_age": msme.business_age,
        "annual_turnover": msme.annual_turnover,
        "monthly_profit": msme.monthly_profit,
        "monthly_expenses": msme.monthly_expenses,
        "existing_loan_amount": msme.existing_loan_amount,
        "employee_count": msme.employee_count,
        "credit_score": msme.credit_score,
        "gst_compliance_score": msme.gst_compliance_score,
        "debt_to_income_ratio": msme.debt_to_income_ratio,
        "years_with_bank": msme.years_with_bank,
        "upi_transaction_volume": msme.upi_transaction_volume
    })

    # ----------------------------
    # Update MSME Record
    # ----------------------------
    msme.health_score = health["health_score"]
    msme.risk_level = prediction["risk_level"]

    # ----------------------------
    # Save Prediction History
    # ----------------------------
    prediction_record = Prediction(
        business_name=msme.business_name,
        probability=prediction["approval_probability"],
        health_score=health["health_score"],   # <-- Store Financial Health Score
        risk_level=prediction["risk_level"],
        status="Approved" if prediction["loan_approved"] else "Rejected"
    )

    db.add(prediction_record)

    # Save both MSME update and Prediction history
    db.commit()

    db.refresh(msme)
    db.refresh(prediction_record)

    # ----------------------------
    # Trend (Placeholder)
    # ----------------------------
    trend = {
        "status": "Improving",
        "change": "+8%",
        "summary": "Business performance has improved over the last quarter."
    }

    # ----------------------------
    # Benchmark (Placeholder)
    # ----------------------------
    benchmark = {
        "industry_average": 75,
        "business_score": health["health_score"],
        "status": (
            "Above Industry Average"
            if health["health_score"] >= 75
            else "Below Industry Average"
        )
    }

    # ----------------------------
    # Response
    # ----------------------------
    return {
        "business": {
            "id": msme.id,
            "business_name": msme.business_name,
            "owner_name": msme.owner_name,
            "industry": msme.industry,
            "city": msme.city,
            "state": msme.state
        },
        "health_card": health,
        "loan_prediction": prediction,
        "trend_analysis": trend,
        "peer_benchmark": benchmark
    }