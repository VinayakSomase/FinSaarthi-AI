'use client'

import { useState } from 'react'
type Props = {
  id: number
  name: string
  industry: string
  score: number
  risk: string
  loan: string
}

export default function MSMECard({
  id,
  name,
  industry,
  score,
  risk,
  loan,
}: Props) {
  const [loading, setLoading] = useState(false)
  return (
    <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition">

      <div className="flex justify-between items-start">

        <div>
          <div className="flex items-center gap-3">

  <h2 className="text-2xl font-bold text-[#003366]">
    {name}
  </h2>

  <span
    className={`px-3 py-1 rounded-full text-xs font-semibold ${
      risk === 'Low'
        ? 'bg-green-100 text-green-700'
        : 'bg-yellow-100 text-yellow-700'
    }`}
  >
    {risk === 'Low' ? 'Approval Ready' : 'Needs Review'}
  </span>

</div>

<p className="text-gray-500 mt-2">
  {industry}
</p>

          <p className="mt-4">
            <span className="font-semibold">Health Score:</span> {score}
          </p>

          <div className="mt-2 flex items-center gap-2">

  <span className="font-semibold">
    Risk:
  </span>

  <span
    className={`px-2 py-1 rounded-full text-xs font-semibold ${
      risk === 'Low'
        ? 'bg-green-100 text-green-700'
        : 'bg-yellow-100 text-yellow-700'
    }`}
  >
    {risk}
  </span>

</div>

          <p>
            <span className="font-semibold">Loan Eligibility:</span> {loan}
          </p>
        </div>

        <button
  onClick={() => {
    setLoading(true);

    // Save selected MSME ID
    localStorage.setItem("selectedMSME", id.toString());

    setTimeout(() => {
      window.location.href = "/financial-health";
    }, 1000);
  }}
  disabled={loading}
  className="bg-[#003366] hover:bg-[#005BAC] disabled:bg-gray-400 text-white px-6 py-3 rounded-xl font-semibold transition"
>
  {loading ? "Analyzing..." : "Analyze MSME →"}
</button>
      </div>

    </div>
  )
}