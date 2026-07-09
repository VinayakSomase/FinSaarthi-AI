from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.msme import MSME
from app.schemas.msme import MSMECreate


def create_msme(db: Session, msme: MSMECreate):

    # Check if GST Number already exists
    existing_msme = db.query(MSME).filter(
        MSME.gst_number == msme.gst_number
    ).first()

    if existing_msme:
        return {
            "success": False,
            "message": "GST Number already exists"
        }

    new_msme = MSME(
    business_name=msme.business_name,
    owner_name=msme.owner_name,
    gst_number=msme.gst_number,
    industry=msme.industry,
    city=msme.city,
    state=msme.state,

    business_age=msme.business_age,
    annual_turnover=msme.annual_turnover,

    monthly_profit=msme.monthly_profit,
    monthly_expenses=msme.monthly_expenses,

    existing_loan_amount=msme.existing_loan_amount,

    employee_count=msme.employee_count,

    credit_score=msme.credit_score,
    gst_compliance_score=msme.gst_compliance_score,
    debt_to_income_ratio=msme.debt_to_income_ratio,

    years_with_bank=msme.years_with_bank,
    upi_transaction_volume=msme.upi_transaction_volume
)

    db.add(new_msme)
    db.commit()
    db.refresh(new_msme)

    return {
        "success": True,
        "message": "MSME created successfully",
        "msme": new_msme
    }


def get_all_msmes(db: Session):
    return db.query(MSME).all()


def get_msme_by_id(msme_id: int, db: Session):

    msme = db.query(MSME).filter(
        MSME.id == msme_id
    ).first()

    if not msme:
        raise HTTPException(
            status_code=404,
            detail="MSME not found"
        )

    return msme