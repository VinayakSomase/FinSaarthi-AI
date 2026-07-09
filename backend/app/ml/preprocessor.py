import pandas as pd


def prepare_features(msme):

    data = {
        "business_age": [msme.business_age],
        "annual_turnover": [msme.annual_turnover],
        "employee_count": [msme.employee_count]
    }

    return pd.DataFrame(data)