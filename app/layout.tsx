import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Providers from "@/components/Providers"
import JsonLd from "@/components/JsonLd"
import ScrollProgress from "@/components/ScrollProgress"
import BackToTop from "@/components/BackToTop"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://mehmetgenc.net"),
  title: {
    default: "Mehmet Genc - Software Engineer",
    template: "%s | Mehmet Genc",
  },
  description:
    "Software Engineer specializing in Java, Spring Boot, Python. Building scalable backend systems and microservices.",
  keywords: [
    "Software Engineer",
    "Java",
    "Spring Boot",
    "Python",
    "Backend Developer",
    "Microservices",
  ],
  authors: [{ name: "Mehmet Genc" }],
  creator: "Mehmet Genc",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mehmetgenc.net",
    siteName: "Mehmet Genc",
    title: "Mehmet Genc - Software Engineer",
    description:
      "Software Engineer specializing in Java, Spring Boot, Python. Building scalable backend systems and microservices.",
    images: [
      {
        url: "/headshot.png",
        width: 325,
        height: 325,
        alt: "Mehmet Genc",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Mehmet Genc - Software Engineer",
    description:
      "Software Engineer specializing in Java, Spring Boot, Python.",
    creator: "@mehmetgencv",
    images: ["/headshot.png"],
  },
  alternates: {
    canonical: "https://mehmetgenc.net",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body suppressHydrationWarning>
        <Providers>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
        </Providers>
        <JsonLd />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
