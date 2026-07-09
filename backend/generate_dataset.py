import random
import pandas as pd

industries = [
    "Textile",
    "Manufacturing",
    "Retail",
    "Food Processing",
    "IT Services",
    "Pharmaceutical",
    "Agriculture",
    "Automobile"
]

states = [
    "Maharashtra",
    "Gujarat",
    "Karnataka",
    "Tamil Nadu",
    "Delhi",
    "Rajasthan",
    "Punjab",
    "Uttar Pradesh"
]

cities = [
    "Nashik",
    "Pune",
    "Mumbai",
    "Nagpur",
    "Ahmedabad",
    "Bengaluru",
    "Chennai",
    "Jaipur"
]

data = []

for i in range(10000):

    business_age = random.randint(1, 20)

    annual_turnover = random.randint(500000, 50000000)

    monthly_profit = random.randint(20000, 800000)

    monthly_expenses = random.randint(10000, 600000)

    existing_loan_amount = random.randint(0, 15000000)

    employee_count = random.randint(1, 300)

    credit_score = random.randint(500, 900)

    gst_compliance_score = random.randint(50, 100)

    debt_to_income_ratio = round(random.uniform(0.10, 1.00), 2)

    years_with_bank = random.randint(1, 15)

    upi_transaction_volume = random.randint(50000, 5000000)

        # Loan approval rule
    if (
        credit_score >= 700 and
        debt_to_income_ratio <= 0.50 and
        gst_compliance_score >= 80 and
        annual_turnover >= 2000000 and
        monthly_profit >= 50000
    ):
        loan_approved = 1
    else:
        loan_approved = 0

    data.append({
        "business_age": business_age,
        "annual_turnover": annual_turnover,
        "monthly_profit": monthly_profit,
        "monthly_expenses": monthly_expenses,
        "existing_loan_amount": existing_loan_amount,
        "employee_count": employee_count,
        "credit_score": credit_score,
        "gst_compliance_score": gst_compliance_score,
        "debt_to_income_ratio": debt_to_income_ratio,
        "years_with_bank": years_with_bank,
        "upi_transaction_volume": upi_transaction_volume,
        "loan_approved": loan_approved
    })

df = pd.DataFrame(data)

df.to_csv("dataset/msme_loan_dataset.csv", index=False)

print("Dataset generated successfully!")
print(df.head())