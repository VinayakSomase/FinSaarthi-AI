'use client'

import { useEffect, useState } from "react";
import FinancialScoreBar from "@/components/FinancialScoreBar";
import { getHealth } from "@/services/health";

export default function FinancialHealthPage() {

  const [health, setHealth] = useState<any>(null);

  useEffect(() => {

    async function loadHealth() {

      try {

        // Later we'll use the selected MSME ID
        const id = localStorage.getItem("selectedMSME");

        if (!id) {
          alert("Please select an MSME first.");
          window.location.href = "/select-msme";
          return;
        }

        const data = await getHealth(Number(id));

        console.log("Health:", data);

        setHealth(data);

        // console.log("Health:", data);

        // setHealth(data);

      } catch (err) {

        console.error(err);

      }

    }

    loadHealth();

  }, []);

  if (!health) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading Financial Health...
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-gray-50 p-10">

      <h1 className="text-4xl font-bold text-[#003366]">
        Financial Health Card
      </h1>

      <p className="text-gray-500 mt-2 mb-8">
        View comprehensive financial health assessment
      </p>

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl border shadow-sm p-6">

          <p className="text-gray-500">
            Overall Financial Health
          </p>

          <h1 className="text-6xl font-bold text-green-600 mt-4">
            {health.health_score}
          </h1>

          <p className="mt-2 text-xl font-semibold text-green-600">
            {health.risk_level} Risk
          </p>

          <div className="mt-6 rounded-xl bg-green-50 border border-green-200 p-4">

            <h3 className="font-semibold text-green-700">
              AI Assessment
            </h3>

            <p className="text-sm text-gray-700 mt-3">

              {health.recommendation}

            </p>

            <div className="mt-5">

              <p className="text-xs text-gray-500">
                Loan Eligibility
              </p>

              <p className="font-semibold">

                {health.loan_eligibility}

              </p>

            </div>

            <div className="mt-4">

              <p className="text-xs text-gray-500">
                Confidence
              </p>

              <p className="font-semibold">
                {health.confidence}%
              </p>

            </div>

            <div className="mt-4">

              <p className="text-xs text-gray-500">
                Recommended Loan
              </p>

              <p className="font-semibold">

                ₹{health.recommended_loan_amount.toLocaleString()}

              </p>

            </div>

          </div>

        </div>

        <div className="lg:col-span-2 bg-white rounded-xl border shadow-sm p-8">

          <h3 className="text-xl font-semibold mb-6">
            Financial Health Overview
          </h3>

          <FinancialScoreBar
            title="Cash Flow"
            value={health.cash_flow}
          />

          <FinancialScoreBar
            title="Compliance"
            value={health.compliance}
          />

          <FinancialScoreBar
            title="Growth"
            value={health.growth}
          />

          <FinancialScoreBar
            title="Repayment"
            value={health.repayment}
          />

          <FinancialScoreBar
            title="Digital Adoption"
            value={health.digital_adoption}
          />

          <FinancialScoreBar
            title="Stability"
            value={health.stability}
          />

        </div>

      </div>

    </div>

  );

}