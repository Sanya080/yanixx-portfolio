import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'yanixx.ip — Web3, Memes & Content',
  description:
    'Personal portfolio of yanixx.ip. Content creator, meme strategist, and Web3 community builder.',
  metadataBase: new URL('https://yanixx-portfolio.vercel.app'),
  openGraph: {
    title: 'yanixx.ip — Web3, Memes & Content',
    description: 'Content creator, meme strategist, and Web3 community builder.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'yanixx.ip',
    description: 'Web3, Memes & Content',
    creator: '@AnikSanya',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
