import type { Metadata } from "next";
import CareerQuiz from "./CareerQuiz";

export const metadata: Metadata = {
  title: "Career Assessment — How Future-Proof Is Your Career?",
  description:
    "Take the free career assessment to discover where you stand in the AI era and get a personalized roadmap based on the Value Stack framework.",
};

export default function CareerAssessmentPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <CareerQuiz />
      </div>
    </div>
  );
}
