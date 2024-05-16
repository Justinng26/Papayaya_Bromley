/* eslint-disable @next/next/no-sync-scripts */
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
import TopBar from "./components/TopBar";
// import Header from "./components/Header";
// import BackToTopBtn from "./components/BackToTopBtn";
import Footer from "./sections/Footer";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("./components/Header"), {
  ssr: false,
});

const DynamicBackToTopBtn = dynamic(() => import("./components/BackToTopBtn"), {
  ssr: false,
});

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
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
        />
      </Head>
      <body className={playfair.className}>
        <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
        <TopBar />
        <DynamicHeader />

        {children}

        <Footer />
        <DynamicBackToTopBtn />
      </body>
      {/* <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      ></script> */}
    </html>
  );
}
