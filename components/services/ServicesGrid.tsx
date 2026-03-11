import {
  UserCheck,
  Compass,
  MapPin,
  FileText,
  Send,
  Shield,
  Plane,
} from "lucide-react"

const SERVICES = [
  {
    icon: UserCheck,
    title: "Free Profile Evaluation",
    description:
      "Get a professional assessment of your academic background and goals to determine your best options globally.",
    points: [
      "Academic history review",
      "Test score analysis",
      "Strengths and gap identification",
    ],
  },
  {
    icon: Compass,
    title: "Career and Course Counselling",
    description:
      "Expert advice to align your interests with future market demands and select the most impactful academic path.",
    points: [
      "Aptitude assessment",
      "Industry demand mapping",
      "Goal setting and roadmap",
    ],
  },
  {
    icon: MapPin,
    title: "Country and University Shortlisting",
    description:
      "We help you find the perfect fit based on ranking, budget, location preferences, and post-study opportunities.",
    points: [
      "University ranking analysis",
      "Cost of living estimation",
      "PR and job outcome research",
    ],
  },
  {
    icon: FileText,
    title: "SOP and Document Guidance",
    description:
      "Professional assistance in crafting winning Statements of Purpose, resumes, and letters of recommendation.",
    points: [
      "SOP writing and review",
      "LOR guidance",
      "Resume/CV formatting",
    ],
  },
  {
    icon: Send,
    title: "Application Assistance",
    description:
      "End-to-end support for submitting error-free applications to ensure maximum acceptance rates.",
    points: [
      "Application form review",
      "Deadline tracking",
      "Document checklist management",
    ],
  },
  {
    icon: Shield,
    title: "Student Visa Guidance",
    description:
      "Comprehensive assistance with visa documentation, financial planning, and mock interview preparations.",
    points: [
      "Visa document checklist",
      "Financial proof guidance",
      "Mock visa interview",
    ],
  },
  {
    icon: Plane,
    title: "Pre-Departure Support",
    description:
      "Essential briefings on cultural adjustment, accommodation, banking, and life in your destination country.",
    points: [
      "Accommodation guidance",
      "Banking and SIM setup tips",
      "Cultural orientation",
    ],
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            // Last card spans full width on lg if odd total
            const isLast = i === SERVICES.length - 1
            return (
              <div
                key={s.title}
                className={`p-7 rounded-2xl border border-gray-100 dark:border-gray-800 bg-offwhite dark:bg-gray-900 hover:border-primary/40 hover:shadow-md transition-all duration-200 flex flex-col gap-4 ${
                  isLast ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary-light dark:bg-primary/20 flex items-center justify-center shrink-0">
                  <s.icon size={22} className="text-primary" />
                </div>

                {/* Title + Description */}
                <div>
                  <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {/* Points */}
                <ul className="flex flex-col gap-2 mt-auto pt-2 border-t border-gray-100 dark:border-gray-800">
                  {s.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}