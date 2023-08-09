import classNames from "classnames";
import { Noto_Sans_JP, Montserrat  } from "next/font/google";

import "./globals.css";

const noto = Noto_Sans_JP({
 subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
  weight: ["100", "400"],
})

const montserrat = Montserrat({
 subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "700"],
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={classNames(
          montserrat.variable,
          noto.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}