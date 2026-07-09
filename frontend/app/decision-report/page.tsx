'use client'

import AppLayout from '@/components/AppLayout'
import DecisionCard from '@/components/DecisionCard'
import { Button } from '@/components/ui/button'

export default function DecisionReportPage() {
  return (
    <AppLayout active="Decision & Report">

      <h1 className="text-4xl font-bold text-[#003366]">
        AI Decision & Report
      </h1>

      <p className="text-gray-500 mt-2 mb-8">
        Final AI-powered lending recommendation
      </p>

      {/* Decision Cards */}
      <div className="mb-8 bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl p-8 shadow-lg">

  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

    <div>
      <p className="text-green-100 text-sm uppercase tracking-wider">
        Final AI Lending Decision
      </p>

      <h2 className="text-4xl font-bold text-white mt-2">
        ✅ APPROVED
      </h2>

      <p className="text-green-100 mt-3 max-w-2xl">
        FinSaarthi AI recommends approving this MSME for business lending based
        on its excellent financial health, low lending risk, and strong repayment
        behaviour.
      </p>
    </div>

    <div className="bg-white/15 backdrop-blur rounded-2xl px-8 py-6 text-center">
      <p className="text-green-100 text-sm">
        AI Confidence
      </p>

      <h2 className="text-5xl font-bold text-white mt-2">
        96%
      </h2>
    </div>

  </div>

</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

        <DecisionCard
          title="Loan Decision"
          value="Approve"
          color="text-green-600"
        />
        


        <div className="bg-white rounded-xl border shadow-sm p-6">
  <p className="text-gray-500">Recommended Product</p>

  <h2 className="text-2xl font-bold text-[#003366] mt-3">
    MSME Working Capital Loan
  </h2>

  <p className="text-green-600 mt-3 font-semibold">
    36 Months • From 9.2% p.a.
  </p>
</div>

        <DecisionCard
          title="Eligible Amount"
          value="₹48 Lakh"
          color="text-[#003366]"
        />

        <DecisionCard
          title="Risk Level"
          value="Low"
          color="text-green-600"
        />

        <DecisionCard
          title="Confidence"
          value="96%"
          color="text-[#003366]"
        />

      </div>

      {/* AI Summary */}
      <div className="mt-8 bg-white rounded-xl border shadow-sm p-6">

        <h2 className="text-2xl font-semibold mb-5">
          AI Recommendation
        </h2>

        <p className="text-gray-700 leading-8">
          FinSaarthi AI recommends approving this MSME for business lending.
          The enterprise demonstrates excellent financial stability, strong GST
          compliance, healthy repayment history and sustainable business growth.
          The estimated lending risk is low, with a confidence score of 96%.
          Based on the financial health assessment, the MSME qualifies for an
          estimated loan amount of ₹48 Lakhs.
        </p>

      </div>
     {/* Risk Assessment + Key Decision Factors */}
<div className="grid lg:grid-cols-2 gap-6 mt-8">

  {/* Risk Assessment */}
  <div className="bg-white rounded-xl border shadow-sm p-6">

    <h2 className="text-2xl font-semibold mb-5">
      Risk Assessment
    </h2>

    <div className="space-y-4">

      <div className="flex items-center justify-between rounded-lg bg-green-50 p-3">
        <span className="font-medium text-gray-700">
          Credit Risk
        </span>

        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold">
          Low
        </span>
      </div>

      <div className="flex items-center justify-between rounded-lg bg-green-50 p-3">
        <span className="font-medium text-gray-700">
          Compliance Risk
        </span>

        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold">
          Low
        </span>
      </div>

      <div className="flex items-center justify-between rounded-lg bg-yellow-50 p-3">
        <span className="font-medium text-gray-700">
          Market Risk
        </span>

        <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
          Medium
        </span>
      </div>

    </div>

  </div>

  {/* Key Decision Factors */}
  <div className="bg-white rounded-xl border shadow-sm p-6">

    <h2 className="text-2xl font-semibold mb-5">
      Key Decision Factors
    </h2>

    <ul className="space-y-4 text-gray-700">

      <li>✅ Financial Health Score: <span className="font-semibold">842 (Excellent)</span></li>

      <li>✅ Top 12% compared to similar MSMEs</li>

      <li>✅ Strong GST & statutory compliance</li>

      <li>✅ Consistent repayment history</li>

      <li>✅ Positive business growth trend</li>

    </ul>

  </div>

</div>

      {/* Buttons */}
      <div className="mt-10">

  <div className="bg-gradient-to-r from-[#003366] to-[#005BAC] rounded-2xl p-8 shadow-xl">

    <h2 className="text-2xl font-bold text-white">
      Export Financial Report
    </h2>

    <p className="text-blue-100 mt-2">
      Download the AI-generated lending recommendation and financial health assessment.
    </p>

    <div className="flex flex-wrap gap-4 mt-6">

      <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-xl text-lg font-semibold">
        📄 Download Report
      </Button>

      <Button className="bg-white text-[#003366] hover:bg-gray-100 px-8 py-6 rounded-xl font-semibold">
        📑 Export PDF
      </Button>

      <Button className="bg-white text-[#003366] hover:bg-gray-100 px-8 py-6 rounded-xl font-semibold">
        📊 Export CSV
      </Button>

    </div>

  </div>

</div>

    </AppLayout>
  )
}