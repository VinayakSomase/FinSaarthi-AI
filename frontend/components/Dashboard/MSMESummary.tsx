interface MSME {
  id: number
  business_name: string
  owner_name: string
  industry: string
  city: string
  state: string
  annual_turnover: number
  health_score: number
  risk_level: string
  status: string
}

interface Props {
  msme: MSME
}

export default function MSMESummary({ msme }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold text-[#003366]">
            {msme.business_name}
          </h2>

          <p className="text-gray-500 mt-1">
            MSME ID : MSME-{msme.id}
          </p>

        </div>

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
          {msme.status}
        </span>

      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-6">

        <div>
          <p className="text-gray-500 text-sm">
            Industry
          </p>

          <p className="font-semibold">
            {msme.industry}
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Annual Turnover
          </p>

          <p className="font-semibold">
            ₹{msme.annual_turnover.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Owner
          </p>

          <p className="font-semibold text-green-600">
            {msme.owner_name}
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            City
          </p>

          <p className="font-semibold text-[#003366]">
            {msme.city}, {msme.state}
          </p>
        </div>

      </div>

      <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-5">

        <h3 className="text-lg font-semibold text-green-700">
          AI Summary
        </h3>

        <p className="mt-3 text-gray-700 leading-7">
          <span className="font-semibold">{msme.business_name}</span> has a
          <span className="font-semibold"> {msme.risk_level} Risk</span> profile with a
          financial health score of
          <span className="font-semibold"> {msme.health_score}</span>.
          The enterprise is currently
          <span className="font-semibold"> {msme.status}</span> and is
          performing well according to the AI financial analysis.
        </p>

      </div>

    </div>
  )
}