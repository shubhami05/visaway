"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="w-9 h-9" />

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200",
        "text-gray-500 hover:text-primary hover:bg-primary-light",
        "dark:text-gray-400 dark:hover:text-primary dark:hover:bg-primary/20",
        className
      )}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}