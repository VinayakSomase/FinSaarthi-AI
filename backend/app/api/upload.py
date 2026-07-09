import os
import shutil
import uuid
from pathlib import Path

from fastapi import (
    APIRouter,
    UploadFile,
    File,
    HTTPException,
    Depends
)
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.models.msme import MSME

router = APIRouter(
    prefix="/upload",
    tags=["Document Upload"]
)

BASE_UPLOAD_DIR = "uploads"

MAX_FILE_SIZE = 10 * 1024 * 1024  # 10 MB


def save_file(file: UploadFile, folder: str, allowed_extensions: list):

    if file is None:
        return None

    extension = Path(file.filename).suffix.lower()

    if extension not in allowed_extensions:
        raise HTTPException(
            status_code=400,
            detail=f"Only {', '.join(allowed_extensions)} files are allowed."
        )

    file.file.seek(0, os.SEEK_END)
    file_size = file.file.tell()
    file.file.seek(0)

    if file_size > MAX_FILE_SIZE:
        raise HTTPException(
            status_code=400,
            detail="File size should be less than 10 MB."
        )

    folder_path = os.path.join(BASE_UPLOAD_DIR, folder)
    os.makedirs(folder_path, exist_ok=True)

    unique_name = f"{uuid.uuid4().hex}{extension}"

    filepath = os.path.join(folder_path, unique_name)

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return filepath


@router.post("/{msme_id}")
async def upload_documents(
    msme_id: int,
    gst_certificate: UploadFile = File(None),
    bank_statement: UploadFile = File(None),
    pan_card: UploadFile = File(None),
    udyam_certificate: UploadFile = File(None),
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

    gst_path = save_file(
        gst_certificate,
        "gst",
        [".pdf"]
    )

    bank_path = save_file(
        bank_statement,
        "bank",
        [".pdf"]
    )

    pan_path = save_file(
        pan_card,
        "pan",
        [".pdf", ".jpg", ".jpeg", ".png"]
    )

    udyam_path = save_file(
        udyam_certificate,
        "udyam",
        [".pdf"]
    )

    if gst_path:
        msme.gst_certificate = gst_path

    if bank_path:
        msme.bank_statement = bank_path

    if pan_path:
        msme.pan_card = pan_path

    if udyam_path:
        msme.udyam_certificate = udyam_path

    db.commit()
    db.refresh(msme)

    return {
        "success": True,
        "message": "Documents uploaded successfully.",
        "documents": {
            "gst_certificate": msme.gst_certificate,
            "bank_statement": msme.bank_statement,
            "pan_card": msme.pan_card,
            "udyam_certificate": msme.udyam_certificate
        }
    }