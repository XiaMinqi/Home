import type { Metadata } from "next";
import "./globals.css";

const assetPath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const canonicalUrl = "https://xiaminqi.github.io/Home/";

const profileStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${canonicalUrl}#profile`,
  url: canonicalUrl,
  name: "Minqi Xia",
  inLanguage: ["en", "zh-CN"],
  mainEntity: {
    "@type": "Person",
    "@id": `${canonicalUrl}#person`,
    name: "Minqi Xia",
    alternateName: ["XiaMinqi", "夏旻祺"],
    url: canonicalUrl,
    jobTitle: "Data Scientist",
    worksFor: {
      "@type": "Organization",
      name: "Procter & Gamble",
    },
    sameAs: ["https://github.com/Xia-Minqi"],
  },
};

export const metadata: Metadata = {
  title: "Minqi Xia",
  description:
    "Minqi Xia (夏旻祺) is a data scientist at P&G working across physical science, computational chemistry, scientific software, and AI. Also known online as XiaMinqi.",
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Minqi Xia",
    description:
      "Minqi Xia (夏旻祺) is a data scientist at P&G working across physical science, computational chemistry, scientific software, and AI. Also known online as XiaMinqi.",
    url: canonicalUrl,
    siteName: "Minqi Xia",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Minqi Xia",
    description:
      "Minqi Xia (夏旻祺) is a data scientist at P&G working across physical science, computational chemistry, scientific software, and AI. Also known online as XiaMinqi.",
  },
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
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profileStructuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
