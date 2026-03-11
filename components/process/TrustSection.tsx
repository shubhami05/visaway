import Link from "next/link"
import { Star, Users, HeartHandshake } from "lucide-react"

const TRUST_POINTS = [
  {
    icon: Star,
    title: "98% Success Rate",
    description: "Proven track record of successful admissions.",
  },
  {
    icon: Users,
    title: "Expert Counsellors",
    description: "10+ years of experience in global education guidance.",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Care",
    description: "We are with you from the first call to your first class.",
  },
]

export default function TrustSection() {
  return (
    <section className="py-16 md:py-20 bg-offwhite dark:bg-gray-900">
      <div className="container-custom max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-10">
          Why trust our process?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {TRUST_POINTS.map((t) => (
            <div
              key={t.title}
              className="bg-white dark:bg-gray-950 rounded-2xl p-7 border border-gray-100 dark:border-gray-800 flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-primary-light dark:bg-primary/20 flex items-center justify-center">
                <t.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-gray-900 dark:text-white">
                {t.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t.description}
              </p>
            </div>
          ))}
        </div>
        <Link href="/contact" className="btn-primary inline-block">
          Book My Free Counselling Session
        </Link>
      </div>
    </section>
  )
}