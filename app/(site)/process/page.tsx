import type { Metadata } from "next"
import ProcessHero     from "@/components/process/ProcessHero"
import ProcessTimeline from "@/components/process/ProcessTimeline"
import TrustSection    from "@/components/process/TrustSection"

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Visa Way guides you through 7 clear steps — from free counselling to pre-departure support. No confusion, no surprises.",
}

export default function ProcessPage() {
  return (
    <>
      <ProcessHero />
      <ProcessTimeline />
      <TrustSection />
    </>
  )
}