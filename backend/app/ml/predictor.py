import joblib
import pandas as pd
import shap
import numpy as np
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent.parent
MODEL_PATH = BASE_DIR / "models" / "loan_model.pkl"

# Load Model
model = joblib.load(MODEL_PATH)

# SHAP Explainer
explainer = shap.TreeExplainer(model)


def predict_loan(data: dict):

    # Convert to DataFrame
    input_data = pd.DataFrame([data])

    # Prediction
    prediction = model.predict(input_data)[0]

    # Probability
    probability = model.predict_proba(input_data)[0][1]

    # Health Score
    health_score = round(float(probability) * 100, 2)

    # -----------------------------
    # SHAP Explainability
    # -----------------------------

    feature_importance = {}

    try:

        shap_values = explainer.shap_values(input_data)

        # Different SHAP versions return different formats

        if isinstance(shap_values, list):
            values = shap_values[0][0]

        elif hasattr(shap_values, "values"):
            values = shap_values.values[0]

        else:
            values = np.array(shap_values)[0]

        for feature, value in zip(input_data.columns, values):
            feature_importance[feature] = round(float(value), 4)

    except Exception:

        # If SHAP fails, return zeros instead of crashing
        for feature in input_data.columns:
            feature_importance[feature] = 0.0

    top_factors = dict(
        sorted(
            feature_importance.items(),
            key=lambda x: abs(x[1]),
            reverse=True
        )[:5]
    )

    # -----------------------------
    # Risk Level
    # -----------------------------

    if probability >= 0.80:
        risk_level = "Low"
    elif probability >= 0.60:
        risk_level = "Medium"
    else:
        risk_level = "High"

    annual_turnover = float(input_data["annual_turnover"].iloc[0])

    # Loan Recommendation

    if risk_level == "Low":
        recommended_loan_amount = round(annual_turnover * 0.40)
        interest_rate = 8.5
        tenure_years = 5
        loan_scheme = "MSME Growth Loan"

    elif risk_level == "Medium":
        recommended_loan_amount = round(annual_turnover * 0.25)
        interest_rate = 10.0
        tenure_years = 4
        loan_scheme = "MSME Business Loan"

    else:
        recommended_loan_amount = round(annual_turnover * 0.10)
        interest_rate = 12.5
        tenure_years = 3
        loan_scheme = "MSME Starter Loan"

    return {
        "loan_approved": bool(prediction),
        "approval_probability": round(float(probability) * 100, 2),
        "health_score": health_score,
        "risk_level": risk_level,
        "recommended_loan_amount": float(recommended_loan_amount),
        "interest_rate": float(interest_rate),
        "tenure_years": int(tenure_years),
        "loan_scheme": loan_scheme,
        "top_factors": top_factors
    }