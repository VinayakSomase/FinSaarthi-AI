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

type Props = {
  yourScore: number
  industryAverage: number
}

export default function BenchmarkChart({
  yourScore,
  industryAverage,
}: Props) {

  const data = [
    {
      metric: "Health Score",
      MSME: yourScore,
      Industry: industryAverage,
    },
  ]

  return (
    <div className="w-full h-[380px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="metric" />

          <YAxis domain={[0,100]} />

          <Tooltip />

          <Legend />

          <Bar
            dataKey="MSME"
            fill="#16a34a"
            radius={[6,6,0,0]}
          />

          <Bar
            dataKey="Industry"
            fill="#94a3b8"
            radius={[6,6,0,0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}