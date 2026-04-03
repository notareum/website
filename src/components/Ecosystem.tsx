'use client';

const chains = [
  { name: 'Ethereum', desc: 'Native L1 Support' },
  { name: 'Polygon', desc: 'Fast Verification' },
  { name: 'Arbitrum', desc: 'Optimistic Proofs' },
  { name: 'Optimism', desc: 'Native L2 Support' },
  { name: 'Avalanche', desc: 'C-Chain Ready' },
  { name: 'Base', desc: 'Native L2 Support' },
  { name: 'Solana', desc: 'Beta Integration' },
  { name: 'Cosmos', desc: 'IBC Compatible' },
];

export default function Ecosystem() {
  return (
    <section className="py-16 sm:py-20 lg:py-28" style={{ background: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }} id="ecosystem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="label mb-3 block">Ecosystem</span>
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight" style={{ color: 'var(--text)' }}>
            Universal Compatibility
          </h2>
        </div>

        {/* Chain grid */}
        <div className="mb-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {chains.map((chain) => (
            <div
              key={chain.name}
              className="card cursor-pointer p-4 text-center transition-colors sm:p-5"
            >
              <div className="font-mono text-sm font-medium mb-1" style={{ color: 'var(--text)' }}>{chain.name}</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{chain.desc}</div>
            </div>
          ))}
        </div>

        {/* Category band */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl sm:grid-cols-3 lg:grid-cols-6" style={{ background: 'var(--border)' }}>
          {['DeFi', 'Identity', 'Oracles', 'Gaming', 'DAOs', 'Enterprise'].map((label) => (
            <div
              key={label}
              className="flex items-center justify-center px-4 py-5 text-sm font-semibold tracking-tight transition-colors"
              style={{ background: 'var(--bg-alt)', color: 'var(--text-muted)' }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
