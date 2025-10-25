import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { AppEventProvider } from '@/contexts/AppEventContext';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'Persona - AI-Powered Resume Builder & Job Application Tracker',
    template: '%s | Persona',
  },
  description:
    'Transform your job search with Persona. Create targeted, ATS-optimized resumes for each application using AI. Track applications, manage work experience, and land your dream job faster.',
  keywords: [
    'resume builder',
    'AI resume',
    'job application tracker',
    'ATS resume',
    'career tools',
    'job search',
    'professional resume',
    'resume generator',
    'application management',
    'job tracking',
  ],
  authors: [{ name: 'Persona Team' }],
  creator: 'Persona',
  publisher: 'Persona',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Persona',
    title: 'Persona - AI-Powered Resume Builder & Job Application Tracker',
    description:
      'Transform your job search with Persona. Create targeted, ATS-optimized resumes for each application using AI. Track applications, manage work experience, and land your dream job faster.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Persona - AI-Powered Resume Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Persona - AI-Powered Resume Builder & Job Application Tracker',
    description:
      'Create targeted, ATS-optimized resumes for each job application using AI. Track applications and land your dream job faster.',
    images: ['/twitter-image.png'],
    creator: '@persona',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AppEventProvider>
            {children}
            <Toaster position="top-right" />
          </AppEventProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
