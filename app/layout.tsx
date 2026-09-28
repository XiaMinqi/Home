import type { Metadata } from "next";
import "./globals.css";

const assetPath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Minqi Xia",
  description:
    "Minqi Xia is a data scientist at P&G working across physical science, computational chemistry, scientific software, and AI.",
  icons: {
    icon: `${assetPath}/favicon-portrait.png`,
    shortcut: `${assetPath}/favicon-portrait.png`,
    apple: `${assetPath}/favicon-portrait.png`,
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
