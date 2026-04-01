import Link from 'next/link';

const values = [
  {
    icon: '◎',
    title: 'Open Standard, Not a Walled Garden',
    body: 'The .nota format is open-source and free to implement. No licensing fees. No gatekeeping. The protocol succeeds when everyone adopts it, not when we control it.',
  },
  {
    icon: '⊞',
    title: 'Security Through Transparency',
    body: 'Every verification decision is on-chain. Every validator stake is public. Every slashing event is auditable. Trust is earned through visibility, not authority.',
  },
  {
    icon: '⬡',
    title: 'Practical Over Theoretical',
    body: 'We ship tools that solve real problems today: address verification, contract authenticity, resource portability. The research informs the engineering, not the other way around.',
  },
];

const roadmap = [
  {
    quarter: 'Q1 2026',
    status: 'completed',
    items: [
      'Whitepaper v1.0 published',
      'Protocol specification finalized',
      'Research phase complete',
    ],
  },
  {
    quarter: 'Q2 2026',
    status: 'active',
    items: [
      'JavaScript and Python SDK alpha release',
      'Testnet deployment (Ethereum Sepolia, Polygon Mumbai)',
      'Developer documentation launch',
      'Open-source .nota validator reference implementation',
    ],
  },
  {
    quarter: 'Q3 2026',
    status: 'upcoming',
    items: [
      'Mainnet launch on Ethereum and Polygon',
      '$NOTA token generation event',
      'Wallet integration partnerships announced',
      'Rust and Go SDK release',
    ],
  },
  {
    quarter: 'Q4 2026',
    status: 'upcoming',
    items: [
      'Expansion to Solana, Arbitrum, Base, BNB Chain',
      'Exchange integration pilot programs',
      'Institutional verification tier launch',
      'Governance DAO activation',
    ],
  },
  {
    quarter: '2027',
    status: 'future',
    items: [
      'Bitcoin and Cosmos ecosystem support',
      'Cross-chain verification bridges',
      'Enterprise API general availability',
      'Mobile SDK (Swift, Kotlin) release',
    ],
  },
];

const contacts = [
  { label: 'General', email: 'hello@notareum.com' },
  { label: 'Research', email: 'research@notareum.com' },
  { label: 'Partnerships', email: 'partners@notareum.com' },
  { label: 'Security', email: 'security@notareum.com', note: 'responsible disclosure' },
];

const statusStyles: Record<string, { bg: string; color: string; border: string }> = {
  completed: { bg: 'rgba(5,150,105,0.15)', color: '#34d399', border: '#065f46' },
  active: { bg: 'color-mix(in srgb, var(--brand) 20%, transparent)', color: 'var(--brand)', border: 'var(--brand)' },
  upcoming: { bg: 'transparent', color: 'var(--text-muted)', border: 'var(--border)' },
  future: { bg: 'transparent', color: 'var(--text-muted)', border: 'var(--border)' },
};

const dotColors: Record<string, string> = {
  completed: '#34d399',
  active: 'var(--brand)',
  upcoming: 'var(--border)',
  future: 'var(--border)',
};

const itemDotColors: Record<string, string> = {
  completed: '#34d399',
  active: 'var(--brand)',
  upcoming: 'var(--text-muted)',
  future: 'var(--text-muted)',
};

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      {/* Hero */}
      <section className="py-24 lg:py-32 text-center" style={{ background: 'var(--bg-alt)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="label mb-4">Our Story</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text)' }}>
            About <span style={{ color: 'var(--brand)' }}>Notareum</span>
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Building the trust infrastructure that Web3 needs.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20" style={{ background: 'var(--bg)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="label mb-3">Mission</div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>Why we exist</h2>
          </div>
          <div className="card rounded-2xl p-8 lg:p-12 space-y-5 leading-relaxed text-base lg:text-lg" style={{ color: 'var(--text-body)' }}>
            <p>
              Blockchain technology promised trustless transactions, but the human layer remains dangerously fragile. Users still copy-paste addresses from unverified sources, interact with unaudited contracts, and send irreversible transactions based on nothing more than a screenshot or a chat message.
            </p>
            <p>
              Notareum exists to close this gap. We are building the trust layer that sits between people and the blockchain, making every resource shareable, verifiable, and human-readable.
            </p>
            <p>
              Our goal is not to replace existing infrastructure. ENS, WalletConnect, and chain-specific tools serve important roles. Notareum is the connective tissue: a universal format that works across all chains, all wallets, and all use cases.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28" style={{ background: 'var(--bg-alt)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="label mb-3">Core Values</div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>What we stand for</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="card rounded-xl p-8">
                <div className="text-3xl mb-4" style={{ color: 'var(--brand)' }}>{v.icon}</div>
                <h3 className="font-semibold text-lg mb-3" style={{ color: 'var(--text)' }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20" style={{ background: 'var(--bg)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="label mb-3">Roadmap</div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>Where we are going</h2>
          </div>
          <div className="space-y-6">
            {roadmap.map((phase, i) => (
              <div key={i} className="relative timeline-item pl-12">
                {/* Dot */}
                <div
                  className="absolute left-0 top-3 w-5 h-5 rounded-full border-2"
                  style={{ background: dotColors[phase.status], borderColor: 'var(--bg)' }}
                />
                <div className="card rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="font-semibold" style={{ color: 'var(--text)' }}>{phase.quarter}</h3>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full border font-medium"
                      style={{
                        background: statusStyles[phase.status].bg,
                        color: statusStyles[phase.status].color,
                        borderColor: statusStyles[phase.status].border,
                      }}
                    >
                      {phase.status === 'completed' ? 'Completed' : phase.status === 'active' ? 'In Progress' : phase.status === 'upcoming' ? 'Upcoming' : 'Planned'}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: itemDotColors[phase.status] }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 lg:py-28" style={{ background: 'var(--bg-alt)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="label mb-3">Contact</div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>Get in touch</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contacts.map((c, i) => (
              <div key={i} className="card rounded-xl p-6 text-center">
                <div className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>{c.label}</div>
                <a
                  href={`mailto:${c.email}`}
                  className="text-sm font-medium transition-colors break-all"
                  style={{ color: 'var(--brand)' }}
                >
                  {c.email}
                </a>
                {c.note && (
                  <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>({c.note})</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
