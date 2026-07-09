'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import DashboardHeader from '@/components/Dashboard/DashboardHeader'
import KPICards from '@/components/Dashboard/KPICards'
import MSMESummary from '@/components/Dashboard/MSMESummary'
import QuickActions from '@/components/Dashboard/QuickActions'
export default function DashboardPage() {
  return (
  <div className="min-h-screen bg-gray-50">
    <Navbar />

    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <DashboardHeader />
        <KPICards />
        <MSMESummary />
        <QuickActions />
      </main>
    </div>
  </div>
)
}