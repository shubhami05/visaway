export const australia = {
  name: "Australia",
  slug: "australia",
  tagline: "Experience world-class education, a vibrant lifestyle, and diverse career opportunities in the Land Down Under.",
  heroImage: "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg",

  overview: {
    intro: "Australia is home to 7 of the top 100 universities in the world. Beyond academic excellence, it offers an incredible quality of life, a welcoming multicultural society, and some of the best post-study work opportunities globally.",
    highlights: [
      { title: "Academic Excellence",   description: "Globally recognized degrees and innovative research environments." },
      { title: "Post-Study Work",        description: "Generous post-study work rights for international graduates." },
      { title: "Multicultural Hub",      description: "A safe, inclusive, and diverse community for all students." },
      { title: "Quality of Life",        description: "Stunning natural landscapes and high standard of living." },
    ],
  },

  quickFacts: {
    currency:    "AUD (A$)",
    majorCities: "Sydney, Melbourne, Perth",
    intakes:     "Feb and July",
    avgSalary:   "AUD $65k – $90k",
  },

  courses: [
    { title: "Information Technology",  sub: "Cloud, AI and Software Engineering" },
    { title: "Business and Finance",     sub: "MBA, Accounting and Data Analytics" },
    { title: "Healthcare and Nursing",   sub: "Public Health and Medical Science" },
    { title: "Engineering",             sub: "Civil, Mechanical and Renewable Energy" },
    { title: "Education",               sub: "Teaching, Early Childhood and Training" },
    { title: "Hospitality and Tourism", sub: "Hotel Management and Event Planning" },
  ],

  costs: {
    tuitionMin:     20000,
    tuitionMax:     45000,
    tuitionNote:    "Per year. Estimated range for Bachelor/Master programs.",
    livingMin:      21041,
    livingNote:     "Recommended minimum annual living cost set by the Australian government for visa purposes.",
    currency:       "AUD",
  },

  workRights: {
    partTime:    "International students can work up to 48 hours per fortnight during academic sessions and unlimited hours during scheduled course breaks.",
    postStudy:   "Graduates can stay and work for 2–4 years depending on their qualification under the Temporary Graduate visa (Subclass 485). Regional Australia offers an extra 1–2 years.",
  },

  visaBasics: {
    subclass: "500",
    requirements: [
      "Confirmation of Enrolment (CoE) from a registered provider",
      "Genuine Student (GS) requirement",
      "English Proficiency (IELTS, TOEFL, or PTE)",
      "Overseas Student Health Cover (OSHC)",
      "Proof of sufficient funds",
    ],
  },
}

export type DestinationData = typeof australia