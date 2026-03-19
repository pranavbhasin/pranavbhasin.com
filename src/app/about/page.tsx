import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Pranav Bhasin",
  description:
    "Learn about Pranav Bhasin's mission to help professionals build defensible careers in the age of AI.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
            <Image
              src="/images/headshot.jpg"
              alt="Pranav Bhasin"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">
              About
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Pranav Bhasin
            </h1>
            <p className="text-lg text-body leading-relaxed">
              AI Leadership &amp; Career Strategist helping mid-to-senior
              professionals and executives build defensible careers and lead
              effectively in an AI-driven world.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-6 text-body leading-relaxed">
            <p>
              The world of work is undergoing its most significant transformation
              in decades. AI isn&apos;t just changing tools — it&apos;s rewriting
              the rules of career success. Most professionals sense the shift but
              lack a clear strategy to navigate it.
            </p>
            <p>
              That&apos;s where I come in. Drawing from deep expertise across AI,
              product strategy, and executive leadership, I&apos;ve built
              frameworks that help professionals at every level — from senior
              individual contributors to C-suite executives — understand where
              they stand, where they need to go, and how to get there.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
              What I Do
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
              {[
                {
                  title: "Future Proof Academy",
                  desc: "Cohort-based and self-paced courses that give you the frameworks, skills, and confidence to lead in the AI era.",
                  href: "/academy",
                },
                {
                  title: "Newsletter",
                  desc: "Weekly insights on AI leadership, career strategy, and navigating professional disruption.",
                  href: "/newsletter",
                },
                {
                  title: "YouTube",
                  desc: "In-depth videos breaking down AI trends, career frameworks, and leadership strategies for the modern professional.",
                  href: "/videos",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="border border-gray-200 rounded-lg p-6 hover:border-gold/50 hover:shadow-md transition-all group"
                >
                  <h3 className="font-bold text-navy mb-2 group-hover:text-navy-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-body">{item.desc}</p>
                </Link>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
              My Mission
            </h2>
            <p>
              I believe that the professionals who thrive in the AI era won&apos;t
              be the ones who learn the most tools — they&apos;ll be the ones who
              develop the most defensible combination of skills, domain expertise,
              and leadership capabilities. My mission is to equip you with exactly
              that.
            </p>

            <div className="bg-navy rounded-xl p-8 text-center mt-10 not-prose">
              <h3 className="text-xl font-bold text-white mb-3">
                Ready to future-proof your career?
              </h3>
              <p className="text-white/70 mb-6">
                Start with the free career assessment or explore the Academy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/tools/career-assessment"
                  className="bg-gold hover:bg-gold-dark text-navy font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Take the Career Quiz
                </Link>
                <Link
                  href="/academy"
                  className="border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
