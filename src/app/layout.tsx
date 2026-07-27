import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CalendlyWidget from "./components/CalendlyButton";
// ! Script  import Script from "next/script"; // Import Script from Next.js
//import CalendlyPopupButton from "./components/CalendlyPopupButton";
import "./globals.css"
import type { Metadata } from "next";
import Script from "next/script";

//import { PopupButton } from "react-calendly";

export const metadata: Metadata = {
  title: "Top Criminal Lawyer in Regina | Seasoned Criminal Defence - Nicholas Robinson",
  description: "Looking for a trusted criminal lawyer in Regina? Nicholas Robinson provides reliable criminal defence for all criminal charges. Call now for a free consultation and protect your rights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TJHK9V8');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        
        {/* Google Tag (gtag.js) */}
        <Script
          async src="https://www.googletagmanager.com/gtag/js?id=G-QWG610QH0W"
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

        gtag('config', 'G-QWG610QH0W');
      `,
    }}
  />
      </head>
      <body id="root">
      {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TJHK9V8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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