import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a 1:1 — Pranav Bhasin",
  description:
    "Book a personal advisory session with Pranav Bhasin for AI career strategy and leadership guidance.",
};

export default function BookPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            1:1 Advisory
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Personal Advisory Session
          </h1>
          <p className="text-lg text-body max-w-2xl mx-auto">
            A focused 60-minute session to discuss your career strategy, AI
            leadership trajectory, or any specific challenges you&apos;re facing.
          </p>
        </div>

        {/* Calendly embed */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <iframe
            src="https://calendly.com/pranavbhasin/personal-advisory-session-with-pranav-60-mins-1-1"
            width="100%"
            height="700"
            className="border-0"
            title="Book a session with Pranav Bhasin"
          />
        </div>
      </div>
    </div>
  );
}
