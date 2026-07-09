interface Props {
  title: string
  value: string
  color?: string
}

export default function DecisionCard({
  title,
  value,
  color = 'text-[#003366]',
}: Props) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-5 flex flex-col gap-2">
      <p className="text-gray-500 text-sm">{title}</p>

      <h2 className={`text-3xl font-bold mt-3 ${color}`}>
        {value}
      </h2>
    </div>
  )
}