# FinSaarthi AI

> AI-Powered MSME Financial Health & Credit Intelligence Platform

**Developed by Team Zynex**

FinSaarthi AI is an AI-driven platform developed for the **IDBI Innovate Hackathon 2026** under **Problem Statement 3 – Financial Health Score**.

The platform helps banks assess MSME financial health using consent-based alternate data sources and AI-powered analytics, enabling faster, transparent, and more informed lending decisions.

---

## Problem Statement

Traditional MSME credit evaluation relies heavily on financial statements and bureau history. Many **New-to-Credit (NTC)** and **New-to-Bank (NTB)** enterprises lack sufficient financial records despite operating healthy businesses.

FinSaarthi AI addresses this challenge by transforming alternate financial data into an explainable Financial Health Card that supports transparent credit assessment.

---

## Solution Overview

FinSaarthi AI combines alternate financial signals such as GST, UPI, Account Aggregator, EPFO, and banking transaction data to generate a multidimensional Financial Health Score.

The platform assists lenders by:

- Assessing MSME financial health
- Identifying financial strengths and risks
- Monitoring business performance over time
- Comparing businesses with industry peers
- Recommending the next best lending action

Rather than providing only an approval or rejection, FinSaarthi AI explains the reasoning behind every recommendation, improving transparency and confidence in lending decisions.

---

## Key Features

- AI-Powered Financial Health Card
- Explainable AI Decision Support
- Credit Readiness Assessment
- Financial Risk Analysis
- Trend Analysis
- Peer Benchmarking
- Interactive Banker Dashboard
- AI-Based Lending Recommendations
- Secure JWT Authentication
- Cloud-Based Deployment

---

## Technology Stack

| Layer          | Technologies                                        |
|----------------|-----------------------------------------------------|
| Frontend       | Next.js, React, TypeScript, Tailwind CSS, shadcn/ui |
| Backend        | FastAPI, Python, REST APIs                          |
| AI & Analytics | Pandas, NumPy, Scikit-learn                         |
| Database       | SQLite                                              |
| Authentication | JWT, OAuth2                                         |
| Deployment     | Vercel, Render                                      |

---

## Project Structure

```
FinSaarthi-AI
│
├── frontend/
├── backend/
├── ml/
├── data/
├── docs/
├── presentation/
└── README.md
```

---

## Getting Started

### Clone Repository

```bash
git clone https://github.com/VinayakSomase/FinSaarthi-AI.git
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

---

## Live Deployment

**Frontend**

https://fin-saarthi-ai-mz1f.vercel.app

**Backend API**

https://finsaarthi-api.onrender.com/docs

---

## Future Enhancements

- Integration with ULI, OCEN, and Account Aggregator ecosystem
- Predictive AI-based financial risk monitoring
- Intelligent loan recommendation engine
- Real-time financial data synchronization
- Portfolio monitoring and analytics

---

## Team

**Team Zynex**

Developed for **IDBI Innovate Hackathon 2026**

---

## License

This project was developed for educational and hackathon purposes.