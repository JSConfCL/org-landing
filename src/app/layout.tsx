import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MuiRootProvider from '@/providers/MuiRootProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JavaScript Chile | Comunidad de Desarrolladores',
  description:
    'Somos una comunidad de desarrolladores apasionados por la tecnología en Chile.',
  icons: {
    icon: '/icon.png',
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
