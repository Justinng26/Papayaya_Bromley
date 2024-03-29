// import Icons
import "bootstrap-icons/font/bootstrap-icons.css";

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// import glightbox
import "glightbox/dist/css/glightbox.min.css";

import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import React from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Papayaya, Bromley",
  description:
    "Website for Papayaya, Bromley where you can order food online and book with us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      ></script>
    </html>
  );
}
