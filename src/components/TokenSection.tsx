'use client';

const distribution = [
  { label: 'Ecosystem & Grants', pct: 40, color: 'var(--brand)' },
  { label: 'Core Contributors', pct: 25, color: 'var(--accent)' },
  { label: 'Treasury', pct: 20, color: '#14b8a6' },
  { label: 'Public Distribution', pct: 15, color: 'color-mix(in srgb, var(--accent) 40%, transparent)' },
];

export default function TokenSection() {
  return (
    <section className="py-24 lg:py-32" style={{ background: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }} id="token">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Info */}
          <div>
            <span className="label mb-3 block">$NOTA Token</span>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight mb-6" style={{ color: 'var(--text)' }}>
              Protocol Economics
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              The $NOTA token aligns incentives across the network. It is used to stake
              verification nodes, pay for cross-chain proof generation, and govern protocol
              upgrades through on-chain proposals.
            </p>
            <ul className="space-y-4">
              {[
                {
                  color: 'var(--accent)',
                  title: 'Node Staking',
                  desc: 'Validators stake $NOTA to participate in the decentralized verification network.',
                },
                {
                  color: '#14b8a6',
                  title: 'Network Fees',
                  desc: 'A micro-fee is burned for every complex cross-chain proof generated.',
                },
                {
                  color: 'var(--brand)',
                  title: 'Governance',
                  desc: 'Token holders propose and vote on protocol parameters and treasury allocation.',
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-1 flex-shrink-0" style={{ color: item.color }}>■</span>
                  <div>
                    <h4 className="font-normal mb-1" style={{ color: 'var(--text)' }}>{item.title}</h4>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Distribution chart */}
          <div className="card p-8">
            <h4 className="font-mono text-sm mb-6" style={{ color: 'var(--text)' }}>
              Token Distribution (Total Supply: 1B)
            </h4>
            {/* Bar chart */}
            <div className="flex h-6 rounded-full overflow-hidden mb-8">
              {distribution.map((d) => (
                <div
                  key={d.label}
                  className="h-full"
                  style={{ width: `${d.pct}%`, background: d.color }}
                />
              ))}
            </div>
            {/* Legend */}
            <div className="grid grid-cols-2 gap-4">
              {distribution.map((d) => (
                <div key={d.label} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-body)' }}>
                  <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: d.color }} />
                  <span>{d.label} ({d.pct}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
