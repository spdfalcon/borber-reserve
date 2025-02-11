import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const vazir = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | سامانه نوبت‌دهی آرایشگاه',
    default: 'سامانه نوبت‌دهی آرایشگاه - رزرو آنلاین نوبت آرایشگاه'
  },
  description: "رزرو آنلاین و آسان نوبت آرایشگاه در تهران - دسترسی به بهترین آرایشگاه‌های مردانه با امکان مقایسه قیمت و خدمات",
  keywords: ["نوبت آرایشگاه", "رزرو آنلاین آرایشگاه", "آرایشگاه مردانه", "رزرو نوبت آرایشگاه تهران"],
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: 'سامانه نوبت‌دهی آرایشگاه - رزرو آنلاین نوبت',
    description: 'رزرو آنلاین و آسان نوبت آرایشگاه در تهران - دسترسی به بهترین آرایشگاه‌های مردانه',
    siteName: 'سامانه نوبت‌دهی آرایشگاه',
    locale: 'fa_IR',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'سامانه نوبت‌دهی آرایشگاه',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'سامانه نوبت‌دهی آرایشگاه',
    description: 'رزرو آنلاین و آسان نوبت آرایشگاه در تهران',
    images: ['/images/twitter-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
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
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
