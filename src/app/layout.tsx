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
                {/* Meta Pixel Code */}
                <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1762004548074021');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=1762004548074021&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
