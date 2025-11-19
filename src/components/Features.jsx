import React from 'react';
import { Target, Gauge, Users2, ShieldCheck, LineChart, Zap } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Intelligent Lender Matching',
    desc:
      'Automatically identify the best lenders for each deal using our proprietary 100-point scoring algorithm, including the right local entity within international groups.',
  },
  {
    icon: Gauge,
    title: 'Complete Deal Pipeline Management',
    desc:
      'Track deals from prospection to finalization with customizable stages, timelines, and priorities in real-time dashboards.',
  },
  {
    icon: Users2,
    title: 'Relationship Management at Scale',
    desc:
      'Maintain detailed profiles for investors, borrowers, and 1,000+ lenders across Europe with multi-language support.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-Grade Security',
    desc:
      'Role-based permissions and hierarchical entity management with GDPR compliance and audit logging.',
  },
  {
    icon: LineChart,
    title: 'Advanced Analytics & Insights',
    desc:
      'Interactive dashboards to analyze deal flow, conversion rates, team performance, and lender relationships.',
  },
  {
    icon: Zap,
    title: 'Real-Time Collaboration',
    desc:
      'Instant notifications, activity tracking, and deal updates keep teams aligned without polling.',
  },
];

const Features = () => {
  return (
    <section className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Key Features</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-blue-200/90">
          Purpose-built to handle the complexity of European real estate finance.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 transition hover:border-blue-400/30">
              <div className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-300 ring-1 ring-inset ring-blue-400/20">
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

export default Features;
