import { HeroSection } from "./components/landing-page/hero-section";
import { Navbar } from "./components/header/navbar";
import { TestimonialsSection } from "./components/landing-page/testimonials-section";
import { WhyUsSection } from "./components/landing-page/why-us-section";
import "./App.css";
import { FaqSection } from "./components/landing-page/faq-section";
import { OfferSection } from "./components/landing-page/offer-section";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhyUsSection />
        <TestimonialsSection />
        <FaqSection />
        <OfferSection />
      </main>
    </>
  );
}

export default App;
