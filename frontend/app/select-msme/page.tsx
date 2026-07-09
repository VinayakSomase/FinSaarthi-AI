'use client'

import { useState } from 'react'
import AppLayout from '@/components/AppLayout'
import MSMECard from '@/components/MSMECard'

export default function SelectMSMEPage() {
  const [selectedMSME, setSelectedMSME] = useState('')

  return (
    <AppLayout active="Select MSME">

      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-[#003366]">
          Select MSME
        </h1>

        <button className="bg-[#003366] hover:bg-[#005BAC] text-white px-5 py-3 rounded-xl font-semibold transition">
          Upload CSV
        </button>
      </div>

      <p className="text-gray-500 mt-2 mb-6">
        Choose an MSME to generate Financial Health Card
      </p>

      <div className="mb-8">
        <select
          value={selectedMSME}
          onChange={(e) => setSelectedMSME(e.target.value)}
          className="w-full md:w-96 rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Select an MSME...</option>
          <option value="ABC Textiles Pvt. Ltd.">
            ABC Textiles Pvt. Ltd.
          </option>
          <option value="XYZ Foods Pvt. Ltd.">
            XYZ Foods Pvt. Ltd.
          </option>
          <option value="Sunrise Engineering">
            Sunrise Engineering
          </option>
        </select>

        {selectedMSME === '' && (
          <p className="mt-3 text-sm text-red-600">
            Please select an MSME before starting the analysis.
          </p>
        )}
      </div>

      <div className="space-y-6">

        <MSMECard
          name="ABC Textiles Pvt. Ltd."
          industry="Textile Manufacturing"
          score={842}
          risk="Low"
          loan="₹48 Lakh"
        />

        <MSMECard
          name="XYZ Foods Pvt. Ltd."
          industry="Food Processing"
          score={791}
          risk="Medium"
          loan="₹32 Lakh"
        />

        <MSMECard
          name="Sunrise Engineering"
          industry="Engineering"
          score={865}
          risk="Low"
          loan="₹55 Lakh"
        />

      </div>

    </AppLayout>
  )
}