import Link from "next/link";
import SubscribeForm from "@/components/SubscribeForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Future Proof Academy — Pranav Bhasin",
  description:
    "Executive courses for mid-to-senior professionals navigating career strategy in the AI era.",
};

const courses = [
  {
    title: "Make The Career Move AI Can't Automate",
    format: "Cohort-Based",
    platform: "Maven",
    status: "Coming Soon",
    description:
      "A structured program designed for mid-to-senior professionals who want to identify their unique value stack, build AI-proof skills, and make a strategic career move that positions them ahead of automation.",
    outcomes: [
      "Map your unique Value Stack — the combination of skills, domain expertise, and relationships that make you irreplaceable",
      "Identify career moves that compound your advantage rather than expose you to automation risk",
      "Build a concrete 90-day action plan to future-proof your career",
      "Access frameworks used by executives at leading AI companies",
    ],
    idealFor:
      "Mid-to-senior professionals (5-15 years experience) feeling the pressure of AI disruption and ready to take strategic action.",
  },
  {
    title: "Build Cross-Domain Expertise To Transform Into An AI Leader",
    format: "Cohort-Based",
    platform: "Maven",
    status: "Coming Soon",
    description:
      "Go beyond technical skills. Learn to bridge domains, lead cross-functional AI initiatives, and position yourself as the executive who drives AI transformation — not the one displaced by it.",
    outcomes: [
      "Develop the cross-domain fluency that AI leaders need — bridging technology, business, and organizational change",
      "Learn to lead AI initiatives even without a deep technical background",
      "Build your executive presence as an AI-era leader",
      "Create your personal AI leadership roadmap",
    ],
    idealFor:
      "Senior professionals and executives (10+ years experience) who want to lead AI transformation at their organizations.",
  },
];

export default function AcademyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Future Proof Academy
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-navy mb-6">
            Executive courses for the AI era
          </h1>
          <p className="text-lg text-body max-w-2xl mx-auto leading-relaxed">
            Structured programs designed for mid-to-senior professionals ready to
            take control of their career trajectory in an AI-driven world.
          </p>
        </div>

        {/* Courses */}
        <div className="space-y-12">
          {courses.map((course, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl p-8 md:p-10 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold bg-gold/10 px-3 py-1 rounded-full">
                  {course.format}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-navy bg-navy/10 px-3 py-1 rounded-full">
                  {course.platform}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-body bg-gray-100 px-3 py-1 rounded-full">
                  {course.status}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                {course.title}
              </h2>
              <p className="text-body text-lg leading-relaxed mb-6">
                {course.description}
              </p>

              <div className="mb-6">
                <h3 className="font-semibold text-navy mb-3">
                  What you&apos;ll achieve:
                </h3>
                <ul className="space-y-2">
                  {course.outcomes.map((outcome, j) => (
                    <li key={j} className="flex gap-3 text-body">
                      <svg
                        className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-off-white rounded-lg p-4 mb-6">
                <p className="text-sm text-body">
                  <span className="font-semibold text-navy">Ideal for: </span>
                  {course.idealFor}
                </p>
              </div>

              <button
                className="bg-navy hover:bg-navy-light text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2 cursor-default opacity-80"
                disabled
              >
                Enrollment Opening Soon
              </button>
            </div>
          ))}
        </div>

        {/* Notify CTA */}
        <div className="bg-off-white rounded-2xl p-8 md:p-10 text-center mt-12">
          <h3 className="text-2xl font-bold text-navy mb-3">
            Get notified when enrollment opens
          </h3>
          <p className="text-body mb-6 max-w-lg mx-auto">
            Subscribe to the newsletter to be the first to know when courses
            launch — plus get weekly AI career insights.
          </p>
          <SubscribeForm variant="light" />
        </div>

      </div>
    </div>
  );
}
