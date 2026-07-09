type Props = {
  title: string
  value: number
}

export default function FinancialScoreBar({ title, value }: Props) {
  const descriptions: Record<string, string> = {
    "Cash Flow":
      "Healthy cash movement with positive operating liquidity.",

    "Compliance":
      "GST filings and statutory compliance are excellent.",

    "Growth":
      "Business revenue shows stable year-on-year growth.",

    "Repayment":
      "Excellent repayment history with very low default risk.",

    "Digital Adoption":
      "Strong adoption of UPI, GST and digital banking services.",

    "Stability":
      "Business remains financially stable with consistent performance.",
  }

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-gray-800">
          {title}
        </h4>

        <span className="font-bold text-green-600">
          {value}%
        </span>
      </div>

      <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">
        <div
          className="h-full bg-green-600 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>

      <p className="mt-2 text-sm text-gray-500">
        {descriptions[title]}
      </p>
    </div>
  )
}