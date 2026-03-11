import { DestinationData } from "@/content/australia"
import { Clock, TrendingUp } from "lucide-react"

export function WorkRightsTab({ data }: { data: DestinationData }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-offwhite dark:bg-gray-900 flex gap-4">
        <div className="w-10 h-10 rounded-lg bg-primary-light dark:bg-primary/20 flex items-center justify-center shrink-0">
          <Clock size={18} className="text-primary" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
            Part-Time Work Rules
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            {data.workRights.partTime}
          </p>
        </div>
      </div>
      <div className="p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-offwhite dark:bg-gray-900 flex gap-4">
        <div className="w-10 h-10 rounded-lg bg-primary-light dark:bg-primary/20 flex items-center justify-center shrink-0">
          <TrendingUp size={18} className="text-primary" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
            Post-Study Work
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            {data.workRights.postStudy}
          </p>
        </div>
      </div>
    </div>
  )
}