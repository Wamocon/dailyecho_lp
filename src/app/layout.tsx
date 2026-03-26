import type { Metadata } from 'next';
import { DM_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'DailyEcho | 3 Minuten gegen den digitalen Lärm',
  description: 'Die warme, persönliche Check-in-App für morgendliche Intentionen und abendliche Reflexion. 100% lokal, zero Data Mining.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Wir lassen den "dark" className weg - die Seite rendert im wunderschönen Light Mode
    <html lang="de" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${ibmPlexMono.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}