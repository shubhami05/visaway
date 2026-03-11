import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { CONTACT_PHONE, CONTACT_EMAIL, OFFICE_ADDRESS, WHATSAPP_NUMBER } from "@/lib/constants"

const INFO = [
  {
    icon: Phone,
    label: "Call Us",
    value: CONTACT_PHONE,
    sub: "Mon – Sat: 9AM to 7PM",
    href: `tel:${CONTACT_PHONE}`,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: CONTACT_EMAIL,
    sub: "We reply within 24 hours",
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: MapPin,
    label: "Office Location",
    value: OFFICE_ADDRESS,
    sub: "Visit us by appointment",
    href: null,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 9AM – 7PM",
    sub: "Sunday: Closed",
    href: null,
  },
]

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-5">
      {INFO.map((item) => (
        <div
          key={item.label}
          className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-offwhite dark:bg-gray-900"
        >
          <div className="w-10 h-10 rounded-xl bg-primary-light dark:bg-primary/20 flex items-center justify-center shrink-0">
            <item.icon size={18} className="text-primary" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary transition-colors"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {item.value}
              </p>
            )}
            <p className="text-xs text-primary mt-0.5">{item.sub}</p>
          </div>
        </div>
      ))}

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 bg-accent hover:bg-primary text-white font-medium px-6 rounded-xl transition-colors duration-200 text-sm"
      >
        <div className="flex items-center gap-2 mt-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span>Chat on WhatsApp</span>
        </div>
        <span className="text-xs text-white/70 mb-2">Typical reply under 30 mins</span>
      </a>

      {/* Map embed */}
      <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 h-48">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d476266.1197718207!2d72.822286!3d21.1592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0024968077%3A0x5f1c32751e9c4b5c!2sVisa%20Way%20by%20Jasmin%20Patel!5e0!3m2!1sen!2sus!4v1773227463268!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Visa Way Office Location"
        />
      </div>
    </div>
  )
}