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
      'es-ES': '/',
    },
  },
  openGraph: {
    title: 'Centralize | Agentes de IA',
    description: 'Automatiza tu negocio con agentes de IA humanizados. Soluciones para WhatsApp, Instagram, Facebook y Telegram.',
    url: 'https://centralize.dev',
    siteName: 'Centralize',
    images: [
      {
        url: './images/logo.png',
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
    images: ['./images/logo.png'],
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
      { url: './images/logo.ico', type: 'image/x-icon' },
      { url: './images/logo.ico', type: 'image/x-icon' },
    ],
    apple: [
      { url: './images/logo.ico' },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
