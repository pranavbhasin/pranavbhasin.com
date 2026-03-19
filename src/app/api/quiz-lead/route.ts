import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, role, yearsOfExperience, quizId, quizName, score, tier, timestamp } = body;

    // Validate required fields
    if (!name || !email || !role || !yearsOfExperience) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (webhookUrl) {
      // Post to Google Apps Script webhook
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          role,
          yearsOfExperience,
          quizId: quizId || "unknown",
          quizName: quizName || "Unknown Quiz",
          score,
          tier,
          timestamp: timestamp || new Date().toISOString(),
        }),
      });
    } else {
      // Fallback: log to server console if webhook not configured
      console.log("Quiz lead captured (no webhook configured):", {
        name,
        email,
        role,
        yearsOfExperience,
        quizId: quizId || "unknown",
        quizName: quizName || "Unknown Quiz",
        score,
        tier,
        timestamp: timestamp || new Date().toISOString(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error capturing quiz lead:", error);
    return NextResponse.json(
      { error: "Failed to capture lead" },
      { status: 500 }
    );
  }
}
