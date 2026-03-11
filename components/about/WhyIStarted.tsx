export default function WhyIStarted() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-950">
      <div className="container-custom max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-0.5 bg-primary rounded-full" />
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white">
            Why I Started This Consultancy
          </h2>
        </div>
        <div className="bg-offwhite dark:bg-gray-900 rounded-2xl p-8 md:p-10 border border-gray-100 dark:border-gray-800 flex flex-col gap-5 text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            The inspiration for Visa Way didn't come from a business plan — it
            came from a realization. While working within large institutions, I
            saw how easily individual dreams could be reduced to mere
            statistics. Students were often lost in a sea of generic,
            "one-size-fits-all" advice.
          </p>
          <p>
            I saw brilliant minds discouraged by bureaucratic hurdles and
            talented individuals feeling unseen. I knew there had to be a
            better way — a more{" "}
            <span className="text-primary font-medium">
              human-centered approach
            </span>{" "}
            to academic planning.
          </p>
          <p>
            I started this consultancy to provide that missing link:
            personalized, high-touch guidance where every student feels heard,
            supported, and empowered to navigate their own unique path with
            confidence.
          </p>
        </div>
      </div>
    </section>
  )
}