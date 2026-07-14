import type { Metadata } from "next";
import { Baloo_2, Anton, Public_Sans } from "next/font/google";
import "./globals.css";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: "800",
  variable: "--font-baloo",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akshat Somani — Product Manager",
  description:
    "Product Manager building things at the intersection of broken & fun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${baloo2.variable} ${anton.variable} ${publicSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
