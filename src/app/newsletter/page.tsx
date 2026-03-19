import Link from "next/link";
import { getLatestArticles } from "@/lib/substack";
import SubscribeForm from "@/components/SubscribeForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter — Pranav Bhasin",
  description:
    "Future Proof with Pranav — weekly insights on AI leadership, career strategy, and staying ahead in an AI-driven world.",
};

export default async function NewsletterPage() {
  const articles = await getLatestArticles(20);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Newsletter
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Future Proof with Pranav
          </h1>
          <p className="text-lg text-body max-w-2xl mx-auto mb-8">
            Weekly insights on AI leadership, career strategy, and navigating
            professional disruption in an AI-driven world.
          </p>

          {/* Subscribe embed */}
          <div className="max-w-md mx-auto mb-12">
            <SubscribeForm variant="light" />
          </div>
        </div>

        {/* Articles */}
        {articles.length > 0 ? (
          <div className="space-y-4">
            {articles.map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-xl p-6 border border-gray-200 hover:border-gold/30 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-body/60 mb-1">{article.date}</p>
                    <h3 className="text-lg font-semibold text-navy group-hover:text-navy-light transition-colors mb-2">
                      {article.title}
                    </h3>
                    <p className="text-body text-sm line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-body/40 group-hover:text-gold transition-colors flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-body/60 mb-4">
              Articles are loading from Substack...
            </p>
            <a
              href="https://neuralnugget.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-dark font-semibold"
            >
              Read on Substack directly
            </a>
          </div>
        )}

        <div className="text-center mt-8">
          <a
            href="https://neuralnugget.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold transition-colors"
          >
            View full archive on Substack
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
