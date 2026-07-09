from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime

from app.core.database import Base


class Prediction(Base):
    __tablename__ = "predictions"

    id = Column(Integer, primary_key=True, index=True)
    business_name = Column(String, nullable=False)
    probability = Column(Float)
    health_score = Column(Float)
    risk_level = Column(String)
    status = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)