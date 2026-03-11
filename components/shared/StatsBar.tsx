import { STATS } from "@/lib/constants"

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-y border-gray-100 dark:border-gray-800">
      {STATS.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-3xl md:text-4xl font-heading font-bold text-primary">
            {stat.value}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wide">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}