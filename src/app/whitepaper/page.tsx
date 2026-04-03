'use client';

import Link from 'next/link';
import { useState } from 'react';

const sections = [
  {
    num: '01',
    title: 'Introduction',
    body: 'The fragmented state of blockchain resource sharing and why a universal, verifiable standard is needed.',
  },
  {
    num: '02',
    title: 'The .nota File Format',
    body: 'Formal specification of the JSON-based container format, including schema, supported resource types, and extensibility model.',
  },
  {
    num: '03',
    title: 'Verification Engine',
    body: 'Decentralized validation through staking-based consensus. Covers validator selection, supermajority thresholds, dispute arbitration, and Byzantine fault tolerance.',
  },
  {
    num: '04',
    title: 'Token Economics',
    body: 'Goal-oriented $NOTA distribution, adaptive minting tied to protocol milestones, and multi-faceted burning mechanics.',
  },
  {
    num: '05',
    title: 'Use Cases & Trust Model',
    body: 'Real-world applications across DeFi, NFTs, institutional finance, and cross-chain operations.',
  },
  {
    num: '06',
    title: 'SDK Architecture',
    body: 'Multi-platform integration layer for wallets, exchanges, and decentralized applications.',
  },
  {
    num: '07',
    title: 'Security & Risk Assessment',
    body: 'Threat model, Sybil resistance, validator collusion prevention, and smart contract audit framework.',
  },
];

const keyFigures = [
  { label: 'Protocol Notation', value: 'N = (U, V, F, \u03A3, \u0393)' },
  { label: 'Consensus Threshold', value: '>66% supermajority' },
  { label: 'Typical File Size', value: '1 to 2KB' },
  { label: 'Signature Algorithms', value: 'ECDSA (secp256k1), EdDSA (ed25519)' },
];

const citation = `Notareum Labs. "The Notareum Protocol: A Universal Transfer Interface
for Verified Blockchain Resource Sharing." Working Paper v1.0,
February 2026.`;

export default function WhitepaperPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div style={{ background: 'var(--bg)' }}>
      {/* Hero */}
      <section className="page-hero" style={{ background: 'var(--bg-alt)' }}>
        <div className="page-hero-shell">
          <div className="label mb-4">Research Paper</div>
          <h1 className="page-title mb-6 font-bold" style={{ color: 'var(--text)' }}>
            <span style={{ color: 'var(--brand)' }}>Whitepaper</span>
          </h1>
          <p className="page-copy" style={{ color: 'var(--text-muted)' }}>
            The Notareum Protocol: A Universal Transfer Interface for Verified Blockchain Resource Sharing
          </p>
        </div>
      </section>

      {/* Download */}
      <section className="page-section" style={{ background: 'var(--bg)' }}>
        <div className="page-shell-narrow">
          <div className="card rounded-2xl p-6 sm:p-8 lg:p-12" style={{ borderColor: 'color-mix(in srgb, var(--brand) 30%, transparent)' }}>
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-8">
              {/* Document icon */}
              <div
                className="w-24 h-28 rounded-lg flex flex-col items-center justify-center shrink-0"
                style={{ background: 'color-mix(in srgb, var(--brand) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--brand) 30%, transparent)' }}
              >
                <div className="font-mono text-xs mb-1 font-bold" style={{ color: 'var(--brand)' }}>.PDF</div>
                <div className="w-8 h-0.5 mb-1 opacity-50" style={{ background: 'var(--brand)' }} />
                <div className="w-8 h-0.5 mb-1 opacity-30" style={{ background: 'var(--brand)' }} />
                <div className="w-8 h-0.5 opacity-20" style={{ background: 'var(--brand)' }} />
              </div>

              <div className="flex-1">
                <h2 className="font-bold text-xl mb-2" style={{ color: 'var(--text)' }}>
                  Notareum Protocol Whitepaper v1.0
                </h2>
                <div className="flex flex-wrap gap-4 text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
                  <span>Version: 1.0</span>
                  <span>&#183;</span>
                  <span>February 2026</span>
                  <span>&#183;</span>
                  <span>Author: Notareum Labs</span>
                  <span>&#183;</span>
                  <span>10 pages</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/whitepaper/notareum-whitepaper-v1.0.pdf"
                    className="btn-primary w-full sm:w-auto"
                  >
                    &#8595; Download PDF
                  </a>
                  <a
                    href="https://github.com/notareum/whitepaper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full sm:w-auto"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Sections */}
      <section className="page-section-lg" style={{ background: 'var(--bg-alt)' }}>
        <div className="page-shell-narrow">
          <div className="text-center mb-14">
            <div className="label mb-3">Paper Structure</div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>Key sections summary</h2>
          </div>
          <div className="space-y-3">
            {sections.map((s, i) => (
              <div key={i} className="card rounded-xl overflow-hidden">
                <button
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-bold" style={{ color: 'var(--brand)' }}>{s.num}</span>
                    <span className="font-medium" style={{ color: 'var(--text)' }}>{s.title}</span>
                  </div>
                  <span className={`transition-transform ${expanded === i ? 'rotate-180' : ''}`} style={{ color: 'var(--brand)' }}>&#8964;</span>
                </button>
                {expanded === i && (
                  <div className="px-5 pb-5 pt-0 text-sm leading-relaxed" style={{ color: 'var(--text-muted)', borderTop: '1px solid var(--border)' }}>
                    <p className="pt-4">{s.body}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Figures */}
      <section className="page-section" style={{ background: 'var(--bg)' }}>
        <div className="page-shell">
          <div className="text-center mb-12">
            <div className="label mb-3">Technical Specifications</div>
            <h2 className="text-3xl font-bold" style={{ color: 'var(--text)' }}>Key figures</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyFigures.map((f, i) => (
              <div key={i} className="card rounded-xl p-6 text-center">
                <div className="font-mono font-bold text-base mb-2" style={{ color: 'var(--brand)' }}>{f.value}</div>
                <div className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="page-section-lg" style={{ background: 'var(--bg-alt)' }}>
        <div className="page-shell-narrow">
          <div className="text-center mb-10">
            <div className="label mb-3">How to Cite</div>
            <h2 className="text-3xl font-bold" style={{ color: 'var(--text)' }}>Citation</h2>
          </div>
          <pre className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            <code>{citation}</code>
          </pre>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section" style={{ background: 'var(--bg)' }}>
        <div className="page-shell-narrow text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>Ready to build on the protocol?</h2>
          <p className="mb-8" style={{ color: 'var(--text-muted)' }}>Explore the developer documentation and start integrating the .nota format.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/developers" className="btn-primary w-full sm:w-auto">Start Building</Link>
            <Link href="/protocol" className="btn-secondary w-full sm:w-auto">Read Protocol Spec</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
