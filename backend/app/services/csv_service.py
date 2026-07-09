import csv
from io import StringIO


def generate_csv(msmes):

    output = StringIO()

    writer = csv.writer(output)

    writer.writerow([
        "ID",
        "Business Name",
        "Owner Name",
        "Business Age",
        "Annual Turnover",
        "Employees",
        "Status"
    ])

    for msme in msmes:
        writer.writerow([
            msme.id,
            msme.business_name,
            msme.owner_name,
            msme.business_age,
            msme.annual_turnover,
            msme.employee_count,
            msme.status
        ])

    output.seek(0)

    return output