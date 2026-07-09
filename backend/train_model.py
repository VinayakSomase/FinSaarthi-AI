import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

from xgboost import XGBClassifier

import joblib

# Load the dataset
df = pd.read_csv("dataset/msme_loan_dataset.csv")

# Display the first five rows
print(df.head())

# Display dataset information
print(df.info())

# Features (Input)
X = df.drop("loan_approved", axis=1)

# Target (Output)
y = df["loan_approved"]

print("\nFeatures Shape:", X.shape)
print("Target Shape:", y.shape)

# Split dataset into training and testing

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.20,
    random_state=42
)

print("\nTraining Features:", X_train.shape)
print("Testing Features :", X_test.shape)

print("Training Target :", y_train.shape)
print("Testing Target  :", y_test.shape)

# Create the XGBoost model
model = XGBClassifier(
    n_estimators=100,
    max_depth=5,
    learning_rate=0.1,
    random_state=42
)

# Train the model
model.fit(X_train, y_train)

print("\nModel trained successfully!")

# Predict on test data
y_pred = model.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)

print(f"\nModel Accuracy: {accuracy:.2%}")


print("\nClassification Report")

print(classification_report(y_test, y_pred))

joblib.dump(model, "models/loan_model.pkl")

print("\nModel saved successfully!")