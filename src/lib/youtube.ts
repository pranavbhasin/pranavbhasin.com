export interface YouTubeVideo {
  title: string;
  videoId: string;
  thumbnail: string;
  date: string;
  isShort: boolean;
  durationSeconds: number;
}

export interface YouTubeVideos {
  longForm: YouTubeVideo[];
  shorts: YouTubeVideo[];
}

/** Parse ISO 8601 duration (PT1H2M3S) to seconds */
function parseDuration(iso: string): number {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  const h = parseInt(match[1] || "0", 10);
  const m = parseInt(match[2] || "0", 10);
  const s = parseInt(match[3] || "0", 10);
  return h * 3600 + m * 60 + s;
}

export async function getLatestVideos(count = 50): Promise<YouTubeVideos> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelHandle = process.env.YOUTUBE_CHANNEL_HANDLE || "@future-proof-by-pranav";

  if (!apiKey) return { longForm: [], shorts: [] };

  try {
    // Resolve channel handle to channel ID
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${channelHandle}&key=${apiKey}`,
      { next: { revalidate: 3600 } }
    );
    const channelData = await channelRes.json();

    if (!channelData.items?.length) return { longForm: [], shorts: [] };

    const uploadsPlaylistId =
      channelData.items[0].contentDetails.relatedPlaylists.uploads;

    // Fetch latest videos from uploads playlist
    const videosRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${count}&key=${apiKey}`,
      { next: { revalidate: 3600 } }
    );
    const videosData = await videosRes.json();

    if (!videosData.items?.length) return { longForm: [], shorts: [] };

    // Extract video IDs to fetch durations
    const videoIds = videosData.items
      .map((item: Record<string, unknown>) => {
        const snippet = item.snippet as Record<string, unknown>;
        const resourceId = snippet.resourceId as Record<string, string>;
        return resourceId.videoId;
      })
      .join(",");

    // Fetch video details (duration)
    const detailsRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds}&key=${apiKey}`,
      { next: { revalidate: 3600 } }
    );
    const detailsData = await detailsRes.json();

    // Build duration map
    const durationMap: Record<string, number> = {};
    if (detailsData.items) {
      for (const item of detailsData.items) {
        durationMap[item.id] = parseDuration(item.contentDetails.duration);
      }
    }

    // Map and classify videos
    const allVideos: YouTubeVideo[] = videosData.items.map(
      (item: Record<string, unknown>) => {
        const snippet = item.snippet as Record<string, unknown>;
        const resourceId = snippet.resourceId as Record<string, string>;
        const thumbnails = snippet.thumbnails as Record<string, Record<string, string>>;
        const videoId = resourceId.videoId;
        const durationSeconds = durationMap[videoId] || 0;

        return {
          title: snippet.title as string,
          videoId,
          thumbnail:
            thumbnails.medium?.url ||
            thumbnails.default?.url ||
            "",
          date: new Date(snippet.publishedAt as string).toLocaleDateString(
            "en-US",
            { year: "numeric", month: "short", day: "numeric" }
          ),
          isShort: durationSeconds <= 60,
          durationSeconds,
        };
      }
    );

    return {
      longForm: allVideos.filter((v) => !v.isShort),
      shorts: allVideos.filter((v) => v.isShort),
    };
  } catch (error) {
    console.error("Failed to fetch YouTube videos:", error);
    return { longForm: [], shorts: [] };
  }
}
