import React from 'react';

const CTA = () => {
  return (
    <section id="get-started" className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to transform your real estate finance advisory?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-blue-200/90">
          Start your free trial or schedule a personalized demo. No credit card required • Setup in under 10 minutes • Support in your language
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300" href="#start">
            Start Your Free Trial
          </a>
          <a className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30" href="#demo">
            Schedule a Personalized Demo
          </a>
        </div>
        <p className="mt-6 text-sm text-blue-300/70">FirstGrowth CRM — Purpose-built for European real estate finance professionals who demand more from their technology.</p>
      </div>
    </section>
  );
};

export default CTA;
