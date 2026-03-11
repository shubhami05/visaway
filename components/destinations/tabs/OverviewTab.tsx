import type { DestinationData } from "@/content/australia"

export function OverviewTab({ data }: { data: DestinationData }) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {data.overview.intro}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.overview.highlights.map((h) => (
          <div
            key={h.title}
            className="p-5 rounded-xl border border-gray-100 dark:border-gray-800 bg-offwhite dark:bg-gray-900"
          >
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
              {h.title}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              {h.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}