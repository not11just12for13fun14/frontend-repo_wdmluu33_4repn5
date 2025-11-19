import React from 'react';
import { ShieldCheck, Globe2, CheckCircle2, Cpu, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Built for Finance Professionals',
    desc: 'Not a generic CRM adapted for finance—designed from the ground up for real estate advisory workflows.',
  },
  {
    icon: Globe2,
    title: 'European Market Expertise',
    desc: 'Multi-country operations, multi-language interface, and understanding of cross-border regulatory requirements.',
  },
  {
    icon: CheckCircle2,
    title: 'Proven at Scale',
    desc: 'Successfully managing 200+ transactions and €10B+ in advised capital since 2010.',
  },
  {
    icon: Cpu,
    title: 'Modern Technology Stack',
    desc: 'Built on Next.js, TypeScript, and PostgreSQL for enterprise reliability and performance.',
  },
  {
    icon: Sparkles,
    title: 'Smart Automation',
    desc: 'Reduce manual work with intelligent matching algorithms, automated notifications, and relationship intelligence.',
  },
];

const Why = () => {
  return (
    <section className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Why FirstGrowth CRM?</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-4 inline-flex rounded-xl bg-emerald-500/10 p-3 text-emerald-300 ring-1 ring-inset ring-emerald-400/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-200/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
