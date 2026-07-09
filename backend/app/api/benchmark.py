from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.services.benchmark_service import get_peer_benchmark

router = APIRouter(
    prefix="/benchmark",
    tags=["Peer Benchmark"]
)


@router.get("/{msme_id}")
def benchmark(
    msme_id: int,
    db: Session = Depends(get_db)
):
    return get_peer_benchmark(msme_id, db)