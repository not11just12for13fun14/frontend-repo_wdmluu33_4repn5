import React from 'react';

const quotes = [
  {
    text:
      'FirstGrowth CRM transformed how we manage lender relationships across Europe. The matching algorithm alone has cut our research time by 60%.',
    author: 'Financial Advisory Director',
  },
  {
    text:
      'Finally, a platform that understands the complexity of real estate finance. The multi-entity lender management is exactly what we needed.',
    author: 'Senior Deal Manager',
  },
];

const SocialProof = () => {
  return (
    <section className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Trusted by leading investment partners across Europe</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {quotes.map((q) => (
            <blockquote key={q.author} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-blue-100">
              <p className="text-lg">“{q.text}”</p>
              <footer className="mt-4 text-sm text-blue-300">— {q.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
