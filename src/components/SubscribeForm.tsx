"use client";

import { useState } from "react";

interface SubscribeFormProps {
  variant?: "light" | "dark";
}

export default function SubscribeForm({ variant = "light" }: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("https://neuralnugget.substack.com/api/v1/free?noRedirect=true", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_url: "https://neuralnugget.substack.com/embed",
          first_referrer: "https://pranavbhasin.com",
          current_url: "https://neuralnugget.substack.com/embed",
          current_referrer: "https://pranavbhasin.com",
          referral_code: "",
          source: "embed",
          email,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const isDark = variant === "dark";

  if (status === "success") {
    return (
      <div className={`text-center py-3 px-4 rounded-lg ${isDark ? "bg-white/10" : "bg-gold/10"}`}>
        <p className={`font-semibold ${isDark ? "text-gold" : "text-navy"}`}>
          You&apos;re subscribed!
        </p>
        <p className={`text-sm mt-1 ${isDark ? "text-white/60" : "text-body/60"}`}>
          Check your inbox to confirm your subscription.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className={`flex-1 px-4 py-3 rounded-lg text-sm outline-none transition-colors ${
          isDark
            ? "bg-white/10 text-white placeholder-white/40 border border-white/20 focus:border-gold"
            : "bg-white text-navy placeholder-body/40 border border-gray-200 focus:border-gold"
        }`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-gold hover:bg-gold-dark text-navy font-semibold px-6 py-3 rounded-lg text-sm transition-colors disabled:opacity-60 whitespace-nowrap"
      >
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </button>
      {status === "error" && (
        <p className={`text-sm ${isDark ? "text-red-300" : "text-red-500"} sm:absolute sm:mt-14`}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
