'use client';

const useCases = [
  {
    num: '01',
    title: 'Developer Tooling',
    desc: 'Secure distribution of verifiable smart contract ABIs across decentralized networks without reliance on centralized registries.',
    accent: true,
  },
  {
    num: '02',
    title: 'Enterprise Legal',
    desc: 'Immutable document custody and automated settlement for holding company transactions via .nota-wrapped cryptographic files.',
    accent: false,
  },
  {
    num: '03',
    title: 'Supply Chain',
    desc: 'Cross-chain verifiable supply chain manifests protecting the integrity of petrochemical and raw material logistics.',
    accent: true,
  },
  {
    num: '04',
    title: 'M&A Auditing',
    desc: 'Comprehensive legal due diligence with corporate documentation bound into a single verifiable cryptographic portfolio.',
    accent: false,
  },
  {
    num: '05',
    title: 'DID Providers',
    desc: 'Issue verifiable credentials wrapped in .nota format for instant identity verification on any supported network.',
    accent: true,
  },
  {
    num: '06',
    title: 'Asset Portability',
    desc: 'Export game state and digital assets securely, porting them to new environments via the standardized .nota file format.',
    accent: false,
  },
];

export default function UseCases() {
  return (
    <section className="py-24 lg:py-32" style={{ background: 'var(--bg)' }} id="use-cases">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <span className="label mb-3 block">Use Cases</span>
        <h2 className="text-3xl sm:text-4xl font-normal tracking-tight mb-12" style={{ color: 'var(--text)' }}>
          Protocol Applications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc) => (
            <div
              key={uc.num}
              className="rounded-xl p-8 min-h-[240px] flex flex-col relative overflow-hidden group"
              style={{
                background: uc.accent ? 'var(--brand)' : 'var(--bg-alt)',
                color: uc.accent ? '#ffffff' : 'var(--text)',
              }}
            >
              <div
                className="text-xs mb-4"
                style={{ opacity: 0.5 }}
              >
                {uc.num}
              </div>
              <div className="text-[0.95rem] leading-relaxed flex-1">{uc.desc}</div>
              <div
                className="text-[0.65rem] uppercase tracking-widest mt-6"
                style={{ opacity: 0.4 }}
              >
                {uc.title}
              </div>
              {/* Arrow button */}
              <div
                className="absolute bottom-0 right-0 w-10 h-10 rounded-tl-lg flex items-center justify-center transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                style={{
                  background: uc.accent ? '#ffffff' : 'var(--text)',
                  color: uc.accent ? 'var(--brand)' : 'var(--bg)',
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
