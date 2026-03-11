import type { Metadata } from "next"
import ServicesHero from "@/components/services/ServicesHero"
import ServicesGrid from "@/components/services/ServicesGrid"
import StatsBar     from "@/components/shared/StatsBar"
import CTABanner    from "@/components/shared/CTABanner"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Visa Way offers end-to-end study abroad support — from profile evaluation and university shortlisting to visa guidance and pre-departure briefings.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <StatsBar />
      <ServicesGrid />
      <section className="py-16 bg-offwhite dark:bg-gray-900">
        <div className="container-custom">
          <CTABanner
            title="Ready to start your journey?"
            subtitle="Book your first free consultation session with Visa Way today."
            buttonText="Book Now"
            buttonHref="/contact"
          />
        </div>
      </section>
    </>
  )
}