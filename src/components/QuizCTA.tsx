import Link from "next/link";
import Image from "next/image";

export default function QuizCTA() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Mascot */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-32 h-32 md:w-44 md:h-44 relative">
              <Image
                src="/images/mascot.jpg"
                alt="Future Proof mascot"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#D4A33C' }}>
              How Future-Proof Is Your Career?
            </h2>
            <p className="text-white/70 text-lg mb-6 max-w-lg">
              Take the free career assessment to discover where you stand and
              get a personalized roadmap based on the Value Stack framework.
            </p>
            <Link
              href="/tools/career-assessment"
              className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-3.5 rounded-lg text-base transition-colors inline-flex items-center gap-2"
            >
              Take the Assessment
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
