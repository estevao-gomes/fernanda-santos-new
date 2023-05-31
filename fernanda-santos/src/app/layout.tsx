import "./globals.css";
import { Analytics } from '@vercel/analytics/react'

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { PT_Sans } from "next/font/google";

config.autoAddCss = false;

const pt_sans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  
});

export const metadata = {
  title: "Prof. Fernanda Santos",
  description: "Professora Fernanda Santos - Aulas de inglês online",
  keywords:
    "english, teaching, education, inglês, aulas online, aulas em grupo, aulas particulares",
  author: "Estevao Gomes",
  icons: {
    icon: "./logo.jpg",
    type: "image/jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pt_sans.className}>{children}</body>
    </html>
  );
}
