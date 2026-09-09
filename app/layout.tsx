import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BusinessOS — You pay for the system. The business inside it is yours.",
  description:
    "BusinessOS is a subscription for people who already have a trade. Open a workspace under your name. It starts empty, because it is yours.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans text-ink antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
