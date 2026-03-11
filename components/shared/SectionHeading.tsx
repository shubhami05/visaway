import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  label?: string       // small tag above heading e.g. "OUR SERVICES"
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-10",
      align === "center" ? "text-center" : "text-left",
      className
    )}>
      {label && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}