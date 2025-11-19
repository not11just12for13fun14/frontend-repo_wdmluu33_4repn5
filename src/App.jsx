import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import WhoFor from './components/WhoFor';
import Why from './components/Why';
import SocialProof from './components/SocialProof';
import TechHighlights from './components/TechHighlights';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950">
      <Hero />
      <Features />
      <WhoFor />
      <Why />
      <SocialProof />
      <TechHighlights />
      <CTA />
    </div>
  );
}

export default App;
