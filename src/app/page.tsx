import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import AcademySection from "@/components/AcademySection";
import ContentHub from "@/components/ContentHub";
import QuizCTA from "@/components/QuizCTA";
import { getLatestVideos } from "@/lib/youtube";
import { getLatestArticles } from "@/lib/substack";

export default async function Home() {
  const [{ longForm }, articles] = await Promise.all([
    getLatestVideos(50),
    getLatestArticles(3),
  ]);

  return (
    <>
      <Hero />
      <AboutSection />
      <AcademySection />
      <ContentHub articles={articles} videos={longForm.slice(0, 3)} />
      <QuizCTA />
    </>
  );
}
