import Link from "next/link"

interface CTABannerProps {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonHref?: string
}

export default function CTABanner({
  title = "Ready to start your journey?",
  subtitle = "Book your first free consultation session with Visa Way today.",
  buttonText = "Book Now",
  buttonHref = "/contact",
}: CTABannerProps) {
  return (
    <div className="bg-primary rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h3 className="text-2xl font-heading font-bold text-white">{title}</h3>
        <p className="text-primary-light mt-1 text-sm">{subtitle}</p>
      </div>
      <Link
        href={buttonHref}
        className="shrink-0 bg-white text-primary hover:bg-primary-light font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
      >
        {buttonText}
      </Link>
    </div>
  )
}