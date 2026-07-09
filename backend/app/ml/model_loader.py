import joblib

model = None


def load_model():

    global model

    if model is None:
        model = joblib.load("models/loan_model.pkl")

    return model