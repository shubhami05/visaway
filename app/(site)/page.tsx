import HeroSection from "@/components/home/HeroSection"
import WhoThisIsFor from "@/components/home/WhoThisIsFor"
import StudyDestinations from "@/components/home/StudyDestination"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import ServicesSnapshot from "@/components/home/ServiceSnapshot"
import QuickEnquiryForm from "@/components/home/QuickEnquiryForm"
import StatsBar from "@/components/shared/StatsBar"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <WhoThisIsFor />
      <StudyDestinations />
      <WhyChooseUs />
      <ServicesSnapshot />
      <QuickEnquiryForm />
    </>
  )
}