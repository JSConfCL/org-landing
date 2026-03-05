import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MuiRootProvider from '@/providers/MuiRootProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JavaScript Chile | Comunidad de Desarrolladores',
  description:
    'Somos una comunidad de desarrolladores apasionados por la tecnología. Organizamos meetups, workshops e iniciativas para compartir conocimiento, conectar profesionales y construir el futuro del desarrollo en Chile.',
  metadataBase: 'https://jschile.org/',
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'JavaScript Chile | Comunidad de Desarrolladores',
    description:
      'Somos una comunidad de desarrolladores apasionados por la tecnología. Organizamos meetups, workshops e iniciativas para compartir conocimiento, conectar profesionales y construir el futuro del desarrollo en Chile.',
    url: 'https://jschile.org/',
    siteName: 'JavaScript Chile',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'JavaScript Chile',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <MuiRootProvider>{children}</MuiRootProvider>
      </body>
    </html>
  );
}
