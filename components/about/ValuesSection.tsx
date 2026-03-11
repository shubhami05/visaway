import { ShieldCheck, Star, MessageSquare } from "lucide-react"
import SectionHeading from "@/components/shared/SectionHeading"

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Honest Advice",
    description:
      "We don't tell you what you want to hear; we tell you what you need to know. Integrity is our foundation.",
  },
  {
    icon: Star,
    title: "Student-First",
    description:
      "Every recommendation is made with your long-term success and well-being as the only priority.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "No jargon, no ambiguity. We keep you informed at every step of the process with directness and warmth.",
  },
]

export default function ValuesSection() {
  return (
    <section className="py-16 md:py-20 bg-offwhite dark:bg-gray-900">
      <div className="container-custom">
        <SectionHeading
          title="The Values That Guide Us"
          subtitle="Trust is built on transparency and consistency. Here is how we show up for our students every single day."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="bg-white dark:bg-gray-950 rounded-2xl p-7 border border-gray-100 dark:border-gray-800 hover:border-primary/40 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-5">
                <v.icon size={22} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}