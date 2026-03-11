import { DestinationData } from "@/content/australia"
import { ChevronRight } from "lucide-react"

export function CoursesTab({ data }: { data: DestinationData }) {
  return (
    <div className="flex flex-col gap-3">
      {data.courses.map((c) => (
        <div
          key={c.title}
          className="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-offwhite dark:bg-gray-900 hover:border-primary/40 transition-colors"
        >
          <div>
            <p className="font-medium text-gray-900 dark:text-white text-sm">{c.title}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{c.sub}</p>
          </div>
          <ChevronRight size={16} className="text-gray-400 shrink-0" />
        </div>
      ))}
    </div>
  )
}