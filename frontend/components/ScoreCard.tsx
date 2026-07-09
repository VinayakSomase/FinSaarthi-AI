type ScoreCardProps = {
  title: string
  value: string
  subtitle: string
  color?: string
}

export default function ScoreCard({
  title,
  value,
  subtitle,
  color = '#003366',
}: ScoreCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">

      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h2
        className="text-3xl font-bold mt-3"
        style={{ color }}
      >
        {value}
      </h2>

      <p className="text-sm text-gray-500 mt-2">
        {subtitle}
      </p>

    </div>
  )
}