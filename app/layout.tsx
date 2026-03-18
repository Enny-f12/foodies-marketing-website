import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { WhatsAppFloat } from "@/components/home/WhatsappFloat";

const helvena = localFont({
  src: [
    {
      path: "../public/fonts/Helvena-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Helvena-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Helvena-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Helvena-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Helvena-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvena",
  display: "swap",
});

const nord = localFont({
  src: [
    {
      path: "../public/fonts/NORD.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NORD-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nord",
  display: "swap",
});

const pros = localFont({
  src: [
     {
      path: "../public/fonts/PROS.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-pros",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://foodies-hot-spicy.vercel.app"), 
  title: "Foodies Hot & Spicy — Premium Nigerian Restaurant | Lekki & Abuja",
  description:
    "Experience authentic Nigerian cuisine with modern digital convenience. Real-time table reservations, seamless takeaway ordering, live inventory visibility, and exclusive loyalty rewards. Locations in Lekki, Lagos and Maitama, Abuja.",
  keywords: [
    "Nigerian restaurant",
    "Lagos restaurant",
    "Abuja restaurant",
    "digital dining",
    "food delivery",
    "table reservation",
    "jollof rice",
    "Lekki restaurant",
    "Maitama restaurant",
  ],
  openGraph: {
    title: "Foodies Hot & Spicy — Premium Nigerian Restaurant",
    description:
      "Where the vibrant flavors of Nigeria meet world-class digital convenience.",
    siteName: "Foodies Hot & Spicy",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-scroll-behavior="smooth"
      className={`${helvena.variable} ${nord.variable} ${pros.variable}`} 
    >
      <body className="font-sans antialiased selection:bg-primary/20 selection:text-primary">
        <ThemeProvider defaultTheme="light">
          <Navbar />
          {/* Main container to ensure typography flows correctly */}
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppFloat/>
        </ThemeProvider>
      </body>
    </html>
  );
}