'use client'

import AppLayout from '@/components/AppLayout'
import BenchmarkChart from '@/components/BenchmarkChart'

export default function PeerBenchmarkPage() {
  return (
    <AppLayout active="Peer Benchmark">

      <h1 className="text-4xl font-bold text-[#003366]">
        Peer Benchmark
      </h1>

      <p className="text-gray-500 mt-2 mb-8">
        Compare MSME performance against industry peers
      </p>

      {/* Benchmark Chart */}
      <div className="bg-white rounded-xl border shadow-sm p-6">

        <h2 className="text-2xl font-semibold mb-6">
          Industry Comparison
        </h2>

        <BenchmarkChart />

        {/* AI Insight */}
        <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="font-semibold text-green-700">
            💡 AI Insight
          </p>

          <p className="text-gray-700 mt-2">
            Above the industry average in Cash Flow, Compliance, Repayment
            and Stability. Digital Adoption remains the primary opportunity
            for improvement.
          </p>
        </div>

      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

        {/* Industry Ranking */}
        <div className="bg-white rounded-xl border shadow-sm p-6">

          <p className="text-gray-500">
            Industry Ranking
          </p>

          <h2 className="text-5xl font-bold text-green-600 mt-3">
            Top 12%
          </h2>

          <p className="text-green-600 mt-3">
            Better than 88% of similar MSMEs
          </p>

        </div>

        {/* Top Quartile Benchmark */}
        <div className="bg-white rounded-xl border shadow-sm p-6">

          <p className="text-gray-500">
  Top 25% Benchmark
</p>

          <h2 className="text-5xl font-bold text-[#003366] mt-3">
            820
          </h2>

          <p className="mt-3 text-green-600 font-semibold">
            ✔ Your Score: 842 (Above Benchmark)
          </p>

        </div>

        {/* Strengths */}
        <div className="bg-white rounded-xl border shadow-sm p-6">

          <h3 className="font-semibold text-lg mb-4">
            Strengths
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>✅ Excellent repayment history</li>
            <li>✅ Strong GST compliance</li>
            <li>✅ Healthy cash flow</li>
          </ul>

        </div>

        {/* Improvement Areas */}
        <div className="bg-white rounded-xl border shadow-sm p-6">

          <h3 className="font-semibold text-lg mb-4">
            Improvement Areas
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>⚠️ Increase digital adoption</li>
            <li>⚠️ Expand revenue diversification</li>
            <li>⚠️ Improve inventory turnover</li>
          </ul>

        </div>

      </div>

      {/* AI Benchmark Summary */}
      <div className="mt-8 bg-white rounded-xl border shadow-sm p-6">

        <h2 className="text-2xl font-semibold mb-5">
          AI Benchmark Summary
        </h2>

        <p className="text-gray-700 leading-8">
          Based on financial behaviour, compliance history, repayment
          performance and business growth, this MSME performs significantly
          better than the industry average. The business ranks within the
          <span className="font-semibold text-green-600"> Top 12% </span>
          of comparable MSMEs and exceeds the
          <span className="font-semibold text-[#003366]"> Top Quartile Benchmark</span>.
          Continued investment in digital operations and inventory efficiency
          can further improve the financial health score.
        </p>

      </div>

    </AppLayout>
  )
}