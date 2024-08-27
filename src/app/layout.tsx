import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || "http://localhost:3000"),
  title: process.env.APP_TITLE || "Personal Website",
  description: process.env.APP_DESCRIPTION || "My Personal Website",
  keywords: process.env.APP_METADATA_KEYWORDS,
  authors: [{ name: process.env.APP_AUTHOR, url: process.env.APP_URL }],
  openGraph: {
    title: process.env.APP_TITLE || "Personal Website",
    description: process.env.APP_DESCRIPTION || "My Personal Website",
    url: process.env.APP_URL,
    type: "website",
    images: [
      {
        url: `${process.env.APP_URL}/images/about.png`,
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
    icon: `${process.env.APP_URL}/favicon.ico`,
    shortcut: `${process.env.APP_URL}/favicon.ico`,
    apple: `${process.env.APP_URL}/favicon.ico`,
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/public/favicon.ico" />
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
