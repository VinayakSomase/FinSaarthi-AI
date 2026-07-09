import Link from "next/link"

export default function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-8">

      <h2 className="text-xl font-bold text-[#003366] mb-6">
        Quick Actions
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <Link
          href="/select-msme"
          className="bg-[#003366] text-white rounded-lg p-5 hover:bg-[#005BAC] transition"
        >
          <h3 className="font-semibold">
            Select MSME
          </h3>

          <p className="text-sm mt-2 opacity-90">
            Choose an MSME for analysis
          </p>
        </Link>

        <Link
          href="/financial-health"
          className="bg-green-600 text-white rounded-lg p-5 hover:bg-green-700 transition"
        >
          <h3 className="font-semibold">
            View Health Card
          </h3>

          <p className="text-sm mt-2 opacity-90">
            Financial score & AI insights
          </p>
        </Link>

        <Link
          href="/decision-report"
          className="bg-gray-900 text-white rounded-lg p-5 hover:bg-gray-800 transition"
        >
          <h3 className="font-semibold">
            Decision Report
          </h3>

          <p className="text-sm mt-2 opacity-90">
            Lending recommendation
          </p>
        </Link>

      </div>

    </div>
  )
}