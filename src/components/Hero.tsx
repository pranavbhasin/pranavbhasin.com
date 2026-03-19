import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              AI Leadership &amp; Career Strategy
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-tight mb-6">
              Build a career that thrives in the age of AI
            </h1>
            <p className="text-lg text-body max-w-xl mb-8 leading-relaxed">
              Helping mid-to-senior professionals and executives build
              defensible careers and lead effectively in an AI-driven world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/academy"
                className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-3.5 rounded-lg text-base transition-colors inline-flex items-center justify-center gap-2"
              >
                Explore the Academy
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/tools/career-assessment"
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-colors inline-flex items-center justify-center"
              >
                Take the Career Quiz
              </Link>
            </div>
          </div>

          {/* Headshot */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/headshot.jpg"
                alt="Pranav Bhasin"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle gold border accent */}
              <div className="absolute inset-0 rounded-2xl ring-4 ring-gold/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
