from app.core.database import SessionLocal
from app.models.msme import MSME

db = SessionLocal()

if db.query(MSME).count() > 1:
    print("Database already seeded.")
    exit()

msmes = [

    MSME(
        business_name="XYZ Foods Pvt Ltd",
        owner_name="Amit Verma",
        gst_number="27XYZFD1234A1Z5",
        industry="Food Processing",
        city="Pune",
        state="Maharashtra",
        annual_turnover=12000000,
        monthly_profit=900000,
        monthly_expenses=650000,
        existing_loan_amount=2000000,
        credit_score=810,
        gst_compliance_score=96,
        debt_to_income_ratio=0.18,
        years_with_bank=10,
        upi_transaction_volume=2400,
        employee_count=95,
        business_age=12,
        health_score=90,
        risk_level="Low",
        status="Active"
    ),

    MSME(
        business_name="Sunrise Engineering",
        owner_name="Rohit Patil",
        gst_number="27SUNEN1234A1Z6",
        industry="Engineering",
        city="Nashik",
        state="Maharashtra",
        annual_turnover=8000000,
        monthly_profit=520000,
        monthly_expenses=390000,
        existing_loan_amount=2500000,
        credit_score=760,
        gst_compliance_score=89,
        debt_to_income_ratio=0.30,
        years_with_bank=7,
        upi_transaction_volume=1800,
        employee_count=62,
        business_age=8,
        health_score=78,
        risk_level="Medium",
        status="Active"
    ),

    MSME(
        business_name="Green Agro Farms",
        owner_name="Mahesh Kale",
        gst_number="27GRNAG1234A1Z7",
        industry="Agriculture",
        city="Nagpur",
        state="Maharashtra",
        annual_turnover=14000000,
        monthly_profit=1200000,
        monthly_expenses=780000,
        existing_loan_amount=1500000,
        credit_score=845,
        gst_compliance_score=98,
        debt_to_income_ratio=0.14,
        years_with_bank=15,
        upi_transaction_volume=3100,
        employee_count=120,
        business_age=18,
        health_score=95,
        risk_level="Low",
        status="Active"
    ),

    MSME(
        business_name="Nova Electronics",
        owner_name="Sneha Joshi",
        gst_number="27NOVEL1234A1Z8",
        industry="Electronics",
        city="Mumbai",
        state="Maharashtra",
        annual_turnover=5200000,
        monthly_profit=280000,
        monthly_expenses=220000,
        existing_loan_amount=3500000,
        credit_score=680,
        gst_compliance_score=70,
        debt_to_income_ratio=0.55,
        years_with_bank=3,
        upi_transaction_volume=900,
        employee_count=30,
        business_age=4,
        health_score=62,
        risk_level="High",
        status="Active"
    ),

    MSME(
        business_name="Bright Logistics",
        owner_name="Vikas Shah",
        gst_number="27BRILT1234A1Z9",
        industry="Logistics",
        city="Ahmedabad",
        state="Gujarat",
        annual_turnover=10000000,
        monthly_profit=730000,
        monthly_expenses=520000,
        existing_loan_amount=1800000,
        credit_score=790,
        gst_compliance_score=93,
        debt_to_income_ratio=0.22,
        years_with_bank=9,
        upi_transaction_volume=2100,
        employee_count=82,
        business_age=10,
        health_score=86,
        risk_level="Low",
        status="Active"
    ),

]

db.add_all(msmes)
db.commit()

print("Database Seeded Successfully!")
