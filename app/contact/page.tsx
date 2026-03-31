import { Metadata } from "next";
import React from 'react';
import ContactPage from '@/components/contact/Contact';

export const metadata: Metadata = {
  title: "Contact Foodies Hot & Spicy – Lekki & Maitama Locations",
  description: "Visit us in Lekki, Lagos or Maitama, Abuja. Book a table, order takeaway, or contact our team.",
  keywords: ["contact Foodies", "Lagos restaurant address", "Abuja restaurant location", "Nigerian dining"],
};

const page = () => {
  return (
    <div>
      <ContactPage />
    </div>
  );
};

export default page;