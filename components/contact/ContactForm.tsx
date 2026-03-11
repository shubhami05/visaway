"use client"

import { useState } from "react"
import { Send } from "lucide-react"

const COUNTRIES = ["Australia", "Canada", "UK", "USA", "New Zealand", "Germany", "Other"]

type FormState = {
  fullName: string
  email: string
  phone: string
  country: string
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    fullName: "", email: "", phone: "", country: "", message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Wire to Supabase in backend sprint
    console.log("Contact form submitted:", form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <div className="w-16 h-16 rounded-full bg-primary-light dark:bg-primary/20 flex items-center justify-center">
          <Send size={28} className="text-primary" />
        </div>
        <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white">
          Message Sent!
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
          Thank you for reaching out. We will get back to you within 24 hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ fullName: "", email: "", phone: "", country: "", message: "" }) }}
          className="btn-outline text-sm mt-2"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-2">
        Send Us a Message
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-7">
        Fill in your details and we will get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5" autoComplete="off">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
              Full Name <span className="text-primary">*</span>
            </label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Rahul Sharma"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-offwhite dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
              Email Address <span className="text-primary">*</span>
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="rahul@example.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-offwhite dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
              Phone Number <span className="text-primary">*</span>
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-offwhite dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
              Interested Destination
            </label>
            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-offwhite dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-sm focus:outline-none focus:border-primary transition-colors"
            >
              <option value="">Select a country</option>
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
            How can we help?
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your educational goals, current qualifications, and any questions you have..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-offwhite dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
          />
        </div>

        <button type="submit" className="btn-primary flex items-center justify-center gap-2 w-full">
          <Send size={16} />
          Submit Inquiry
        </button>

        <p className="text-xs text-gray-400 text-center">
          By submitting, you agree to be contacted by Visa Way regarding your enquiry.
        </p>
      </form>
    </div>
  )
}