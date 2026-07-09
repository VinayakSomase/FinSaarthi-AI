from pydantic import BaseModel


class PredictionRequest(BaseModel):
    business_age: int
    annual_turnover: float
    monthly_profit: float
    monthly_expenses: float
    existing_loan_amount: float
    employee_count: int
    credit_score: int
    gst_compliance_score: int
    debt_to_income_ratio: float
    years_with_bank: int
    upi_transaction_volume: float


class PredictionResponse(BaseModel):
    loan_approved: bool
    approval_probability: float
    health_score: float
    risk_level: str
    recommended_loan_amount: float
    interest_rate: float
    tenure_years: int
    loan_scheme: str
    top_factors: dict[str, float]