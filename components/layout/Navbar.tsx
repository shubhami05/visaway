"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAV_LINKS } from "@/lib/constants"
import { useMobileMenu } from "@/hooks/useMobileMenu"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import { useScrollPosition } from "@/hooks/useScrollPosition"

export default function Navbar() {
  const pathname  = usePathname()
  const scrolled  = useScrollPosition()
  const { isOpen, toggle, close } = useMobileMenu()

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white dark:bg-gray-950 shadow-sm border-b border-gray-100 dark:border-gray-800"
            : "bg-white dark:bg-gray-950"
        )}
      >
        <div className="container-custom flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" onClick={close} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">VW</span>
            </div>
            <span             className="font-heading font-bold text-xl text-dark dark:text-white">
              Visa Way
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "text-primary bg-primary-light dark:bg-primary/20"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary-light dark:hover:bg-primary/20"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA + Theme Toggle */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Link href="/contact" className="btn-primary text-sm">
              Free Counselling
            </Link>
          </div>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
            onClick={toggle}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-primary-light transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-full bg-white dark:bg-gray-950 shadow-xl flex flex-col transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
          <span className="font-heading font-bold text-lg text-dark dark:text-white">Menu</span>
          <button
            onClick={close}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-primary hover:bg-primary-light dark:hover:bg-primary/20 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col gap-2 px-6 py-8 flex-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className={cn(
                  "px-4 py-4 rounded-xl text-base font-medium transition-colors duration-200",
                  isActive
                    ? "text-primary bg-primary-light dark:bg-primary/20 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-primary-light dark:hover:bg-primary/20"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Drawer CTA */}
        <div className="px-6 py-6 border-t border-gray-100 dark:border-gray-800">
          <Link href="/contact" onClick={close} className="btn-primary w-full text-sm text-center block">
            Free Counselling
          </Link>
        </div>
      </div>
    </>
  )
}