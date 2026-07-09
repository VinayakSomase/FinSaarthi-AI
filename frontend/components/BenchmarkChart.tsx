'use client'

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const data = [
  { metric: 'Cash Flow', MSME: 88, Industry: 75 },
  { metric: 'Compliance', MSME: 92, Industry: 80 },
  { metric: 'Growth', MSME: 84, Industry: 78 },
  { metric: 'Repayment', MSME: 95, Industry: 82 },
  { metric: 'Digital', MSME: 81, Industry: 70 },
  { metric: 'Stability', MSME: 90, Industry: 79 },
]

export default function BenchmarkChart() {
  return (
    <div className="w-full h-[380px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 10,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="metric" />

          <YAxis domain={[0, 100]} />

          <Tooltip />

          <Legend verticalAlign="top" height={36} />

          <Bar
            dataKey="MSME"
            fill="#16a34a"
            radius={[6, 6, 0, 0]}
          />

          <Bar
            dataKey="Industry"
            fill="#94a3b8"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}