import Link from "next/link"
import { Phone, Banknote, Building2, Calendar, TrendingUp } from "lucide-react"
import type { DestinationData } from "@/content/australia"

export default function DestinationSidebar({ data }: { data: DestinationData }) {
  const facts = [
    { icon: Banknote,  label: "Currency",     value: data.quickFacts.currency },
    { icon: Building2, label: "Major Cities",  value: data.quickFacts.majorCities },
    { icon: Calendar,  label: "Intakes",       value: data.quickFacts.intakes },
    { icon: TrendingUp,label: "Avg. Salary",   value: data.quickFacts.avgSalary },
  ]

  return (
    <aside className="flex flex-col gap-6">

      {/* CTA Card */}
      <div className="bg-dark rounded-2xl p-6 text-white">
        <h3 className="font-heading font-bold text-lg mb-2">
          Ready to start your journey?
        </h3>
        <p className="text-gray-400 text-sm mb-5">
          Our expert counsellors are here to guide you every step of the way.
        </p>
        <div className="flex flex-col gap-3">
          <Link href="/contact" className="btn-primary text-sm text-center flex items-center justify-center gap-2">
            <Phone size={15} />
            Talk to Counsellor
          </Link>
          <Link href="/destinations" className="text-center text-sm border border-white/20 text-white hover:border-primary hover:text-primary px-4 py-2.5 rounded-lg transition-colors">
            View Universities
          </Link>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="bg-offwhite dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
        <h3 className="font-heading font-bold text-base text-gray-900 dark:text-white mb-4">
          Quick Facts
        </h3>
        <ul className="flex flex-col gap-3">
          {facts.map((f) => (
            <li key={f.label} className="flex items-start gap-3">
              <f.icon size={15} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-gray-400">{f.label}</p>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{f.value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </aside>
  )
}