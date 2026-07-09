'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { LogOut, Menu, X } from 'lucide-react'
import FinancialScoreBar from '@/components/FinancialScoreBar'


export default function FinancialHealthPage() {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const handleLogout = () => {
    router.push('/login')
  }

  const navItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Select MSME', href: '/select-msme' },
    { label: 'Financial Health', href: '/financial-health', active: true },
    { label: 'Trend Analysis', href: '/trend-analysis' },
    { label: 'Peer Benchmark', href: '/peer-benchmark' },
    { label: 'Decision & Report', href: '/decision-report' },
  ]

  return (
    <div className="min-h-screen bg-background">
      

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside
  className={`w-64 bg-[#003366] text-white min-h-screen transform transition-transform duration-300 lg:translate-x-0 ${
    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>
          <nav className="p-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 rounded-lg font-medium transition ${
  item.active
    ? 'bg-green-600 text-white'
    : 'text-white hover:bg-white/10'
}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1">
          <div className="p-8">
            <div className="max-w-6xl mx-auto">

              <h2 className="text-4xl font-bold text-[#003366]">
  Financial Health Card
</h2>

<p className="text-gray-500 mt-2 mb-8">
  View comprehensive financial health assessment
</p>

              <div className="grid lg:grid-cols-3 gap-6">

                {/* Overall Score */}
<div className="bg-white rounded-xl border shadow-sm p-6">

  <p className="text-gray-500">
    Overall Financial Health
  </p>

  <h1 className="text-6xl font-bold text-green-600 mt-4">
    842
  </h1>

  <p className="mt-2 text-xl font-semibold text-green-600">
    Excellent
  </p>

  <div className="mt-6 rounded-xl bg-green-50 border border-green-200 p-4">

    <h3 className="font-semibold text-green-700">
      AI Assessment
    </h3>

    <p className="text-sm text-gray-700 mt-2 leading-6">
      Strong cash flow, excellent repayment history, high compliance,
      and stable business growth indicate excellent creditworthiness.
    </p>

    <div className="mt-4">
      <p className="text-xs text-gray-500">
        Recommended Decision
      </p>

      <p className="font-semibold text-[#003366]">
        Eligible for Business Loan
      </p>
    </div>

  </div>

</div>

                {/* Financial Overview */}
<div className="lg:col-span-2 bg-white rounded-xl border shadow-sm p-8">

  <h3 className="text-xl font-semibold mb-6">
    Financial Health Overview
  </h3>

  <div>

  <FinancialScoreBar title="Cash Flow" value={88} />
  <FinancialScoreBar title="Compliance" value={92} />
  <FinancialScoreBar title="Growth" value={84} />
  <FinancialScoreBar title="Repayment" value={95} />
  <FinancialScoreBar title="Digital Adoption" value={81} />
  <FinancialScoreBar title="Stability" value={90} />

</div>

</div>

              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  )
}