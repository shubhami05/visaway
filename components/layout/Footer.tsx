import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { NAV_LINKS, CONTACT_EMAIL, CONTACT_PHONE, OFFICE_ADDRESS, WHATSAPP_NUMBER } from "@/lib/constants"

const SERVICES_LINKS = [
  { label: "Free Profile Evaluation", href: "/services" },
  { label: "Career Counselling",      href: "/services" },
  { label: "University Shortlisting", href: "/services" },
  { label: "Visa Guidance",           href: "/services" },
  { label: "Pre-Departure Support",   href: "/services" },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white">

      {/* Main Footer */}
      <div className="container-custom py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand Column */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center mb-4">
            {/* Footer is always dark background — use light logo */}
            <Image
              src="/logo-light.png"
              alt="Visa Way"
              width={120}
              height={40}
              className="h-9 w-auto"
            />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Empowering Indian students to achieve their dreams of studying abroad with honest, personalized guidance.
          </p>
          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-primary transition-colors text-white text-sm font-medium px-4 py-2 rounded-lg"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-white mb-4 text-base">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="font-heading font-semibold text-white mb-4 text-base">
            Our Services
          </h4>
          <ul className="flex flex-col gap-2">
            {SERVICES_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading font-semibold text-white mb-4 text-base">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="flex items-start gap-3 text-gray-400 hover:text-primary text-sm transition-colors"
              >
                <Phone size={15} className="mt-0.5 shrink-0 text-primary" />
                {CONTACT_PHONE}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-start gap-3 text-gray-400 hover:text-primary text-sm transition-colors"
              >
                <Mail size={15} className="mt-0.5 shrink-0 text-primary" />
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-3 text-gray-400 text-sm">
              <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
              {OFFICE_ADDRESS}
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Visa Way Education Consultancy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-primary text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-primary text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

    </footer>
  )
}