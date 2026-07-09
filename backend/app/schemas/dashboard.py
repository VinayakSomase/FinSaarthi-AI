from pydantic import BaseModel


class DashboardStats(BaseModel):
    total_msmes: int
    active_msmes: int
    inactive_msmes: int
    average_turnover: float