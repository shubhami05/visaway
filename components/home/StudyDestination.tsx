import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import SectionHeading from "@/components/shared/SectionHeading"
import { DESTINATIONS } from "@/lib/constants"

export default function StudyDestinations() {
  return (
    <section className="py-16 md:py-20 bg-offwhite dark:bg-gray-900">
      <div className="container-custom">
        <SectionHeading
          title="Study Destinations"
          subtitle="We focus on world-class education hubs that offer excellent career outcomes and lifestyle opportunities."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DESTINATIONS.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="group relative rounded-2xl overflow-hidden h-64 md:h-80 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={dest.image}
                alt={`Study in ${dest.name}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-heading font-bold text-white">
                  {dest.name}
                </h3>
                <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                  {dest.tagline}
                </p>
                <span className="inline-flex items-center gap-1 text-primary-light text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}