from io import BytesIO
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet


def generate_pdf(data: dict):

    buffer = BytesIO()

    doc = SimpleDocTemplate(buffer)

    styles = getSampleStyleSheet()

    story = []

    story.append(Paragraph("<b>FinSaarthi AI Loan Assessment Report</b>", styles["Title"]))

    story.append(Paragraph(f"<b>Business Name:</b> {data['business_name']}", styles["Normal"]))
    story.append(Paragraph(f"<b>Owner Name:</b> {data['owner_name']}", styles["Normal"]))

    story.append(Paragraph("<br/>", styles["Normal"]))

    story.append(Paragraph(f"<b>Health Score:</b> {data['health_score']}", styles["Normal"]))
    story.append(Paragraph(f"<b>Risk Level:</b> {data['risk_level']}", styles["Normal"]))
    story.append(Paragraph(f"<b>Loan Eligibility:</b> {data['loan_eligibility']}", styles["Normal"]))
    story.append(Paragraph(f"<b>Confidence:</b> {data['confidence']}%", styles["Normal"]))

    story.append(Paragraph("<br/>", styles["Normal"]))

    story.append(Paragraph(
        f"<b>Recommended Loan Amount:</b> ₹{data['recommended_loan_amount']:,}",
        styles["Normal"]
    ))

    story.append(Paragraph("<br/>", styles["Normal"]))

    story.append(Paragraph(
        f"<b>Recommendation:</b> {data['recommendation']}",
        styles["Normal"]
    ))

    doc.build(story)

    buffer.seek(0)

    return buffer