from sqlalchemy import Column, Integer, String, Float

from app.core.database import Base


class MSME(Base):
    __tablename__ = "msmes"

    id = Column(Integer, primary_key=True, index=True)

    # Basic Information
    business_name = Column(String, nullable=False)
    owner_name = Column(String, nullable=False)

    gst_number = Column(String, unique=True, nullable=False)

    industry = Column(String, nullable=False)
    city = Column(String, nullable=False)
    state = Column(String, nullable=False)

    # Financial Information
    annual_turnover = Column(Float, nullable=False)
    monthly_profit = Column(Float, nullable=False)
    monthly_expenses = Column(Float, nullable=False)

    existing_loan_amount = Column(Float, nullable=False)

    credit_score = Column(Integer, nullable=False)
    gst_compliance_score = Column(Float, nullable=False)

    debt_to_income_ratio = Column(Float, nullable=False)

    years_with_bank = Column(Integer, nullable=False)

    upi_transaction_volume = Column(Float, nullable=False)

    employee_count = Column(Integer, nullable=False)
    business_age = Column(Integer, nullable=False)

    # AI Analysis Results
    health_score = Column(Float, default=0)
    risk_level = Column(String, default="Unknown")

    status = Column(String, default="Active")

    # Uploaded Documents
    gst_certificate = Column(String, nullable=True)
    bank_statement = Column(String, nullable=True)
    pan_card = Column(String, nullable=True)
    udyam_certificate = Column(String, nullable=True)