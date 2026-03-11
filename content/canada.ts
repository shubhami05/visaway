import type { DestinationData } from "./australia"

export const canada: DestinationData = {
  name: "Canada",
  slug: "canada",
  tagline: "World-class education with flexible post-study work permits and clear immigration pathways to permanent residency.",
  heroImage: "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg",

  overview: {
    intro: "Canada consistently ranks among the top destinations for international students. With affordable tuition compared to the US, a welcoming immigration policy, and strong job markets in tech, healthcare, and engineering, it is a top choice for students seeking long-term opportunities.",
    highlights: [
      { title: "PR Pathway",           description: "One of the clearest routes to permanent residency for graduates." },
      { title: "Affordable Tuition",   description: "Lower tuition than the US and UK with equally strong degrees." },
      { title: "Safe and Inclusive",   description: "Consistently ranked among the safest countries for students." },
      { title: "Work While Studying",  description: "Up to 24 hours per week off-campus during academic sessions." },
    ],
  },

  quickFacts: {
    currency:    "CAD (C$)",
    majorCities: "Toronto, Vancouver, Montreal",
    intakes:     "Jan, May and Sep",
    avgSalary:   "CAD $55k – $85k",
  },

  courses: [
    { title: "Information Technology",  sub: "Software Dev, Cybersecurity and AI" },
    { title: "Business and Management", sub: "MBA, HR and Supply Chain" },
    { title: "Healthcare",              sub: "Nursing, Pharmacy and Public Health" },
    { title: "Engineering",             sub: "Mechanical, Civil and Environmental" },
    { title: "Data Science",            sub: "Analytics, ML and Statistics" },
    { title: "Hospitality",             sub: "Hotel Management and Tourism" },
  ],

  costs: {
    tuitionMin:  15000,
    tuitionMax:  35000,
    tuitionNote: "Per year. Estimated range for Bachelor/Master programs.",
    livingMin:   15000,
    livingNote:  "Approximate annual living cost depending on city. Toronto and Vancouver are higher.",
    currency:    "CAD",
  },

  workRights: {
    partTime:  "International students with a valid study permit can work up to 24 hours per week off-campus during academic sessions and full-time during scheduled breaks.",
    postStudy: "The Post-Graduation Work Permit (PGWP) allows graduates to work in Canada for up to 3 years, depending on the length of their program. This is a key step toward permanent residency.",
  },

  visaBasics: {
    subclass: "Study Permit",
    requirements: [
      "Acceptance letter from a Designated Learning Institution (DLI)",
      "Proof of sufficient funds for tuition and living",
      "Valid passport",
      "English or French proficiency (IELTS, TOEFL, TEF)",
      "Statement of Purpose (SOP)",
      "Medical exam and police clearance (if required)",
    ],
  },
}