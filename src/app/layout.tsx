import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MuiRootProvider from '@/providers/MuiRootProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JSChile | Comunidad de Desarrolladores JavaScript en Chile',
  description:
    'JSChile: comunidad de devs en Chile desde 2013. Meetups, workshops y conferencias para conectar, aprender y crecer. +120 eventos, +4.800 asistentes, +200 speakers. ¡Únete gratis!',
  applicationName: 'JSChile',
  keywords: [
    'javascript chile',
    'comunidad desarrolladores chile',
    'meetup javascript santiago',
    'jsconf chile',
    'programación chile',
    'frontend chile',
    'nodejs chile',
    'react chile',
    'developers community',
  ],
  metadataBase: new URL('https://jschile.org'),
  alternates: {
    canonical: 'https://jschile.org/',
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'JSChile | Comunidad de Desarrolladores JavaScript en Chile',
    description:
      'La comunidad de devs JavaScript más grande de Chile. Desde 2013: +120 eventos, +4.800 asistentes, +200 speakers. ¡Únete gratis!',
    url: 'https://jschile.org/',
    siteName: 'JSChile',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: '/assets/OG.png',
        width: 1200,
        height: 630,
        alt: 'JSChile — Comunidad de desarrolladores JavaScript desde 2013',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSChile | Comunidad de Desarrolladores JavaScript en Chile',
    description:
      'La comunidad de devs JavaScript más grande de Chile. Desde 2013: +120 eventos, +4.800 asistentes, +200 speakers. ¡Únete gratis!',
    images: ['/assets/OG.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'JSChile',
  url: 'https://jschile.org',
  logo: 'https://jschile.org/assets/logo-cljs.svg',
  foundingDate: '2013',
  description:
    'Comunidad de desarrolladores JavaScript en Chile. Organizamos meetups, workshops y conferencias desde 2013.',
  sameAs: [
    'https://www.instagram.com/javascriptchile/',
    'https://www.linkedin.com/company/jschile/',
    'https://github.com/jschile',
  ],
  location: {
    '@type': 'Place',
    name: 'Chile',
    address: { '@type': 'PostalAddress', addressCountry: 'CL' },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {/* WCAG AA: skip link — visible solo con foco de teclado via CSS */}
        <style>{`
          .skip-link { position:absolute; top:-40px; left:0; background:#1D1D1D; color:#FFFFFF; padding:8px 16px; z-index:9999; font-weight:700; text-decoration:none; border-radius:0 0 4px 0; }
          .skip-link:focus { top:0; }
        `}</style>
        <a href='#main-content' className='skip-link'>
          Saltar al contenido principal
        </a>
        <MuiRootProvider>{children}</MuiRootProvider>
      </body>
    </html>
  );
}
