export interface SubstackArticle {
  title: string;
  url: string;
  date: string;
  excerpt: string;
}

export async function getLatestArticles(count = 3): Promise<SubstackArticle[]> {
  try {
    const res = await fetch("https://neuralnugget.substack.com/api/v1/posts?limit=" + count, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      // Fallback: try RSS
      return getArticlesFromRSS(count);
    }

    const posts = await res.json();

    return posts.map((post: Record<string, unknown>) => ({
      title: post.title as string,
      url: post.canonical_url as string || `https://neuralnugget.substack.com/p/${post.slug}`,
      date: new Date(post.post_date as string).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      excerpt: (post.subtitle as string) || (post.description as string) || "",
    }));
  } catch {
    return getArticlesFromRSS(count);
  }
}

async function getArticlesFromRSS(count: number): Promise<SubstackArticle[]> {
  try {
    const res = await fetch("https://neuralnugget.substack.com/feed", {
      next: { revalidate: 3600 },
    });
    const xml = await res.text();

    const articles: SubstackArticle[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xml)) !== null && articles.length < count) {
      const item = match[1];
      const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ||
        item.match(/<title>(.*?)<\/title>/)?.[1] || "";
      const link = item.match(/<link>(.*?)<\/link>/)?.[1] || "";
      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || "";
      const desc = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1] ||
        item.match(/<description>(.*?)<\/description>/)?.[1] || "";

      // Strip HTML from description
      const excerpt = desc.replace(/<[^>]*>/g, "").slice(0, 160);

      articles.push({
        title,
        url: link,
        date: pubDate
          ? new Date(pubDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          : "",
        excerpt,
      });
    }

    return articles;
  } catch {
    return [];
  }
}
