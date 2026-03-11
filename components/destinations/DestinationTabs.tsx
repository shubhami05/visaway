"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import type { DestinationData } from "@/content/australia"
import { OverviewTab }   from "./tabs/OverviewTab"
import { CoursesTab }    from "./tabs/CoursesTab"
import { CostsTab }      from "./tabs/CostsTab"
import { WorkRightsTab } from "./tabs/WorkRightsTab"
import { VisaBasicsTab } from "./tabs/VisaBasicsTab"

const TABS = [
  { key: "overview",    label: "Overview" },
  { key: "courses",     label: "Courses" },
  { key: "costs",       label: "Costs" },
  { key: "workrights",  label: "Work Rights" },
  { key: "visa",        label: "Visa Basics" },
]

export default function DestinationTabs({ data }: { data: DestinationData }) {
  const [active, setActive] = useState("overview")

  return (
    <div>
      {/* Tab Bar */}
      <div className="flex gap-1 overflow-hidden border-b border-gray-200 dark:border-gray-800 mb-8 overflow-x-auto">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={cn(
              "px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px",
              active === t.key
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-primary"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {active === "overview"   && <OverviewTab   data={data} />}
      {active === "courses"    && <CoursesTab    data={data} />}
      {active === "costs"      && <CostsTab      data={data} />}
      {active === "workrights" && <WorkRightsTab data={data} />}
      {active === "visa"       && <VisaBasicsTab data={data} />}
    </div>
  )
}