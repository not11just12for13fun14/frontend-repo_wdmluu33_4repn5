import React from 'react';
import { Database, RefreshCw, Smartphone, Globe, Lock, Cloud } from 'lucide-react';

const items = [
  { icon: Database, text: 'High-performance PostgreSQL database handling 20,000+ deals' },
  { icon: RefreshCw, text: 'Real-time synchronization with Microsoft Outlook for contact discovery' },
  { icon: Smartphone, text: 'Responsive design for desktop and mobile workflows' },
  { icon: Globe, text: 'Multi-language support (French, English, Italian)' },
  { icon: Lock, text: 'Enterprise authentication with Better Auth' },
  { icon: Cloud, text: 'Cloud-native deployment on AWS with scalable infrastructure' },
];

const TechHighlights = () => {
  return (
    <section className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Technical Highlights</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mt-1 inline-flex rounded-lg bg-white/10 p-2 text-blue-300 ring-1 ring-inset ring-white/10">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-blue-100">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechHighlights;
