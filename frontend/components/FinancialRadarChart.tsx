'use client'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { subject: 'Cash Flow', score: 88 },
  { subject: 'Compliance', score: 92 },
  { subject: 'Growth', score: 84 },
  { subject: 'Repayment', score: 95 },
  { subject: 'Digital', score: 81 },
  { subject: 'Stability', score: 90 },
]

export default function FinancialRadarChart() {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid />

          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: '#374151', fontSize: 13 }}
          />

          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={{ fontSize: 10 }}
          />

          <Radar
            name="Financial Score"
            dataKey="score"
            stroke="#16a34a"
            fill="#16a34a"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}