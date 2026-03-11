import Link from "next/link"
import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { WHATSAPP_NUMBER } from "@/lib/constants"

export default function HeroSection() {
  return (
    <section className="bg-offwhite dark:bg-gray-900 py-16 md:py-24">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left — Text */}
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary bg-primary-light dark:bg-primary/20 px-3 py-1 rounded-full mb-5">
            Expert Global Guidance
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white leading-tight">
            Study Abroad Guidance You{" "}
            <span className="text-primary">Can Trust</span>
          </h1>
          <p className="mt-5 text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            Personal counselling by Visa Way. Expert advice for your global
            education journey, from university selection to visa approval.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Free Counselling
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp Chat
            </a>
          </div>
        </div>

        {/* Right — Image */}
        <div className="relative rounded-2xl overflow-hidden h-80 md:h-96 shadow-xl">
          <Image
            src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg"
            alt="Students discussing study abroad options"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay card */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <p className="text-sm font-semibold text-gray-800 dark:text-white">
              Personal counselling by Visa Way.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Expert advice for your global education journey.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}