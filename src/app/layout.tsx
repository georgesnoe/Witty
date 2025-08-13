import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${manrope.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

export function generateMetadata(): Metadata {
  return {
    title: "Witty",
    description: "Fun, entertainment and addiction. You want it, you have it.",
  };
}
