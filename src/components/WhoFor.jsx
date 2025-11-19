import React from 'react';

const WhoFor = () => {
  return (
    <section className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Who It's For</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            'Real Estate Finance Advisors managing complex transactions across multiple European markets',
            'Deal Managers coordinating between investors, borrowers, and lenders',
            'Technical & Functional Administrators overseeing platform operations and team management',
            'Financial Institutions seeking streamlined deal sourcing and relationship management',
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-blue-100">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoFor;
