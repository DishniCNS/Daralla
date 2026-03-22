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
    "Daralla is a futuristic digital studio crafting immersive websites and visual experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${syne.variable} bg-slate-950 antialiased`}
      >
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(76,105,255,0.16),_transparent_28%),radial-gradient(circle_at_bottom,_rgba(29,205,159,0.1),_transparent_24%),linear-gradient(180deg,_#020617,_#02030a_50%,_#020617)] text-white">
          <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.08]" />
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
