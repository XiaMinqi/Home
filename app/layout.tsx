import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minqi Xia",
  description:
    "Minqi Xia is a scientist and builder working across physical science, computation, and AI.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
