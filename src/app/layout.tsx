import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.APP_TITLE || "Personal Website",
  description: process.env.APP_DESCRIPTION || "My Personal Website",
  keywords: process.env.APP_METADATA_KEYWORDS,
  authors: [{ name: process.env.APP_AUTHOR, url: process.env.APP_URL }],
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#ffffff",
  openGraph: {
    title: process.env.APP_TITLE || "Personal Website",
    description: process.env.APP_DESCRIPTION || "My Personal Website",
    url: process.env.APP_URL,
    type: "website",
    images: [
      {
        url: "/images/about.png",
        width: 1200,
        height: 630,
        alt: process.env.APP_TITLE,
      },
    ],
    siteName: process.env.APP_METADATA_OPENGRAPH_SITENAME,
  },
  robots: "index, follow",
  alternates: {
    canonical: process.env.APP_URL,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
        <link rel="icon" href="/favicon.ico" />
        {/* Include the Devicons CSS */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
