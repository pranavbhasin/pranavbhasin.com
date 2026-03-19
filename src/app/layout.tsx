import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  title: "Future Proof by Pranav Bhasin",
  description:
    "Build a career that thrives in the age of AI. Executive courses, career strategy, and insights for mid-to-senior professionals.",
  keywords: [
    "AI leadership",
    "career strategy",
    "future proof career",
    "executive education",
    "AI career",
    "Pranav Bhasin",
  ],
  openGraph: {
    title: "Future Proof by Pranav Bhasin",
    description:
      "Build a career that thrives in the age of AI. Executive courses, career strategy, and insights for mid-to-senior professionals.",
    url: "https://pranavbhasin.com",
    siteName: "Pranav Bhasin",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
