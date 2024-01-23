import { FaqSection } from "./components/landing-page/faq-section";
import { Footer } from "./components/footer/footer";
import { HeroSection } from "./components/landing-page/hero-section";
import { Navbar } from "./components/header/navbar";
import { OfferSection } from "./components/landing-page/offer-section";
import { TestimonialsSection } from "./components/landing-page/testimonials-section";
import { WhyUsSection } from "./components/landing-page/why-us-section";
import "./App.css";

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
      <Footer />
    </>
  );
}

export default App;
