'use client';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden rounded-none px-4 pb-12 pt-4 sm:px-6 sm:pb-16 md:mx-3 md:mt-3 md:rounded-block lg:px-8 lg:pb-20"
      style={{ backgroundColor: 'var(--bg-alt)' }}
    >
      {/* Hero content */}
      <div className="relative mx-auto max-w-7xl px-0 pt-10 sm:pt-12 lg:pt-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
          <div className="relative">
            <h1
              className="mb-5 text-[clamp(2.9rem,14vw,8rem)] font-medium leading-[0.9] tracking-[-0.06em] sm:mb-6"
              style={{ color: 'var(--brand)' }}
            >
              The trust layer
              <br />
              for Web3
            </h1>
            <p className="max-w-[32rem] text-lg tracking-[-0.02em] sm:text-xl md:text-2xl" style={{ color: 'var(--brand)' }}>
              An open protocol for sharing blockchain resources safely using the verifiable{' '}
              <span className="font-mono">.nota</span> file format.
            </p>

            {/* DNA floating pill tags (V7 style) */}
            <div className="hidden lg:block">
            {/* Tag 1 */}
            <div className="dna-tag absolute -top-4 right-[18%]">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ border: '1px solid var(--border)', color: 'var(--brand)' }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                </svg>
              </div>
              <div className="flex flex-col text-[9px] leading-tight tracking-wide" style={{ color: 'var(--brand)' }}>
                <span>.nota file</span>
                <span style={{ color: 'var(--text-muted)' }}>format protocol</span>
              </div>
            </div>

            {/* Tag 2 */}
            <div className="dna-tag absolute bottom-10 right-[4%]">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ border: '1px solid var(--border)', color: 'var(--brand)' }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <div className="flex flex-col text-[9px] leading-tight tracking-wide" style={{ color: 'var(--brand)' }}>
                <span>cross-chain</span>
                <span style={{ color: 'var(--text-muted)' }}>resource sharing</span>
              </div>
            </div>

            {/* Tag 3 */}
            <div className="dna-tag absolute bottom-24 left-[58%]">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ border: '1px solid var(--border)', color: 'var(--brand)' }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="flex flex-col text-[9px] leading-tight tracking-wide" style={{ color: 'var(--brand)' }}>
                <span>cryptographic</span>
                <span style={{ color: 'var(--text-muted)' }}>verification engine</span>
              </div>
            </div>
          </div>
          </div>
          {/* end left column */}
          {/* .nota spec card (V5 style) — right column */}
          <div className="relative order-last pt-2 lg:order-none lg:pt-8">
            <div
              className="max-w-full overflow-hidden rounded-xl"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.08)',
              }}
            >
              <div className="flex items-center justify-between px-5 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
                <span className="text-xs uppercase tracking-widest font-medium" style={{ color: 'var(--text-muted)' }}>.nota format spec</span>
                <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>v1.0</span>
              </div>
              <pre className="overflow-x-auto px-4 py-4 text-[12px] leading-[1.65] sm:px-5 sm:text-[13px]" style={{ color: 'var(--code-text)', background: 'var(--code-bg)', margin: 0 }}>
                <code>{`{
  "type": "address",
  "chain": "ethereum",
  "resource": {
    "id": "0x7a2b...9f3e",
    "name": "Treasury",
    "alias": "treasury.nota"
  },
  "verification": {
    "status": "verified",
    "level": "institutional"
  },
  "signature": "ecdsa:secp256k1"
}`}</code>
              </pre>
              <div className="flex flex-wrap gap-2 px-4 py-3 sm:px-5" style={{ borderTop: '1px solid var(--border)' }}>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full font-medium" style={{ background: 'color-mix(in srgb, var(--slate) 12%, transparent)', color: 'var(--slate)' }}>Signed</span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full font-medium" style={{ background: 'color-mix(in srgb, var(--brand) 12%, transparent)', color: 'var(--brand-strong)' }}>Verified</span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full font-medium" style={{ background: 'color-mix(in srgb, var(--brand-soft) 14%, transparent)', color: 'var(--brand-soft)' }}>1.2 KB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Data grid (V7 style - 3 columns with 1px separator) */}
        <div className="grid-separator mt-12 grid grid-cols-1 md:grid-cols-3 sm:mt-14 lg:mt-16">
          {[
            { title: 'Network Uptime', sub: '(30d)', value: '99.99%', desc: 'Zero downtime via distributed consensus.' },
            { title: 'Total Value Secured', sub: '($NOTA)', value: '$1.2B', desc: 'Across 40+ supported protocols.' },
            { title: 'Verification Speed', sub: '(avg)', value: '42ms', desc: 'Instant confirmation via L2 engine.' },
          ].map((cell, i) => (
            <div key={i} className="p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                {cell.title} <span>{cell.sub}</span>
              </div>
              <div className="mb-2 text-2xl font-medium leading-none tracking-[-0.03em] sm:text-3xl" style={{ color: 'var(--brand)' }}>
                {cell.value}
              </div>
              <div className="text-[13px] sm:text-sm" style={{ color: 'var(--brand)' }}>{cell.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
