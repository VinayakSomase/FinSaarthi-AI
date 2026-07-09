from pydantic import BaseModel


class LoanResponse(BaseModel):
    business_name: str
    health_score: int
    risk_level: str
    loan_decision: str
    interest_rate: float
    recommended_loan_amount: float
    confidence: int