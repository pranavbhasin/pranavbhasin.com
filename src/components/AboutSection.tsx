import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-off-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            The intersection of AI and career strategy
          </h2>
          <p className="text-body text-lg leading-relaxed mb-6">
            I help professionals navigate the most significant career disruption
            of our generation. With deep expertise across AI, product strategy,
            and executive leadership, I equip mid-to-senior professionals with
            the frameworks, skills, and confidence to not just survive — but lead
            — in an AI-transformed world.
          </p>
          <p className="text-body text-lg leading-relaxed mb-8">
            Through the{" "}
            <Link href="/academy" className="font-semibold text-navy underline decoration-gold/50 hover:decoration-gold transition-colors">Future Proof Academy</Link>,
            my{" "}
            <Link href="/newsletter" className="font-semibold text-navy underline decoration-gold/50 hover:decoration-gold transition-colors">Newsletter</Link>, and{" "}
            <Link href="/videos" className="font-semibold text-navy underline decoration-gold/50 hover:decoration-gold transition-colors">YouTube Channel</Link>, I
            deliver actionable insights that turn AI anxiety into AI advantage.
          </p>
          <Link
            href="/about"
            className="text-gold hover:text-gold-dark font-semibold inline-flex items-center gap-2 transition-colors"
          >
            Learn more about my journey
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
