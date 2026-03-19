import Image from "next/image";
import { getLatestVideos } from "@/lib/youtube";
import type { Metadata } from "next";
import type { YouTubeVideo } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Videos — Pranav Bhasin",
  description:
    "Future Proof with Pranav — videos on AI leadership, career strategy, and thriving in the AI era.",
};

function VideoCard({ video }: { video: YouTubeVideo }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-xl overflow-hidden border border-gray-200 hover:border-gold/30 hover:shadow-lg transition-all"
    >
      <div className="relative aspect-video">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-red-600 rounded-full p-3">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs text-body/60 mb-1">{video.date}</p>
        <h3 className="font-semibold text-navy text-sm group-hover:text-navy-light transition-colors line-clamp-2">
          {video.title}
        </h3>
      </div>
    </a>
  );
}

export default async function VideosPage() {
  const { longForm } = await getLatestVideos(50);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Videos
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Future Proof with Pranav
          </h1>
          <p className="text-lg text-body max-w-2xl mx-auto mb-6">
            In-depth videos breaking down AI trends, career frameworks, and
            leadership strategies for the modern professional.
          </p>
          <a
            href="https://www.youtube.com/@future-proof-by-pranav?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe on YouTube
          </a>
        </div>

        {/* Long-form videos */}
        {longForm.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {longForm.map((video, i) => (
              <VideoCard key={i} video={video} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-body/60 mb-4">Loading videos...</p>
            <a
              href="https://www.youtube.com/@future-proof-by-pranav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-dark font-semibold"
            >
              Watch on YouTube
            </a>
          </div>
        )}


        <div className="text-center mt-10">
          <a
            href="https://www.youtube.com/@future-proof-by-pranav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold transition-colors"
          >
            View all videos on YouTube
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
