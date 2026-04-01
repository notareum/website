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
    <section className="py-24 lg:py-32" style={{ background: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }} id="ecosystem">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="label mb-3 block">Ecosystem</span>
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight" style={{ color: 'var(--text)' }}>
            Universal Compatibility
          </h2>
        </div>

        {/* Chain grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {chains.map((chain) => (
            <div
              key={chain.name}
              className="card p-5 text-center cursor-pointer transition-colors"
            >
              <div className="font-mono text-sm font-medium mb-1" style={{ color: 'var(--text)' }}>{chain.name}</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{chain.desc}</div>
            </div>
          ))}
        </div>

        {/* Category band */}
        <div className="grid grid-cols-3 sm:grid-cols-6" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          {['DeFi', 'Identity', 'Oracles', 'Gaming', 'DAOs', 'Enterprise'].map((label, i) => (
            <div
              key={label}
              className="py-8 px-4 flex items-center justify-center font-semibold text-sm tracking-tight cursor-pointer transition-colors"
              style={{
                color: 'var(--text-muted)',
                borderRight: i < 5 ? '1px solid var(--border)' : 'none',
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
