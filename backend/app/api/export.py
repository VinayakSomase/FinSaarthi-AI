from fastapi import APIRouter, Depends
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.models.msme import MSME
from app.services.csv_service import generate_csv

router = APIRouter(
    prefix="/export",
    tags=["CSV Export"]
)


@router.get("/msmes")
def export_msmes(
    db: Session = Depends(get_db)
):

    msmes = db.query(MSME).all()

    csv_file = generate_csv(msmes)

    return StreamingResponse(
        iter([csv_file.getvalue()]),
        media_type="text/csv",
        headers={
            "Content-Disposition":
            "attachment; filename=msmes.csv"
        }
    )