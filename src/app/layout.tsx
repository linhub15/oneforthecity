import { type Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import clsx from "clsx";
import logo from "@/images/brand/logo.jpg";

import "@/styles/tailwind.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s - One for the City",
    default: "One for the City",
  },
  description:
    "At One for the City we celebrate street dance culture and community. Join us this year June 29-30 in Edmonton, AB.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "h-full bg-white antialiased",
        inter.variable,
        dmSans.variable,
      )}
    >
      <head>
        <meta property="og:url" content="https://oneforthecity.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="One for the City" />
        <meta
          property="og:description"
          content="Open style and breaking crew versus crew battle on June 29-30, 2024 in Edmonton, AB."
        />
        <meta property="og:image" content={logo.src} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="oneforthecity.com" />
        <meta property="twitter:url" content="https://oneforthecity.com" />
        <meta name="twitter:title" content="One for the City" />
        <meta
          name="twitter:description"
          content="Open style and breaking crew versus crew battle on June 29-30, 2024 in Edmonton, AB."
        />
        <meta name="twitter:image" content={logo.src} />
      </head>
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  );
}
