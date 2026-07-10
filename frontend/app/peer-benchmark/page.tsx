'use client'

import { useEffect, useState } from 'react'

import AppLayout from '@/components/AppLayout'
import BenchmarkChart from '@/components/BenchmarkChart'

import { getBenchmark } from '@/services/benchmark'

export default function PeerBenchmarkPage() {

  const [benchmark, setBenchmark] = useState<any>(null)

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function loadBenchmark() {

      try {

        const id = localStorage.getItem("selectedMSME")

        if (!id) {

          window.location.href = "/select-msme"

          return

        }

        const data = await getBenchmark(Number(id))

        console.log("Benchmark:", data)

        setBenchmark(data)

      } catch (error) {

        console.error(error)

      } finally {

        setLoading(false)

      }

    }

    loadBenchmark()

  }, [])

  if (loading) {

    return (

      <AppLayout active="Peer Benchmark">

        <div className="text-center mt-20 text-xl">

          Loading Benchmark...

        </div>

      </AppLayout>

    )

  }

  if (!benchmark) {

    return (

      <AppLayout active="Peer Benchmark">

        <div className="text-center mt-20 text-red-500">

          Failed to load benchmark.

        </div>

      </AppLayout>

    )

  }

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

        <BenchmarkChart
          yourScore={benchmark.your_health_score}
          industryAverage={benchmark.industry_average}
        />

        {/* AI Insight */}
        <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="font-semibold text-green-700">
            💡 AI Insight
          </p>

          <p className="text-gray-700 mt-2">
            <strong>{benchmark.business_name}</strong> is{" "}
            <strong>
              {benchmark.difference >= 0 ? "above" : "below"}
            </strong>{" "}
            the industry average by{" "}
            <strong>{Math.abs(benchmark.difference)}</strong> points.
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

          <h2 className="text-4xl font-bold text-green-600 mt-3">
            {benchmark.ranking}
          </h2>

          <p className="text-green-600 mt-3">
            Difference: {benchmark.difference}
          </p>

        </div>

        {/* Top Quartile Benchmark */}
        <div className="bg-white rounded-xl border shadow-sm p-6">

          <p className="text-gray-500">
  Top 25% Benchmark
</p>

          <h2 className="text-5xl font-bold text-[#003366] mt-3">
            {benchmark.industry_average}
          </h2>

          <p className="mt-3 text-green-600 font-semibold">
            ✔ Your Score: {benchmark.your_health_score}
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
          <strong>{benchmark.business_name}</strong> belongs to the{" "}
          <strong>{benchmark.industry}</strong> industry.

          <br /><br />

          Current Health Score:
          <strong> {benchmark.your_health_score}</strong>

          <br />

          Industry Average:
          <strong> {benchmark.industry_average}</strong>

          <br />

          Difference:
          <strong> {benchmark.difference}</strong>

          <br />

          Overall Ranking:
          <strong> {benchmark.ranking}</strong>
        </p>

      </div>

    </AppLayout>
  )
}