import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minqi Xia",
  description:
    "Minqi Xia is a data scientist at P&G working across physical science, computational chemistry, scientific software, and AI.",
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
