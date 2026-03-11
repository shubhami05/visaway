import {
  MessageSquare,
  ClipboardList,
  BookOpen,
  Send,
  Mail,
  Shield,
  Plane,
} from "lucide-react"

const STEPS = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Free Counselling",
    description:
      "Sit down with our experts to discuss your dreams, budget, and destination preferences. We listen first.",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Profile Evaluation",
    description:
      "We analyze your academic history, test scores, and extracurriculars to determine your strongest application path.",
  },
  {
    step: "03",
    icon: BookOpen,
    title: "Course and University Shortlist",
    description:
      "Based on your evaluation, we provide a curated list of universities and programs where you will thrive.",
  },
  {
    step: "04",
    icon: Send,
    title: "Application Submission",
    description:
      "Our team manages your documentation, ensures your essays shine, and hits every deadline with precision.",
  },
  {
    step: "05",
    icon: Mail,
    title: "Offer Letter",
    description:
      "The moment we have worked for. We help you review your offers and choose the institution that best fits your future.",
  },
  {
    step: "06",
    icon: Shield,
    title: "Visa Guidance",
    description:
      "Do not let paperwork scare you. We guide you through the visa interview process and financial documentation.",
  },
  {
    step: "07",
    icon: Plane,
    title: "Pre-Departure Support",
    description:
      "From flight bookings to finding your first roommates, we make sure you are ready for your new life before you take off.",
  },
]

export default function ProcessTimeline() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-950">
      <div className="container-custom max-w-4xl">
        <div className="relative flex flex-col gap-0">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 hidden md:block" />

          {STEPS.map((s, i) => {
            const isLeft = i % 2 === 0
            return (
              <div
                key={s.step}
                className={`relative flex flex-col md:flex-row items-center gap-6 mb-10 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="w-full md:w-5/12">
                  <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-offwhite dark:bg-gray-900 hover:border-primary/40 hover:shadow-md transition-all duration-200">
                    <p className="text-xs font-bold text-primary tracking-widest mb-2">
                      STEP {s.step}
                    </p>
                    <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>

                {/* Center icon */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shrink-0">
                  <s.icon size={20} className="text-white" />
                </div>

                {/* Spacer (opposite side) */}
                <div className="hidden md:block w-5/12" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}