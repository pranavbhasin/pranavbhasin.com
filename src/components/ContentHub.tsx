import Link from "next/link";
import Image from "next/image";
import type { YouTubeVideo } from "@/lib/youtube";
import type { SubstackArticle } from "@/lib/substack";

interface ContentHubProps {
  articles: SubstackArticle[];
  videos: YouTubeVideo[];
}

export default function ContentHub({ articles, videos }: ContentHubProps) {
  return (
    <section id="content" className="py-16 md:py-24 bg-off-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Insights
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Latest thinking on AI &amp; careers
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Newsletter / Substack */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24l9.56-5.26L20.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
              </svg>
              <h3 className="text-xl font-bold text-navy">Newsletter</h3>
            </div>
            {articles.length > 0 ? (
              <div className="space-y-4">
                {articles.map((article, i) => (
                  <a
                    key={i}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-lg p-5 border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all group"
                  >
                    <p className="text-xs text-body/60 mb-1">{article.date}</p>
                    <h4 className="font-semibold text-navy group-hover:text-navy-light transition-colors mb-1">
                      {article.title}
                    </h4>
                    <p className="text-sm text-body line-clamp-2">
                      {article.excerpt}
                    </p>
                  </a>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg p-8 border border-gray-100 text-center">
                <p className="text-body/60">Loading latest articles...</p>
              </div>
            )}
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold text-sm mt-4 transition-colors"
            >
              View all articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* YouTube Videos — long form only */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <h3 className="text-xl font-bold text-navy">Videos</h3>
            </div>
            {videos.length > 0 ? (
              <div className="space-y-4">
                {videos.map((video, i) => (
                  <a
                    key={i}
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-4 bg-white rounded-lg p-3 border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all group"
                  >
                    <div className="relative w-40 h-24 flex-shrink-0 rounded-md overflow-hidden">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-body/60 mb-1">{video.date}</p>
                      <h4 className="font-semibold text-navy text-sm group-hover:text-navy-light transition-colors line-clamp-2">
                        {video.title}
                      </h4>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg p-8 border border-gray-100 text-center">
                <p className="text-body/60">Loading latest videos...</p>
              </div>
            )}
            <Link
              href="/videos"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold text-sm mt-4 transition-colors"
            >
              View all videos
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
