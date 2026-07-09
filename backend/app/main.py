from fastapi import FastAPI

from app.api import auth
from app.api import msme
from app.api import dashboard
from app.api import health
from app.api import loan
from app.api import prediction
from app.api import history
from app.api import benchmark
from app.api import trend
from app.api import report
from app.api import export
from app.api import upload
from app.api import analyze

from app.core.database import engine, Base
from app.core.exception_handler import register_exception_handlers

# Import Models
from app.models.user import User
from app.models.msme import MSME
from app.models.prediction import Prediction

# Create Database Tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="FinSaarthi API",
    description="AI-Powered MSME Financial Health Card & Loan Eligibility Platform",
    version="1.0.0"
)

# Register Global Exception Handler
register_exception_handlers(app)

# Authentication
app.include_router(
    auth.router,
    prefix="/api/auth",
    tags=["Authentication"]
)

# MSME
app.include_router(
    msme.router,
    prefix="/api/msmes",
    tags=["MSME"]
)

# Dashboard
app.include_router(
    dashboard.router,
    prefix="/api/dashboard",
    tags=["Dashboard"]
)

# Financial Health Card
app.include_router(
    health.router,
    prefix="/api/health-card",
    tags=["Financial Health Card"]
)

# Loan Eligibility
app.include_router(
    loan.router,
    prefix="/api/loan",
    tags=["Loan Eligibility"]
)

# AI Prediction
app.include_router(
    prediction.router
)

# Prediction History
app.include_router(
    history.router,
    prefix="/api"
)

# Peer Benchmark
app.include_router(
    benchmark.router,
    prefix="/api"
)

# Trend Analysis
app.include_router(
    trend.router,
    prefix="/api"
)

# PDF Report
app.include_router(
    report.router,
    prefix="/api"
)

# CSV Export
app.include_router(
    export.router,
    prefix="/api"
)

# Document Upload
app.include_router(
    upload.router,
    prefix="/api"
)

app.include_router(
    analyze.router,
    prefix="/api"
)


@app.get("/")
def root():
    return {
        "success": True,
        "message": "Welcome to FinSaarthi API",
        "version": "1.0.0"
    }


@app.get("/health")
def health_check():
    return {
        "success": True,
        "status": "Running",
        "application": "FinSaarthi"
    }