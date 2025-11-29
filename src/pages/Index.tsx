import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Quiz } from "@/components/sections/Quiz";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Packages } from "@/components/sections/Packages";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Calculator } from "@/components/sections/Calculator";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";
import { Comparison } from "@/components/sections/Comparison";
import { LongTermProspects } from "@/components/sections/LongTermProspects";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { BackToTop } from "@/components/BackToTop";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <Hero />
      <About />
      <WhyUs />
      <Comparison />
      <Quiz />
        <Packages />
        <HowItWorks />
        <ComparisonTable />
        <Calculator />
        <Testimonials />
        <LongTermProspects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
