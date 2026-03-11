import type { Metadata } from "next"
import { canada } from "@/content/canada"
import DestinationHero    from "@/components/destinations/DestinationHero"
import DestinationTabs    from "@/components/destinations/DestinationTabs"
import DestinationSidebar from "@/components/destinations/DestinationSidebar"
import CTABanner          from "@/components/shared/CTABanner"

export const metadata: Metadata = {
  title: "Study in Canada",
  description:
    "Explore why Canada is a top study destination — affordable tuition, PGWP work permits, and one of the clearest PR pathways globally.",
}

export default function CanadaPage() {
  return (
    <>
      <DestinationHero data={canada} />

      <section className="py-12 md:py-16 bg-white dark:bg-gray-950">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <DestinationTabs data={canada} />
          </div>
          <div className="lg:col-span-1">
            <DestinationSidebar data={canada} />
          </div>
        </div>
      </section>

      <section className="py-12 bg-offwhite dark:bg-gray-900">
        <div className="container-custom">
          <CTABanner
            title="Planning to study in Canada?"
            subtitle="Talk to our expert counsellors and get a personalized roadmap today."
            buttonText="Talk to Counsellor"
            buttonHref="/contact"
          />
        </div>
      </section>
    </>
  )
}