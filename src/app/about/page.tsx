import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Notareum Labs',
  description: 'Meet the team behind Notareum. Learn about our mission to build the trust layer for Web3 through open, verifiable protocols.',
};

const values = [
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M18 12H6" /><path d="M12 6v12" /></svg>),
    title: 'Open Standard, Not a Walled Garden',
    body: 'The .nota format is open-source and free to implement. No licensing fees. No gatekeeping. The protocol succeeds when everyone adopts it, not when we control it.',
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>),
    title: 'Security Through Transparency',
    body: 'Every verification decision is on-chain. Every validator stake is public. Every slashing event is auditable. Trust is earned through visibility, not authority.',
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>),
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
  completed: { bg: 'color-mix(in srgb, var(--brand-soft) 18%, transparent)', color: 'var(--brand-soft)', border: 'var(--brand-soft)' },
  active: { bg: 'color-mix(in srgb, var(--brand) 20%, transparent)', color: 'var(--brand)', border: 'var(--brand)' },
  upcoming: { bg: 'transparent', color: 'var(--text-muted)', border: 'var(--border)' },
  future: { bg: 'transparent', color: 'var(--text-muted)', border: 'var(--border)' },
};

const dotColors: Record<string, string> = {
  completed: 'var(--brand-soft)',
  active: 'var(--brand)',
  upcoming: 'var(--border)',
  future: 'var(--border)',
};

const itemDotColors: Record<string, string> = {
  completed: 'var(--brand-soft)',
  active: 'var(--brand)',
  upcoming: 'var(--text-muted)',
  future: 'var(--text-muted)',
};

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      {/* Hero */}
      <section className="page-hero" style={{ background: 'var(--bg-alt)' }}>
        <div className="page-hero-shell">
          <div className="label mb-4">Our Story</div>
          <h1 className="page-title mb-6 font-bold" style={{ color: 'var(--text)' }}>
            About <span style={{ color: 'var(--brand)' }}>Notareum</span>
          </h1>
          <p className="page-copy" style={{ color: 'var(--text-muted)' }}>
            Building the trust infrastructure that Web3 needs for Mainstream Adoption.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="page-section" style={{ background: 'var(--bg)' }}>
        <div className="page-shell-narrow">
          <div className="text-center mb-10">
            <div className="label mb-3">Mission</div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>Why we exist</h2>
          </div>
          <div className="card space-y-5 rounded-2xl p-6 text-base leading-relaxed sm:p-8 lg:p-12 lg:text-lg" style={{ color: 'var(--text-body)' }}>
            <p>
              Blockchain technology promised trustless transactions, but the human layer remains dangerously fragile. Users still copy-paste addresses from unverified sources, interact with contracts, and send irreversible transactions based on nothing more than a hex strings.
            </p>
            <p>
              Notareum exists to close this gap. We are building the trust layer that sits between people and the blockchain, making every resource shareable, verifiable, and human-computer-readable.
            </p>
            <p>
              Our goal is not to replace existing infrastructure. ENS, WalletConnect, and chain-specific tools serve important roles. Notareum is the connective tissue: a universal format that works across all chains, all wallets, and all use cases.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="page-section-lg" style={{ background: 'var(--bg-alt)' }}>
        <div className="page-shell">
          <div className="text-center mb-14">
            <div className="label mb-3">Core Values</div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>What we stand for</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="card rounded-xl p-6 sm:p-8">
                <div className="mb-4" style={{ color: 'var(--brand)' }}>{v.icon}</div>
                <h3 className="font-semibold text-lg mb-3" style={{ color: 'var(--text)' }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="page-section" style={{ background: 'var(--bg)' }}>
        <div className="page-shell-narrow">
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
      <section id="contact" className="page-section-lg" style={{ background: 'var(--bg-alt)' }}>
        <div className="page-shell-narrow">
          <div className="text-center mb-14">
            <div className="label mb-3">Contact</div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>Get in touch</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contacts.map((c, i) => (
              <div key={i} className="card rounded-xl p-5 text-center sm:p-6">
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
