"use client"

import { useState } from "react"
import { Phone, Mail } from "lucide-react"
import { CONTACT_PHONE, CONTACT_EMAIL } from "@/lib/constants"

const COUNTRIES = ["Australia", "Canada", "UK", "USA", "New Zealand", "Germany", "Other"]

export default function QuickEnquiryForm() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", country: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Wire to Supabase in backend sprint
    console.log("Enquiry submitted:", form)
    alert("Thank you! We'll get back to you within 24 hours.")
  }

  return (
    <section className="py-16 md:py-20 bg-offwhite dark:bg-gray-900">
      <div className="container-custom">
        <div className="rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-xl">

          {/* Left — Info */}
          <div className="bg-dark p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
                Quick Enquiry
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Fill in the details and we'll get back to you within 24 hours.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4">
              <a href={`tel:${CONTACT_PHONE}`} className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors text-sm">
                <Phone size={16} className="text-primary" />
                {CONTACT_PHONE}
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors text-sm">
                <Mail size={16} className="text-primary" />
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white dark:bg-gray-950 p-8 md:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" autoComplete="off">
              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-offwhite dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-offwhite dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-offwhite dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Interested Country</label>
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-offwhite dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-sm focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select a country</option>
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn-primary w-full mt-2">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}