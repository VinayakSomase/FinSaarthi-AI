'use client'

import { Bell, User, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()

  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 shadow-sm">

      <div>
        <h1 className="text-2xl font-bold text-[#003366]">
          FinSaarthi AI
        </h1>

        <p className="text-sm text-gray-500">
          AI-Powered MSME Financial Health & Credit Intelligence Platform
        </p>
      </div>

      <div className="flex items-center gap-6">

        {/* Notification */}
        <button className="relative">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User */}
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-[#003366] flex items-center justify-center text-white">
            <User className="w-5 h-5" />
          </div>

          <div>
            <h3 className="font-semibold">
              Loan Officer
            </h3>

            <p className="text-xs text-gray-500">
              IDBI Bank
            </p>
          </div>

        </div>

        {/* Logout */}
        <button
          onClick={() => router.push('/login')}
          className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>

      </div>

    </header>
  )
}