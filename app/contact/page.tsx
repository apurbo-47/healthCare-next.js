import React from "react";

import HeroSection from "../components/heroSection";

const ContactPage = () => {
  return (
    <div className="h-screen">
      <h1 className="mt-30 text-center text-[clamp(24px,4vw,40px)] font-bold mb-15">
        This is contact page
      </h1>
      <HeroSection />
    </div>
  );
};

export default ContactPage;
