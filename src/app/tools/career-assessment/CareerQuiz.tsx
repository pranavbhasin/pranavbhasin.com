"use client";

import { useState } from "react";
import Link from "next/link";

interface Question {
  id: string;
  category: string;
  text: string;
  options: { label: string; score: number }[];
}

const questions: Question[] = [
  {
    id: "q1",
    category: "Technical Adaptability",
    text: "How often do you work with or leverage AI tools in your current role?",
    options: [
      { label: "Daily — AI is integrated into my workflow", score: 4 },
      { label: "Weekly — I use AI tools for specific tasks", score: 3 },
      { label: "Occasionally — I've experimented but it's not regular", score: 2 },
      { label: "Rarely or never", score: 1 },
    ],
  },
  {
    id: "q2",
    category: "Cross-Domain Expertise",
    text: "How many distinct professional domains can you operate in effectively?",
    options: [
      { label: "3+ domains — I bridge technology, business, and another area", score: 4 },
      { label: "2 domains — I'm strong in my core plus one adjacent area", score: 3 },
      { label: "Primarily one domain with some adjacent knowledge", score: 2 },
      { label: "I'm a deep specialist in one area", score: 1 },
    ],
  },
  {
    id: "q3",
    category: "Strategic Positioning",
    text: "How confident are you that your core skills will be more valuable (not less) in 3 years?",
    options: [
      { label: "Very confident — my skills compound with AI, not compete with it", score: 4 },
      { label: "Somewhat confident — most of what I do is hard to automate", score: 3 },
      { label: "Uncertain — parts of my role are already being automated", score: 2 },
      { label: "Concerned — AI is encroaching on my core competencies", score: 1 },
    ],
  },
  {
    id: "q4",
    category: "Leadership Readiness",
    text: "Have you led or been involved in an AI-related initiative at your organization?",
    options: [
      { label: "Yes — I've led or championed AI initiatives", score: 4 },
      { label: "Yes — I've contributed to AI projects as a team member", score: 3 },
      { label: "I've observed but not directly participated", score: 2 },
      { label: "No — AI isn't part of my current scope", score: 1 },
    ],
  },
  {
    id: "q5",
    category: "Network & Influence",
    text: "How strong is your professional network when it comes to AI and emerging trends?",
    options: [
      { label: "Very strong — I'm connected to AI leaders and practitioners", score: 4 },
      { label: "Growing — I'm actively building connections in this space", score: 3 },
      { label: "Limited — my network is mostly in my current domain", score: 2 },
      { label: "Minimal — I haven't focused on this", score: 1 },
    ],
  },
  {
    id: "q6",
    category: "Learning Velocity",
    text: "How would you describe your approach to continuous learning?",
    options: [
      { label: "Structured and consistent — I invest weekly in learning", score: 4 },
      { label: "Active — I learn when something catches my interest", score: 3 },
      { label: "Reactive — I learn when my role demands it", score: 2 },
      { label: "Minimal — I haven't prioritized learning recently", score: 1 },
    ],
  },
  {
    id: "q7",
    category: "Value Stack Clarity",
    text: "How well can you articulate what makes you uniquely valuable in your organization?",
    options: [
      { label: "Crystal clear — I know my unique combination of value and can articulate it", score: 4 },
      { label: "Pretty clear — I know my strengths but haven't formalized it", score: 3 },
      { label: "Somewhat — I have a general sense but it's fuzzy", score: 2 },
      { label: "Not clear — I'd struggle to explain what makes me uniquely valuable", score: 1 },
    ],
  },
];

interface Result {
  tier: string;
  title: string;
  description: string;
  recommendations: string[];
  color: string;
}

function getResult(score: number): Result {
  const percentage = (score / (questions.length * 4)) * 100;

  if (percentage >= 80) {
    return {
      tier: "Future-Proof Leader",
      title: "You're ahead of the curve",
      description:
        "You have a strong foundation for thriving in the AI era. Your combination of technical adaptability, cross-domain expertise, and strategic positioning puts you in an excellent position to lead.",
      recommendations: [
        "Consider the AI Leadership course to formalize and amplify your advantage",
        "Help others in your organization navigate the AI transition",
        "Build thought leadership around your unique cross-domain expertise",
        "Subscribe to the newsletter for cutting-edge frameworks",
      ],
      color: "text-green-600",
    };
  } else if (percentage >= 60) {
    return {
      tier: "Strong Foundation",
      title: "You're on the right track",
      description:
        "You have solid fundamentals but there are specific areas where strategic investment will significantly strengthen your position. The gap between where you are and where you could be is very closeable.",
      recommendations: [
        "Focus on building cross-domain expertise — this is your biggest leverage point",
        "Start leading or participating in AI initiatives at work",
        "The Career Move course would help you identify and close your specific gaps",
        "Subscribe to the newsletter for weekly actionable insights",
      ],
      color: "text-gold",
    };
  } else if (percentage >= 40) {
    return {
      tier: "At a Crossroads",
      title: "Time for strategic action",
      description:
        "You're at a critical inflection point. The good news: awareness is the first step, and you're here. The urgency is real — but with the right strategy, you can rapidly build a defensible career position.",
      recommendations: [
        "The Career Move course is designed exactly for your situation",
        "Start integrating AI tools into your daily workflow immediately",
        "Map your Value Stack to identify your unique combination of value",
        "Book a 1:1 advisory session for personalized guidance",
      ],
      color: "text-orange-500",
    };
  } else {
    return {
      tier: "Urgent Attention Needed",
      title: "Act now to protect your career",
      description:
        "Your career is significantly exposed to AI disruption. This isn't about panic — it's about recognizing that strategic action now will determine your trajectory for years to come. The frameworks and programs below are designed for exactly this situation.",
      recommendations: [
        "Start with the Career Move course — it will give you an immediate action plan",
        "Book a 1:1 advisory session for personalized strategy",
        "Begin learning AI fundamentals and integrating tools into your work",
        "Subscribe to the newsletter to start building your knowledge base",
      ],
      color: "text-red-500",
    };
  }
}

interface LeadInfo {
  name: string;
  email: string;
  role: string;
  yearsOfExperience: string;
}

const QUIZ_ID = "career-futureproof-v1";
const QUIZ_NAME = "How Future-Proof Is Your Career?";

export default function CareerQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [leadInfo, setLeadInfo] = useState<LeadInfo>({
    name: "",
    email: "",
    role: "",
    yearsOfExperience: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadError, setLeadError] = useState("");

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const result = getResult(totalScore);
  const progress = ((currentQuestion) / questions.length) * 100;

  function handleAnswer(questionId: string, score: number) {
    const newAnswers = { ...answers, [questionId]: score };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setShowLeadCapture(true), 300);
    }
  }

  async function handleLeadSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLeadError("");
    setIsSubmitting(true);

    try {
      const scorePercentage = Math.round((totalScore / (questions.length * 4)) * 100);
      const res = await fetch("/api/quiz-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...leadInfo,
          quizId: QUIZ_ID,
          quizName: QUIZ_NAME,
          score: scorePercentage,
          tier: getResult(totalScore).tier,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setShowResults(true);
    } catch {
      setLeadError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function restart() {
    setCurrentQuestion(0);
    setAnswers({});
    setShowLeadCapture(false);
    setShowResults(false);
    setLeadInfo({ name: "", email: "", role: "", yearsOfExperience: "" });
    setLeadError("");
  }

  // Lead capture form (shown after quiz, before results)
  if (showLeadCapture && !showResults) {
    return (
      <div>
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
            <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Assessment Complete
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Your results are ready
          </h1>
          <p className="text-body text-lg max-w-md mx-auto">
            Enter your details below to see your Future-Proof Score and personalized recommendations.
          </p>
        </div>

        <form onSubmit={handleLeadSubmit} className="max-w-md mx-auto space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1.5">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your full name"
              value={leadInfo.name}
              onChange={(e) => setLeadInfo({ ...leadInfo, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors text-navy placeholder:text-gray-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@company.com"
              value={leadInfo.email}
              onChange={(e) => setLeadInfo({ ...leadInfo, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors text-navy placeholder:text-gray-400"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-semibold text-navy mb-1.5">
              Current Role
            </label>
            <input
              id="role"
              type="text"
              required
              placeholder="e.g. VP of Product, Senior Engineer"
              value={leadInfo.role}
              onChange={(e) => setLeadInfo({ ...leadInfo, role: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors text-navy placeholder:text-gray-400"
            />
          </div>

          <div>
            <label htmlFor="experience" className="block text-sm font-semibold text-navy mb-1.5">
              Years of Experience
            </label>
            <select
              id="experience"
              required
              value={leadInfo.yearsOfExperience}
              onChange={(e) => setLeadInfo({ ...leadInfo, yearsOfExperience: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors text-navy bg-white"
            >
              <option value="" disabled>Select range</option>
              <option value="0-3">0–3 years</option>
              <option value="4-7">4–7 years</option>
              <option value="8-12">8–12 years</option>
              <option value="13-20">13–20 years</option>
              <option value="20+">20+ years</option>
            </select>
          </div>

          {leadError && (
            <p className="text-red-500 text-sm text-center">{leadError}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold py-3.5 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            {isSubmitting ? "Loading..." : "See My Results →"}
          </button>

          <p className="text-xs text-body/50 text-center">
            Your information is kept private and never shared with third parties.
          </p>
        </form>
      </div>
    );
  }

  if (showResults) {
    const scorePercentage = Math.round((totalScore / (questions.length * 4)) * 100);

    return (
      <div>
        <div className="text-center mb-10">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Your Results
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">
            {result.title}
          </h1>
          <p className={`text-xl font-bold ${result.color}`}>
            {result.tier}
          </p>
        </div>

        {/* Score visual */}
        <div className="bg-off-white rounded-2xl p-8 mb-8 text-center">
          <div className="text-6xl font-extrabold text-navy mb-2">
            {scorePercentage}%
          </div>
          <p className="text-body">Future-Proof Score</p>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-4 max-w-xs mx-auto">
            <div
              className="bg-gold rounded-full h-3 transition-all duration-1000"
              style={{ width: `${scorePercentage}%` }}
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-body text-lg leading-relaxed mb-8">
          {result.description}
        </p>

        {/* Recommendations */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-navy mb-4">
            Recommended next steps:
          </h3>
          <ul className="space-y-3">
            {result.recommendations.map((rec, i) => (
              <li key={i} className="flex gap-3">
                <span className="bg-gold text-navy w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-body">{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="bg-navy rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">
            Ready to take action?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/academy"
              className="bg-gold hover:bg-gold-dark text-navy font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Explore Courses
            </Link>
            <Link
              href="/book"
              className="border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Book a 1:1 Session
            </Link>
          </div>
        </div>

        <button
          onClick={restart}
          className="mt-6 text-body/60 hover:text-navy text-sm font-medium transition-colors mx-auto block"
        >
          Retake the assessment
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
          Career Assessment
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          How Future-Proof Is Your Career?
        </h1>
        <p className="text-body text-lg max-w-xl mx-auto">
          Answer {questions.length} questions to discover where you stand and get
          a personalized roadmap for the AI era.
        </p>
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-body/60 mb-2">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span className="text-xs font-medium uppercase tracking-wider text-gold">
            {question.category}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gold rounded-full h-2 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-navy mb-6">
          {question.text}
        </h2>
        <div className="space-y-3">
          {question.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(question.id, option.score)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all
                ${
                  answers[question.id] === option.score
                    ? "border-gold bg-gold/5"
                    : "border-gray-200 hover:border-gold/50 hover:bg-off-white"
                }
              `}
            >
              <span className="text-body font-medium">{option.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      {currentQuestion > 0 && (
        <button
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
          className="text-body/60 hover:text-navy text-sm font-medium transition-colors"
        >
          &larr; Previous question
        </button>
      )}
    </div>
  );
}
