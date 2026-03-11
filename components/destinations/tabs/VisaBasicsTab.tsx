import { DestinationData } from "@/content/australia"
import { CheckCircle2, FileText } from "lucide-react"

export function VisaBasicsTab({ data }: { data: DestinationData }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-2">
        <FileText size={18} className="text-primary" />
        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
          Key Requirements — Student {data.visaBasics.subclass}
        </h4>
      </div>
      <ul className="flex flex-col gap-3">
        {data.visaBasics.requirements.map((r) => (
          <li key={r} className="flex items-start gap-3">
            <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" />
            <span className="text-sm text-gray-600 dark:text-gray-400">{r}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 p-4 rounded-xl bg-primary-light dark:bg-primary/10 border border-primary/20 text-xs text-primary leading-relaxed">
        ⚠️ Visa decisions are made by embassies. We guide you honestly but never promise visa approvals.
      </div>
    </div>
  )
}