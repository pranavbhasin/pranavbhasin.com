import Link from "next/link";

const courses = [
  {
    title: "Make The Career Move AI Can't Automate",
    format: "Cohort-Based",
    description:
      "A structured program to identify your unique value stack, build AI-proof skills, and make a strategic career move that positions you ahead of automation.",
    cta: "Learn More",
    href: "/academy",
    available: true,
  },
  {
    title: "Build Cross-Domain Expertise To Transform Into An AI Leader",
    format: "Cohort-Based",
    description:
      "Go beyond technical skills. Learn to bridge domains, lead cross-functional AI initiatives, and position yourself as the executive who drives AI transformation.",
    cta: "Learn More",
    href: "/academy",
    available: true,
  },
];

export default function AcademySection() {
  return (
    <section id="academy" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Future Proof Academy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Executive courses for the AI era
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Structured programs designed for mid-to-senior professionals ready
            to take control of their career trajectory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {courses.map((course, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-8 hover:border-gold/50 hover:shadow-lg transition-all group"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-gold bg-gold/10 px-3 py-1 rounded-full mb-4">
                {course.format}
              </span>
              <h3 className="text-xl font-bold text-navy mb-3 leading-snug group-hover:text-navy-light transition-colors">
                {course.title}
              </h3>
              <p className="text-body text-sm leading-relaxed mb-6">
                {course.description}
              </p>
              <Link
                href={course.href}
                className="bg-navy hover:bg-navy-light text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                {course.cta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
