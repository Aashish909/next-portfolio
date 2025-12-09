import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aashish Kumar | Portfolio",
  description: "Modern full-stack portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
