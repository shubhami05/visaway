import { DestinationData } from "@/content/australia"

export function CostsTab({ data }: { data: DestinationData }) {
  const { costs } = data
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Tuition */}
        <div className="p-6 rounded-xl bg-primary-light dark:bg-primary/10 border border-primary/20">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
            Tuition Fees
          </p>
          <p className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
            {costs.currency} ${costs.tuitionMin.toLocaleString()} –{" "}
            ${costs.tuitionMax.toLocaleString()}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            {costs.tuitionNote}
          </p>
        </div>
        {/* Living */}
        <div className="p-6 rounded-xl bg-offwhite dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
            Living Expenses
          </p>
          <p className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
            {costs.currency} ${costs.livingMin.toLocaleString()}+
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            {costs.livingNote}
          </p>
        </div>
      </div>
    </div>
  )
}