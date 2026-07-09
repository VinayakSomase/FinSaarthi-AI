'use client'

import AppLayout from '@/components/AppLayout'
import TrendChart from '@/components/TrendChart'

export default function TrendAnalysisPage() {
  return (
    <AppLayout active="Trend Analysis">

      <h1 className="text-4xl font-bold text-[#003366]">
        Trend Analysis
      </h1>

      <p className="text-gray-500 mt-2 mb-8">
        Monitor financial health performance over time
      </p>
      <div className="grid md:grid-cols-3 gap-6 mb-8">

  <div className="bg-white rounded-xl border shadow-sm p-5">
    <p className="text-gray-500 text-sm">Current Score</p>
    <h2 className="text-3xl font-bold text-[#003366] mt-2">842</h2>
    <p className="text-green-600 font-medium mt-2">▲ +8% vs Last Year</p>
  </div>

  <div className="bg-white rounded-xl border shadow-sm p-5">
    <p className="text-gray-500 text-sm">Cash Flow Growth</p>
    <h2 className="text-3xl font-bold text-[#003366] mt-2">+12%</h2>
    <p className="text-green-600 font-medium mt-2">▲ Improving</p>
  </div>

  <div className="bg-white rounded-xl border shadow-sm p-5">
    <p className="text-gray-500 text-sm">Risk Trend</p>
    <h2 className="text-3xl font-bold text-[#003366] mt-2">Low</h2>
    <p className="text-green-600 font-medium mt-2">▼ 15% Lower Risk</p>
  </div>

</div>

      {/* Chart */}
      <div className="bg-white rounded-xl shadow-sm border p-6">

        <h2 className="text-2xl font-semibold mb-6">
          Financial Health Trend
        </h2>

        <TrendChart />

      </div>
      {/* Cash Flow Trend */}
<div className="mt-8 bg-white rounded-xl shadow-sm border p-6">

  <h2 className="text-2xl font-semibold mb-6">
    Cash Flow Trend
  </h2>

  <div className="space-y-4">

    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>Jan</span>
        <span>68%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div className="bg-green-600 h-3 rounded-full" style={{ width: '68%' }}></div>
      </div>
    </div>

    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>Apr</span>
        <span>75%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div className="bg-green-600 h-3 rounded-full" style={{ width: '75%' }}></div>
      </div>
    </div>

    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>Jul</span>
        <span>84%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div className="bg-green-600 h-3 rounded-full" style={{ width: '84%' }}></div>
      </div>
    </div>

    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>Oct</span>
        <span>91%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div className="bg-green-600 h-3 rounded-full" style={{ width: '91%' }}></div>
      </div>
    </div>

  </div>

</div>

      {/* AI Insights */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border p-6">

        <h2 className="text-2xl font-semibold mb-5">
          AI Insights
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>✅ Overall financial score improved by 8% over the last 12 months.</li>
          <li>📈 Cash flow has shown steady month-on-month growth.</li>
          <li>🟢 GST compliance has remained consistently strong.</li>
          <li>💰 Repayment history indicates low lending risk.</li>
        </ul>

      </div>
      {/* AI Trend Summary */}
<div className="mt-8 bg-white rounded-xl shadow-sm border p-6">

  <h2 className="text-2xl font-semibold text-[#003366] mb-5">
    AI Trend Summary
  </h2>

  <div className="bg-green-50 border border-green-200 rounded-xl p-5">

    <p className="text-lg font-semibold text-green-700">
      🟢 Overall Trend: Improving
    </p>

    <p className="text-gray-700 mt-3 leading-7">
      Financial performance has improved steadily over the last 12 months.
      Cash flow, repayment behaviour and compliance remain consistently
      strong, indicating healthy business growth and improved
      creditworthiness.
    </p>

  </div>

  <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">

    <p className="font-semibold text-yellow-700">
      ⚠ Sudden Drop Analysis
    </p>

    <p className="text-gray-700 mt-2">
      No sudden financial deterioration has been detected during the
      analysis period. Business performance remains stable.
    </p>

  </div>

</div>

    </AppLayout>
  )
}