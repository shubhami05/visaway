import { CheckCircle2 } from "lucide-react"
import SectionHeading from "@/components/shared/SectionHeading"

const REASONS = [
  {
    title: "Personalized Counselling",
    description: "Tailored specifically to your academic background and career goals.",
  },
  {
    title: "Honest Guidance",
    description: "Realistic assessment of your profile and university prospects. No false promises.",
  },
  {
    title: "One-to-One Support",
    description: "Direct communication line for all your queries and concerns.",
  },
  {
    title: "Transparent Process",
    description: "Complete visibility on your application and visa status at all times.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-dark">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left — Text */}
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight mb-6">
            Why Choose Visa Way
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Unlike large agencies, we offer a boutique experience where every
            student receives the undivided attention of an expert consultant.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {REASONS.map((r) => (
              <div key={r.title} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white text-sm">{r.title}</p>
                  <p className="text-gray-400 text-sm mt-0.5 leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Photo + Badge */}
        <div className="relative flex justify-center">
          <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl bg-gray-800 flex items-center justify-center overflow-hidden relative">
            {/* Replace with actual Jasmin photo */}
            <div className="text-gray-600 text-center px-6">
              <div className="w-20 h-20 rounded-full bg-gray-700 mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl text-gray-500">JP</span>
              </div>
              <p className="text-sm text-gray-500">Jasmin Patel Photo</p>
            </div>
            {/* Experience badge */}
            <div className="absolute bottom-4 right-4 bg-primary text-white text-xs font-bold px-3 py-2 rounded-lg shadow-lg">
              15+ Years Experience
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}