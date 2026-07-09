from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.models.msme import MSME
from app.services.health_service import calculate_health
from app.services.pdf_service import generate_pdf

router = APIRouter(
    prefix="/report",
    tags=["PDF Report"]
)


@router.get("/{msme_id}")
def download_report(
    msme_id: int,
    db: Session = Depends(get_db)
):

    msme = db.query(MSME).filter(
        MSME.id == msme_id
    ).first()

    if not msme:
        raise HTTPException(
            status_code=404,
            detail="MSME not found"
        )

    report_data = calculate_health(msme)

    pdf = generate_pdf(report_data)

    filename = f"FinSaarthi_Report_{msme.business_name}.pdf"

    return StreamingResponse(
        pdf,
        media_type="application/pdf",
        headers={
            "Content-Disposition": f'attachment; filename="{filename}"'
        }
    )