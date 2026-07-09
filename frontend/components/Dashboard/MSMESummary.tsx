export default function MSMESummary() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold text-[#003366]">
            ABC Textiles Pvt. Ltd.
          </h2>

          <p className="text-gray-500 mt-1">
            MSME ID : MSME-10245
          </p>

        </div>

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
          Approval Ready
        </span>

      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-6">

        <div>
          <p className="text-gray-500 text-sm">
            Business Type
          </p>

          <p className="font-semibold">
            Textile Manufacturing
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Annual Turnover
          </p>

          <p className="font-semibold">
            ₹4.8 Crore
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            GST Status
          </p>

          <p className="font-semibold text-green-600">
            Active & Compliant
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Recommendation
          </p>

          <p className="font-semibold text-[#003366]">
            Eligible for Business Loan
          </p>
        </div>

      </div>

      {/* AI Summary */}

      <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-5">

        <h3 className="text-lg font-semibold text-green-700">
          AI Summary
        </h3>

        <p className="mt-3 text-gray-700 leading-7">
          ABC Textiles Pvt. Ltd. is <span className="font-semibold text-green-700">approval-ready</span> with a
          <span className="font-semibold"> Low Risk</span> profile, strong GST compliance,
          excellent repayment behaviour and healthy business growth.
          Based on AI analysis, the enterprise qualifies for an estimated
          business loan of <span className="font-semibold">₹48 Lakh</span> with
          <span className="font-semibold"> 96% confidence.</span>
        </p>

      </div>

    </div>
  )
}