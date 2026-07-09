from pydantic import BaseModel


class MSMECreate(BaseModel):
    business_name: str
    owner_name: str
    gst_number: str
    industry: str
    city: str
    state: str

    business_age: int
    annual_turnover: float

    monthly_profit: float
    monthly_expenses: float

    existing_loan_amount: float

    employee_count: int

    credit_score: int
    gst_compliance_score: float
    debt_to_income_ratio: float

    years_with_bank: int
    upi_transaction_volume: float


class MSMEResponse(BaseModel):
    id: int

    business_name: str
    owner_name: str
    gst_number: str
    industry: str
    city: str
    state: str

    business_age: int
    annual_turnover: float

    monthly_profit: float
    monthly_expenses: float

    existing_loan_amount: float

    employee_count: int

    credit_score: int
    gst_compliance_score: float
    debt_to_income_ratio: float

    years_with_bank: int
    upi_transaction_volume: float

    health_score: float
    risk_level: str
    status: str

    class Config:
        from_attributes = True