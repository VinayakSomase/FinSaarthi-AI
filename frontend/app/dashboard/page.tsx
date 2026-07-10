'use client'

import { useEffect, useState } from 'react'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import DashboardHeader from '@/components/Dashboard/DashboardHeader'
import KPICards from '@/components/Dashboard/KPICards'
import MSMESummary from '@/components/Dashboard/MSMESummary'
import QuickActions from '@/components/Dashboard/QuickActions'

import { getDashboardStats } from '@/services/dashboard'
import { getMSMEs } from "@/services/msme";

interface DashboardStats {
  total_msmes: number
  approved: number
  rejected: number
  pending: number
  average_health_score: number
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [msme, setMsme] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchDashboard() {
      try {

        const dashboardData = await getDashboardStats()

        const msmeData = await getMSMEs()

        console.log("Dashboard Stats:", dashboardData)
        console.log("MSMEs:", msmeData)

        setStats(dashboardData)

        setMsme(msmeData[0])

      } catch (error) {
        console.error("Dashboard Error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboard()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading Dashboard...
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
        Failed to load dashboard.
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <DashboardHeader />

          <KPICards stats={stats} />

          {msme && <MSMESummary msme={msme} />}

          <QuickActions />
        </main>
      </div>
    </div>
  )
}