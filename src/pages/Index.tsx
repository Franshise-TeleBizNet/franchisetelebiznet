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
import { LongTermProspects } from "@/components/sections/LongTermProspects";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Quiz />
        <HowItWorks />
        <Packages />
        <ComparisonTable />
        <Calculator />
        <Testimonials />
        <WhyUs />
        <LongTermProspects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
