import type { Metadata } from "next"
import { australia } from "@/content/australia"
import DestinationHero   from "@/components/destinations/DestinationHero"
import DestinationTabs    from "@/components/destinations/DestinationTabs"
import DestinationSidebar from "@/components/destinations/DestinationSidebar"
import CTABanner          from "@/components/shared/CTABanner"

export const metadata: Metadata = {
  title: "Study in Australia",
  description:
    "Explore why Australia is one of the top study abroad destinations — top universities, post-study work rights, and clear PR pathways.",
}

export default function AustraliaPage() {
  return (
    <>
      <DestinationHero data={australia} />

      <section className="py-12 md:py-16 bg-white dark:bg-gray-950">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            <DestinationTabs data={australia} />
          </div>
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <DestinationSidebar data={australia} />
          </div>
        </div>
      </section>

      <section className="py-12 bg-offwhite dark:bg-gray-900">
        <div className="container-custom">
          <CTABanner
            title="Planning to study in Australia?"
            subtitle="Talk to our expert counsellors and get a personalized roadmap today."
            buttonText="Talk to Counsellor"
            buttonHref="/contact"
          />
        </div>
      </section>
    </>
  )
}