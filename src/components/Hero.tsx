'use client';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden rounded-none md:mx-3 md:mt-3 md:rounded-block"
      style={{ backgroundColor: 'var(--bg-alt)', padding: '24px 24px 80px 24px' }}
    >
      {/* Hero content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 lg:pt-24 relative">
        <div className="relative max-w-[1000px]">
          <h1
            className="text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.05em] mb-6"
            style={{ color: 'var(--brand)' }}
          >
            The trust layer
            <br />
            for Web3
          </h1>
          <p className="text-xl md:text-2xl max-w-[580px] tracking-[-0.02em]" style={{ color: 'var(--brand)' }}>
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

        {/* Data grid (V7 style - 3 columns with 1px separator) */}
        <div className="grid-separator grid grid-cols-1 sm:grid-cols-3 mt-16">
          {[
            { title: 'Network Uptime', sub: '(30d)', value: '99.99%', desc: 'Zero downtime via distributed consensus.' },
            { title: 'Total Value Secured', sub: '($NOTA)', value: '$1.2B', desc: 'Across 40+ supported protocols.' },
            { title: 'Verification Speed', sub: '(avg)', value: '42ms', desc: 'Instant confirmation via L2 engine.' },
          ].map((cell, i) => (
            <div key={i} className="p-8">
              <div className="text-sm flex justify-between mb-4" style={{ color: 'var(--text-muted)' }}>
                {cell.title} <span>{cell.sub}</span>
              </div>
              <div className="text-3xl font-medium tracking-[-0.03em] leading-none mb-2" style={{ color: 'var(--brand)' }}>
                {cell.value}
              </div>
              <div className="text-[13px]" style={{ color: 'var(--brand)' }}>{cell.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
