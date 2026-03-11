import { GraduationCap, BookOpen, Briefcase } from "lucide-react"
import SectionHeading from "@/components/shared/SectionHeading"

const AUDIENCE = [
  {
    icon: GraduationCap,
    title: "12th Students",
    description: "Unlock your potential with undergraduate programs at the world's top-ranking universities.",
  },
  {
    icon: BookOpen,
    title: "Graduates",
    description: "Specialize your career with prestigious Masters and Post-graduate degrees tailored to your goals.",
  },
  {
    icon: Briefcase,
    title: "Working Professionals",
    description: "Elevate your career trajectory with globally recognised executive and certificate courses.",
  },
]

export default function WhoThisIsFor() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-950">
      <div className="container-custom">
        <SectionHeading
          title="Who This Is For"
          align="left"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AUDIENCE.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-offwhite dark:bg-gray-900 hover:border-primary/40 hover:shadow-md transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-primary-light dark:bg-primary/20 flex items-center justify-center mb-4">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}