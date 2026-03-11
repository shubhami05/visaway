import type { Metadata } from "next"
import ContactInfo from "@/components/contact/ContactInfo"
import ContactForm from "@/components/contact/ContactForm"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Visa Way. Book a free counselling session or send us a message — we reply within 24 hours.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-offwhite dark:bg-gray-900 py-16 md:py-24">
        <div className="container-custom max-w-2xl text-center md:text-left">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary bg-primary-light dark:bg-primary/20 px-3 py-1 rounded-full mb-5">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white leading-tight">
            Let's Talk About{" "}
            <span className="text-primary">Your Future</span>
          </h1>
          <p className="mt-5 text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            Ready to start your international education journey? Our expert
            counsellors are here to guide you through every step of the process.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-950">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <div className="bg-offwhite dark:bg-gray-900 rounded-2xl p-8 md:p-10 border border-gray-100 dark:border-gray-800">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}