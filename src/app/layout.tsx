import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Roboto } from 'next/font/google';

import Header from '@/components/Header/Header';
import RespectMotionPreferences from '@/components/RespectMotionPreferences';
import Footer from '@/components/Footer';
import Gradient from '@/components/Gradient';

export const metadata: Metadata = {
  title: 'agamblin.dev',
  description: 'Fullstack Engineer',
  manifest: '/manifest.webmanifest',
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
        className={`${headingFont.variable} ${bodyFont.variable} sm:scroll-smooth`}
      >
        <body className="relative min-h-screen bg-primary-950 font-body text-primary-300">
          <Gradient />
          <div className="absolute mx-auto grid  min-h-screen max-w-screen-xl grid-rows-[min-content_1fr_min-content]  gap-y-24 px-6 py-12  md:px-12 md:py-20 lg:grid-cols-2  lg:grid-rows-[1fr_min-content] lg:px-24 lg:py-0 ">
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </RespectMotionPreferences>
  );
}
