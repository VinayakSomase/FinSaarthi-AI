from pydantic import BaseModel


class HealthResponse(BaseModel):
    business_name: str
    owner_name: str

    # Overall Score
    health_score: int

    # Sub Scores
    cash_flow: int
    compliance: int
    growth: int
    repayment: int
    digital_adoption: int
    stability: int

    # Loan Decision
    risk_level: str
    loan_eligibility: str
    recommended_loan_amount: float
    confidence: int
    recommendation: str