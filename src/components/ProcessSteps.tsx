'use client';

const steps = [
  {
    num: '1',
    title: 'Encrypt',
    desc: 'Pack your payload into a standardized .nota structure with client-side encryption and deterministic serialization.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    num: '2',
    title: 'Sign',
    desc: 'Attach cryptographic signatures proving origin. ZK or Merkle proofs generated against the source chain state root.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
      </svg>
    ),
  },
  {
    num: '3',
    title: 'Distribute',
    desc: 'Share the flat file anywhere. The recipient verifies the payload automatically — only authorized wallets can decrypt.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <polyline points="13 2 13 9 20 9" />
      </svg>
    ),
  },
];

export default function ProcessSteps() {
  return (
    <section className="relative z-10">
      <div className="flex flex-col lg:flex-row">
        {/* 3 brand step blocks */}
        <div className="flex-1 grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-3 lg:divide-x" style={{ background: 'var(--brand)' }}>
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col p-8 text-white sm:p-10 lg:p-12"
            >
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                {step.num}. {step.title}
              </h3>
              <p className="text-white/80 text-[0.9375rem] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Offset card */}
        <div
          className="hidden xl:flex w-[380px] flex-col justify-center p-10 border-l border-white/10"
          style={{
            background: 'var(--bg-alt)',
            backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px)',
            backgroundSize: '100% 20px',
          }}
        >
          <div className="text-xs uppercase tracking-widest font-mono mb-6" style={{ color: 'var(--text-muted)' }}>
            — .nota specification
          </div>
          <h3 className="text-2xl font-bold mb-4 tracking-tight leading-tight" style={{ color: 'var(--text)' }}>
            The .nota File Format
          </h3>
          <p className="text-[0.9375rem] leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
            A deterministic, JSON-based envelope for cross-chain resource sharing.
            Bundles payload, schema, and signatures into a single portable artifact.
          </p>
          <a
            href="/protocol"
            className="inline-flex items-center gap-2 font-semibold text-sm hover:gap-3 transition-all"
            style={{ color: 'var(--brand)' }}
          >
            Read Specification <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
