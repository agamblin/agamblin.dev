import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Roboto } from 'next/font/google';

import Header from '@/components/Header/Header';
import RespectMotionPreferences from '@/components/RespectMotionPreferences';

export const metadata: Metadata = {
  title: 'agamblin.dev',
  description: 'Fullstack Engineer',
};

const headingFont = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-heading',
});

const bodyFont = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-body',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RespectMotionPreferences>
      <html
        lang="en"
        className={`${headingFont.variable} ${bodyFont.variable}`}
      >
        <body className="bg-primary-950 font-body text-primary-300">
          <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col px-6 md:px-12 lg:flex-row lg:justify-between lg:gap-4 lg:px-24">
            <Header />
            {children}
          </div>
        </body>
      </html>
    </RespectMotionPreferences>
  );
}
