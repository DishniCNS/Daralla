import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daralla",
  description:
    "Daralla — креативная digital-студия, которая создает сайты, визуальные системы и технологичные презентации для современных брендов.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${spaceGrotesk.variable} ${syne.variable} bg-[#070916] antialiased`}
      >
        <div className="min-h-screen bg-[linear-gradient(180deg,#070916_0%,#0b1031_48%,#05060f_100%)] text-white">
          <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.08)_1px,transparent_1px)] bg-[size:32px_32px] opacity-70" />
          <div className="pointer-events-none fixed inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(129,140,248,0.16),transparent)]" />
          <SiteHeader />
          <main className="relative mx-auto max-w-7xl px-6 pt-12 md:px-10 md:pt-16">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
