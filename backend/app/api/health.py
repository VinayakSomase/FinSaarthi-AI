# from fastapi import APIRouter, Depends, HTTPException
# from sqlalchemy.orm import Session

# from app.core.dependencies import get_db

# from app.models.msme import MSME

# from app.schemas.health import HealthResponse

# from app.services.health_service import calculate_health

# router = APIRouter()


# @router.get("/{msme_id}", response_model=HealthResponse)
# def get_health(msme_id: int, db: Session = Depends(get_db)):

#     msme = db.query(MSME).filter(
#         MSME.id == msme_id
#     ).first()

#     if not msme:
#         raise HTTPException(
#             status_code=404,
#             detail="MSME not found"
#         )

#     return calculate_health(msme)


from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.models.msme import MSME
from app.schemas.health import HealthResponse
from app.services.health_service import calculate_health

router = APIRouter()


@router.get("/{msme_id}", response_model=HealthResponse)
def get_health(msme_id: int, db: Session = Depends(get_db)):

    # Find MSME
    msme = db.query(MSME).filter(
        MSME.id == msme_id
    ).first()

    if not msme:
        raise HTTPException(
            status_code=404,
            detail="MSME not found"
        )

    # Calculate Health
    result = calculate_health(msme)

    # -----------------------------
    # Save calculated values
    # -----------------------------
    msme.health_score = result["health_score"]
    msme.risk_level = result["risk_level"]

    db.commit()
    db.refresh(msme)

    return result