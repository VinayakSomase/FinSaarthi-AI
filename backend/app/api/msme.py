from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.core.auth import get_current_user
from app.models.user import User

from app.schemas.msme import (
    MSMECreate,
    MSMEResponse
)

from app.services.msme_service import (
    create_msme,
    get_all_msmes,
    get_msme_by_id
)

router = APIRouter()


@router.post("/create")
def add_msme(
    msme: MSMECreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return create_msme(db, msme)


@router.get("/", response_model=list[MSMEResponse])
def get_msmes(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return get_all_msmes(db)


@router.get("/{msme_id}", response_model=MSMEResponse)
def get_msme(
    msme_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return get_msme_by_id(msme_id, db)