import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/shared/ThemeProvider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: {
    default: "Visa Way – Study Abroad Guidance You Can Trust",
    template: "%s | Visa Way",
  },
  description:
    "Personal study abroad counselling by Visa Way. Expert guidance on university selection, visa, and career planning for Indian students.",
  metadataBase: new URL("https://visaway.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Visa Way",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}