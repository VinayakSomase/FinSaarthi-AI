'use client'

import { ReactNode, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { LogOut, Menu, X } from 'lucide-react'

interface Props {
  children: ReactNode
  active: string
}

export default function AppLayout({ children, active }: Props) {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const navItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Select MSME', href: '/select-msme' },
    { label: 'Financial Health', href: '/financial-health' },
    { label: 'Trend Analysis', href: '/trend-analysis' },
    { label: 'Peer Benchmark', href: '/peer-benchmark' },
    { label: 'Decision & Report', href: '/decision-report' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">

     


      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0B3A6E] text-white z-40">
          <nav className="p-6 space-y-2">

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block rounded-lg px-4 py-3 font-medium transition ${
                  active === item.label
                    ? 'bg-green-600 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {item.label}
              </a>
            ))}

          </nav>
        </aside>

        {/* Page Content */}
        <main className="flex-1 ml-64 p-10">
          {children}
        </main>

      </div>

    </div>
  )
}