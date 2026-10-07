import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M D L U KAVISHKA — Full-Stack Developer",
  description: "Portfolio of M D L U KAVISHKA — full-stack developer, builder and open-source contributor.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


