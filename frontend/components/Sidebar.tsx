'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Building2,
  Activity,
  TrendingUp,
  BarChart3,
  FileCheck
} from 'lucide-react'

export default function Sidebar() {
  const pathname = usePathname()

  const menu = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Select MSME',
      href: '/select-msme',
      icon: Building2,
    },
    {
      title: 'Financial Health',
      href: '/financial-health',
      icon: Activity,
    },
    {
      title: 'Trend Analysis',
      href: '/trend-analysis',
      icon: TrendingUp,
    },
    {
      title: 'Peer Benchmark',
      href: '/peer-benchmark',
      icon: BarChart3,
    },
    {
      title: 'Decision & Report',
      href: '/decision-report',
      icon: FileCheck,
    },
  ]

  return (
    <aside className="w-64 min-h-screen bg-[#003366] text-white">

      <div className="p-6">

        <h2 className="text-xl font-bold">
          Navigation
        </h2>

      </div>

      <nav className="px-3 space-y-2">

        {menu.map((item) => {

          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                pathname === item.href
                  ? 'bg-white text-[#003366] font-semibold'
                  : 'hover:bg-[#005BAC]'
              }`}
            >
              <Icon size={20} />

              <span>{item.title}</span>

            </Link>
          )
        })}

      </nav>

    </aside>
  )
}