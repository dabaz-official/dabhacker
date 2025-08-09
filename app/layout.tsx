import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Hacked_Font from 'next/font/local';

import './globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hacked = Hacked_Font({
  src: './HACKED.ttf',
  variable: '--font-hacked',
});

export const metadata: Metadata = {
  title: "DabAZ",
  description: "Hacker, musician, developer, designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hacked.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
