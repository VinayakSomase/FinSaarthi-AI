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

export default function HealthRadarChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis domain={[0, 100]} />
        <Radar
          dataKey="score"
          stroke="#16A34A"
          fill="#16A34A"
          fillOpacity={0.4}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}