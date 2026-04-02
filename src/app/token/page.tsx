import Link from 'next/link';

const distribution = [
  { label: 'Ecosystem & Validators', pct: '35%', vesting: '4-year linear unlock', color: '#1a56db' },
  { label: 'Protocol Development', pct: '20%', vesting: '3-year cliff + linear', color: '#0ea5e9' },
  { label: 'Community & Grants', pct: '15%', vesting: 'Ongoing distribution', color: '#06b6d4' },
  { label: 'Team & Advisors', pct: '15%', vesting: '1-year cliff, 3-year vest', color: '#7c3aed' },
  { label: 'Liquidity & Partnerships', pct: '10%', vesting: 'At launch + 2-year vest', color: '#db2777' },
  { label: 'Reserve', pct: '5%', vesting: 'DAO-controlled', color: '#d97706' },
];

const utility = [
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>),
    title: 'Staking & Validation',
    body: 'Validators stake $NOTA to participate in the verification network. Higher stakes unlock access to higher-value verification tasks and greater reward multipliers.',
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M16 8l-4 4-4-4" /><path d="M12 12v6" /></svg>),
    title: 'Verification Fees',
    body: 'Users pay small $NOTA fees to submit resources for verification. Fees are distributed to validators who process the verification.',
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7.794 4.5v9L12 21l-7.794-4.5v-9L12 3z" /><path d="M12 12l7.794-4.5" /><path d="M12 12v9" /><path d="M12 12L4.206 7.5" /></svg>),
    title: 'Governance',
    body: '$NOTA holders vote on protocol upgrades, parameter changes, fee structures, and treasury allocation. One token, one vote, with delegation support.',
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg>),
    title: 'Reputation & Trust Scoring',
    body: 'Long-term stakers build on-chain reputation scores that influence their weight in verification consensus and governance decisions.',
  },
];

const keyMetrics = [
  { label: 'Total Supply', value: '1,000,000,000 $NOTA' },
  { label: 'Initial Circulating', value: '~8% at launch' },
  { label: 'Burn Rate', value: 'Variable (tied to activity)' },
  { label: 'Staking APR', value: '6 to 18%' },
];

export default function TokenPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      {/* Hero */}
      <section className="py-24 lg:py-32 text-center" style={{ background: 'var(--bg-alt)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="label mb-4">Notareum NOTA Token</div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6" style={{ color: 'var(--text)' }}>
            <span style={{ color: 'var(--brand)' }}>$NOTA</span>
          </h1>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            The utility token powering verification, governance, and protocol incentives across the Notareum network.
          </p>
        </div>
      </section>

      {/* Token Utility */}
      <section className="py-20" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="label mb-3">Token Utility</div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>What $NOTA does</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {utility.map((u, i) => (
              <div key={i} className="card rounded-xl p-6">
                <div className="mb-4" style={{ color: 'var(--brand)' }}>{u.icon}</div>
                <h3 className="font-semibold mb-3" style={{ color: 'var(--text)' }}>{u.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Distribution */}
      <section className="py-20 lg:py-28" style={{ background: 'var(--bg-alt)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="label mb-3">Tokenomics</div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>Distribution</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual bar chart */}
            <div className="space-y-4">
              {distribution.map((d, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium" style={{ color: 'var(--text-body)' }}>{d.label}</span>
                    <span className="font-bold text-sm" style={{ color: 'var(--text)' }}>{d.pct}</span>
                  </div>
                  <div className="h-2.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: d.pct, background: d.color }}
                    />
                  </div>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{d.vesting}</p>
                </div>
              ))}
            </div>

            {/* Allocation summary */}
            <div className="space-y-3">
              <div className="card rounded-xl p-6">
                <h3 className="font-semibold mb-4" style={{ color: 'var(--text)' }}>Allocation Summary</h3>
                <div className="space-y-2">
                  {distribution.map((d, i) => (
                    <div key={i} className="flex items-center justify-between py-1" style={{ borderBottom: i < distribution.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm" style={{ background: d.color }} />
                        <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{d.label}</span>
                      </div>
                      <span className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{d.pct}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adaptive Economics */}
      <section className="py-20" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="label mb-3">Token Economics</div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>Minting and burning that adapts</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card rounded-xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold" style={{ background: 'color-mix(in srgb, var(--brand) 15%, transparent)', border: '1px solid color-mix(in srgb, var(--brand) 30%, transparent)', color: 'var(--brand)' }}>+</div>
                <h3 className="font-semibold text-lg" style={{ color: 'var(--text)' }}>Goal-Oriented Minting</h3>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                New $NOTA is minted only when protocol milestones are achieved: verification volume thresholds, new chain integrations, validator count targets. This ties supply expansion to real network growth, not arbitrary schedules.
              </p>
            </div>
            <div className="card rounded-xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold" style={{ background: 'rgba(219,39,119,0.1)', border: '1px solid rgba(219,39,119,0.3)', color: '#db2777' }}>-</div>
                <h3 className="font-semibold text-lg" style={{ color: 'var(--text)' }}>Multi-Faceted Burning</h3>
              </div>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>$NOTA is burned through four mechanisms:</p>
              <ul className="space-y-2">
                {[
                  'A percentage of verification fees',
                  'Slashed validator stakes from dishonest behavior',
                  'Protocol upgrade activation fees',
                  'Voluntary token burns by ecosystem projects',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                    <span style={{ color: '#db2777' }} className="mt-0.5">&#9679;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 card rounded-xl p-6 text-center">
            <p className="leading-relaxed" style={{ color: 'var(--text-body)' }}>
              The result is a token model where supply responds dynamically to network activity, creating natural deflationary pressure as usage grows.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="label mb-3">Key Metrics</div>
            <h2 className="text-3xl font-bold" style={{ color: 'var(--text)' }}>By the numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((m, i) => (
              <div key={i} className="card rounded-xl p-6 text-center">
                <div className="text-xl font-bold mb-2" style={{ color: 'var(--brand)' }}>{m.value}</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'var(--bg)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>Learn more about the economics</h2>
          <p className="mb-8" style={{ color: 'var(--text-muted)' }}>Read the full token economics section in our whitepaper.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/whitepaper" className="btn-primary">Read the Whitepaper</Link>
            <Link href="/about" className="btn-secondary">View Roadmap</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
