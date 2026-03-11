import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import SectionHeading from "@/components/shared/SectionHeading"
import CTABanner from "@/components/shared/CTABanner"
import { DESTINATIONS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Study Destinations",
  description:
    "Explore top study abroad destinations — Australia and Canada. Get country-specific guidance on courses, costs, work rights, and visa.",
}

const DESTINATION_DETAILS = [
  {
    slug: "australia",
    highlights: ["7 Top-100 Universities", "48hr/fortnight work rights", "2–4 year post-study visa", "Clear PR pathway"],
  },
  {
    slug: "canada",
    highlights: ["Affordable tuition vs US/UK", "24hr/week work rights", "Up to 3 year PGWP", "Express Entry PR route"],
  },
]

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-offwhite dark:bg-gray-900 py-16 md:py-24 text-center">
        <div className="container-custom max-w-3xl">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary bg-primary-light dark:bg-primary/20 px-3 py-1 rounded-full mb-5">
            Study Destinations
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white leading-tight">
            Where Do You Want to{" "}
            <span className="text-primary">Study?</span>
          </h1>
          <p className="mt-5 text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            We focus on world-class education hubs that offer excellent career
            outcomes, post-study work rights, and clear immigration pathways.
          </p>
        </div>
      </section>

      {/* Destination Cards */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-950">
        <div className="container-custom flex flex-col gap-10">
          {DESTINATIONS.map((dest) => {
            const detail = DESTINATION_DETAILS.find((d) => d.slug === dest.slug)
            return (
              <div
                key={dest.slug}
                className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Image */}
                <div className="relative h-60 md:h-auto min-h-64">
                  <Image
                    src={dest.image}
                    alt={`Study in ${dest.name}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h2 className="text-3xl font-heading font-bold text-white">
                      {dest.name}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 bg-offwhite dark:bg-gray-900 flex flex-col justify-between gap-6">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">
                      {dest.tagline}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {detail?.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="btn-primary self-start flex items-center gap-2 text-sm"
                  >
                    Explore {dest.name}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-offwhite dark:bg-gray-900">
        <div className="container-custom">
          <CTABanner
            title="Not sure which country suits you?"
            subtitle="Talk to our counsellors for a free, honest assessment of which destination fits your goals."
            buttonText="Get Free Advice"
            buttonHref="/contact"
          />
        </div>
      </section>
    </>
  )
}