import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import type { DestinationData } from "@/content/australia"

export default function DestinationHero({ data }: { data: DestinationData }) {
  return (
    <section className="relative h-72 md:h-96 w-full overflow-hidden">
      <Image
        src={data.heroImage}
        alt={`Study in ${data.name}`}
        fill
        className="object-cover"
        priority
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 container-custom pb-8 md:pb-12">
        <span className="text-xs font-semibold tracking-widest uppercase text-primary-light mb-2 block">
          Destination
        </span>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-3">
          Study in {data.name}
        </h1>
        <p className="text-gray-300 text-sm md:text-base max-w-xl mb-6">
          {data.tagline}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary flex items-center gap-2 text-sm">
            <Phone size={15} />
            Talk to Counsellor
          </Link>
          <button className="btn-outline border-white text-white hover:bg-white hover:text-primary text-sm">
            Download Guide
          </button>
        </div>
      </div>
    </section>
  )
}