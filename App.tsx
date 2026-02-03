
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuGrid from './components/MenuGrid';
import SpecialOffers from './components/SpecialOffers';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import SEO from './components/SEO';
import CookieBanner from './components/CookieBanner';
import LegalModal, { LegalType } from './components/LegalModal';
import PWAInstallPrompt from './components/PWAInstallPrompt';


const App: React.FC = () => {
  const [activeLegal, setActiveLegal] = useState<LegalType>(null);

  return (
    <div className="flex flex-col min-h-screen selection:bg-orange-600 selection:text-white bg-white">
      <SEO />
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <About />
        <SpecialOffers />
        <MenuGrid />
        <ContactInfo />
      </main>

      <Footer onLegalClick={setActiveLegal} />

      {/* Legal "Pages" as Overlays */}
      <LegalModal type={activeLegal} onClose={() => setActiveLegal(null)} />

      <PWAInstallPrompt />
      <CookieBanner />
    </div>
  );
};

export default App;
