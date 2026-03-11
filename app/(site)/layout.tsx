import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import WhatsAppButton from "@/components/shared/WhatsAppButton"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}