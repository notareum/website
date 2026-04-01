'use client';

const challenges = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: 'Incompatible Formats',
    desc: 'Smart contract data and off-chain metadata lack a unified serialization standard, creating brittle integration points between dApps.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Verifiability Bottlenecks',
    desc: 'Proving origin and state of off-chain assets currently requires custom indexing solutions, slowing down cross-chain operability.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h4l3-9 5 18 3-9h5" />
      </svg>
    ),
    title: 'Ecosystem Friction',
    desc: 'Developers spend immense resources writing custom parsers rather than focusing on core application logic and user experience.',
  },
];

export default function Challenges() {
  return (
    <section className="py-24 lg:py-32" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <span className="label mb-3 block">The Challenge</span>
        <h2 className="text-3xl sm:text-4xl font-normal tracking-tight mb-12" style={{ color: 'var(--text)' }}>
          Fragmented Trust Across Ecosystems
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((c, i) => (
            <div
              key={i}
              className="card group p-8"
            >
              <div className="w-12 h-12 rounded flex items-center justify-center mb-6" style={{ border: '1px solid var(--accent)', background: 'color-mix(in srgb, var(--accent) 10%, transparent)', color: 'var(--accent)' }}>
                {c.icon}
              </div>
              <h3 className="font-normal text-lg mb-3" style={{ color: 'var(--text)' }}>{c.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
