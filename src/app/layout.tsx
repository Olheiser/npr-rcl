import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CalendlyWidget from "./components/CalendlyButton";
// ! Script  import Script from "next/script"; // Import Script from Next.js
//import CalendlyPopupButton from "./components/CalendlyPopupButton";
import "./globals.css"
import type { Metadata } from "next";

//import { PopupButton } from "react-calendly";

export const metadata: Metadata = {
  title: "Top Criminal Lawyer in Regina | Expert Criminal Defence - Nicholas Robinson",
  description: "Looking for a trusted criminal lawyer in Regina? Nicholas Robinson provides expert criminal defence for all criminal charges. Call now for a free consultation and protect your rights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag (gtag.js) 
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-653876065"
          strategy="afterInteractive" // Ensures script runs after page load
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive" // Runs after the page becomes interactive
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-653876065');
            `,
          }}
        />*/}
      </head>
      <body id="root">
        <Header />
         {/* <PageHeader title="About" /> */}
        {children}
        <ScrollToTop />
        <CalendlyWidget /> 
        {/* <CalendlyPopupButton />*/}
        <Footer />
      </body>
    </html>
  );
}