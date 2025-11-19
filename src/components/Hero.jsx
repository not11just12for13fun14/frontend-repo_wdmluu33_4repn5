import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-900">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/30 to-slate-900/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(2,6,23,0.5),transparent)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-blue-100 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          <span className="font-medium">First Growth</span>
          <span className="opacity-70">• Real Estate Finance Advisory Since 2010</span>
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          The CRM built for European real estate finance professionals
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-blue-100/90">
          Manage complex financing deals, match borrowers with the right lenders, and streamline your advisory workflow—all in one intelligent platform trusted across Paris, London, Milan, and Madrid.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#get-started" className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Get Started
          </a>
          <a href="#demo" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30">
            Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
