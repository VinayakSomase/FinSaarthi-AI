export default function DashboardHeader() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">

      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Monitor MSME financial health and AI-powered lending insights
        </p>
      </div>

      <div className="mt-5 lg:mt-0 flex items-center gap-4">

        <select className="border border-gray-300 rounded-xl px-4 py-3 bg-white shadow-sm">
          <option>ABC Textiles Pvt. Ltd.</option>
          <option>XYZ Industries</option>
          <option>Shree Enterprises</option>
        </select>

        <div className="text-right">
          <p className="text-sm text-gray-500">
            Last Updated
          </p>

          <p className="font-semibold text-green-600">
  08 Jul 2026
</p>

<p className="text-xs text-gray-500">
  11:42 AM
</p>
        </div>

      </div>

    </div>
  )
}