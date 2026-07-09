'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

const data = [
  { month: 'Jan', score: 780 },
  { month: 'Feb', score: 792 },
  { month: 'Mar', score: 801 },
  { month: 'Apr', score: 812 },
  { month: 'May', score: 821 },
  { month: 'Jun', score: 828 },
  { month: 'Jul', score: 832 },
  { month: 'Aug', score: 836 },
  { month: 'Sep', score: 839 },
  { month: 'Oct', score: 840 },
  { month: 'Nov', score: 841 },
  { month: 'Dec', score: 842 },
]

export default function TrendChart() {
  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#16a34a"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}