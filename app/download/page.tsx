import { Metadata } from "next";
import React from 'react';
import AppDownloadPage from '@/components/download/Download';

// Implementing SEO Meta Data for the Dedicated Landing Page
export const metadata: Metadata = {
  title: "Download Foodies App – Order Food Online Nigeria",
  description: "Download the Foodies app for iOS and Android. Real-time ordering, live inventory, loyalty rewards.",
  keywords: [
    "Foodies app download", 
    "Nigerian food delivery app", 
    "order food online Lagos", 
    "real-time food inventory",
    "table reservation app Nigeria"
  ],
  openGraph: {
    title: "The Future of Nigerian Dining – Download the Foodies App",
    description: "Get ₦2,000 off your first order when you download the Foodies Hot & Spicy app today!",
    images: ["/app-preview-og.jpg"],
    type: "website",
  },
};

const page = () => {
  return (
    <AppDownloadPage />
  );
};

export default page;