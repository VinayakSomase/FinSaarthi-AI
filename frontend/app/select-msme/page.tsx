'use client'

import { useEffect, useState } from 'react'

import AppLayout from '@/components/AppLayout'
import MSMECard from '@/components/MSMECard'

import { getMSMEs } from '@/services/msme'

export default function SelectMSMEPage() {

  const [msmes, setMsmes] = useState<any[]>([])
  const [selectedMSME, setSelectedMSME] = useState("")

  useEffect(() => {

    async function loadMSMEs() {

      try {

        const data = await getMSMEs()

        console.log("MSMEs:", data)

        setMsmes(data)

      } catch (error) {

        console.error(error)

      }

    }

    loadMSMEs()

  }, [])

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
          className="w-full md:w-96 rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm"
        >

          <option value="">
            Select an MSME...
          </option>

          {msmes.map((msme) => (

            <option
              key={msme.id}
              value={msme.id}
            >
              {msme.business_name}
            </option>

          ))}

        </select>

      </div>

      <div className="space-y-6">

        {msmes.map((msme) => (

          <MSMECard

            key={msme.id}
            
            id={msme.id}

            name={msme.business_name}

            industry={msme.industry}

            score={msme.health_score}

            risk={msme.risk_level}

            loan="₹48 Lakh"

          />

        ))}

      </div>

    </AppLayout>

  )

}