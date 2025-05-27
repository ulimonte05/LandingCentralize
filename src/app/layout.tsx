import React from 'react';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  title: 'Centralize | Agentes de IA Humanizados para Automatización',
  description: 'Centralize ofrece agentes de IA humanizados, seguimientos inteligentes, campañas masivas, métricas personalizadas y CRM avanzado para WhatsApp, Instagram, Facebook y Telegram.',
  keywords: 'agentes IA, automatización, CRM, WhatsApp, Instagram, Facebook, Telegram, métricas, campañas masivas',
  authors: [{ name: 'Centralize' }],
  creator: 'Centralize',
  publisher: 'Centralize',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://centralize.dev'),
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/es',
    },
  },
  openGraph: {
    title: 'Centralize | Agentes de IA',
    description: 'Automatiza tu negocio con agentes de IA humanizados. Soluciones para WhatsApp, Instagram, Facebook y Telegram.',
    url: 'https://centralize.dev',
    siteName: 'Centralize',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Centralize - Agentes de IA Humanizados',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centralize | Agentes de IA Humanizados',
    description: 'Automatiza tu negocio con agentes de IA humanizados. Soluciones para WhatsApp, Instagram, Facebook y Telegram.',
    images: ['/twitter-image.jpg'],
    creator: '@centralize',
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
      { url: '/logo.ico', type: 'image/x-icon' },
      { url: '/logo.ico', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/logo.ico' },
    ],
  },
  manifest: '/manifest.json',
  themeColor: '#2272ff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="google-site-verification" content="tu-codigo-de-verificacion" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <script id="dhws-errorTracker" src="/dhws-error-tracker.js" defer></script>
        <script id="dhws-elementInspector" src="/dhws-web-inspector.js" defer></script>
      </body>
    </html>
  );
}
