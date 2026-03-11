export type EnquiryStatus = "new" | "contacted" | "follow-up" | "converted"

export interface Enquiry {
  id: string
  full_name: string
  phone: string
  email: string
  interested_country: string
  page_source: string
  status: EnquiryStatus
  notes?: string
  created_at: string
}

export interface University {
  id: string
  name: string
  country: string
  city: string
  description: string
  popular_courses: string[]
  tuition_min: number
  tuition_max: number
  intake_months: string[]
  is_visible: boolean
}

export interface Course {
  id: string
  name: string
  level: "Diploma" | "Bachelor" | "Master"
  countries: string[]
  career_outcomes: string
  pr_suitability: "Yes" | "No" | "Depends"
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category?: "Visa" | "Course" | "Country"
  is_visible: boolean
  display_order: number
}

export interface NavLink {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
}

export interface Destination {
  name: string
  slug: string
  tagline: string
  image: string
}