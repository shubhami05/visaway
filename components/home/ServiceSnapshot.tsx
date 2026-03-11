import Link from "next/link"
import { UserCheck, Compass, MapPin } from "lucide-react"
import SectionHeading from "@/components/shared/SectionHeading"

const SNAPSHOT = [
  {
    icon: UserCheck,
    title: "Career Counselling",
    description: "Identify the right career path based on your strengths and interests.",
    points: ["Aptitude assessment", "Goal setting"],
  },
  {
    icon: Compass,
    title: "Course and University Selection",
    description: "Curating a list of institutions that best fit your profile and budget.",
    points: ["University ranking analysis", "Cost of living estimation"],
  },
  {
    icon: MapPin,
    title: "Application and Visa Guidance",
    description: "Stress-free handling of your entire documentation and filing process.",
    points: ["SOP/LOR assistance", "Visa mock interviews"],
  },
]

export default function ServicesSnapshot() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-950">
      <div className="container-custom">
        <SectionHeading
          title="Services Snapshot"
          subtitle="End-to-end support for your international education journey."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SNAPSHOT.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-offwhite dark:bg-gray-900 hover:border-primary/40 hover:shadow-md transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-primary-light dark:bg-primary/20 flex items-center justify-center mb-4">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 dark:text-white mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {s.description}
              </p>
              <ul className="flex flex-col gap-1">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/services" className="btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}