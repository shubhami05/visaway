import type { Metadata } from "next"
import AboutHero from "@/components/about/AboutHero"
import WhyIStarted from "@/components/about/WhyIStarted"
import ValuesSection from "@/components/about/ValuesSection"
import VisionCard from "@/components/about/VisionCard"
import CTABanner from "@/components/shared/CTABanner"

export const metadata: Metadata = {
  title: "About Jasmin Patel",
  description:
    "Meet Jasmin Patel, founder of Visa Way. Learn about her journey, values, and vision for honest, student-first education consultancy.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyIStarted />
      <ValuesSection />
      <VisionCard />
      <section className="py-16 bg-offwhite dark:bg-gray-900">
        <div className="container-custom">
          <CTABanner
            title="Ready to start your journey?"
            subtitle="Book your first free consultation with Jasmin Patel today."
            buttonText="Let's Talk"
            buttonHref="/contact"
          />
        </div>
      </section>
    </>
  )
}