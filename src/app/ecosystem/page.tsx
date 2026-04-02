'use client';

import { useState } from 'react';

const evmChains = ['Ethereum', 'Polygon', 'Arbitrum', 'Optimism', 'Base', 'BNB Chain', 'Avalanche', 'Fantom', 'zkSync', 'Linea'];
const nonEvmChains = ['Bitcoin', 'Solana', 'Cosmos (IBC)', 'Tron'];
const comingSoon = ['Sui', 'Aptos', 'Near', 'Polkadot'];

const ecosystemStats = [
  { value: '12+', label: 'Chains Supported' },
  { value: '6', label: 'Resource Types' },
  { value: '3', label: 'Verification Levels' },
  { value: '6', label: 'SDK Platforms' },
];

const useCaseShowcase = [
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg>),
    title: 'Secure Payroll',
    body: 'A DAO treasurer creates .nota files for each contributor\'s wallet. Verified addresses with human-readable names eliminate the risk of sending funds to the wrong address during bulk payroll.',
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94" /></svg>),
    title: 'NFT Provenance',
    body: 'An artist signs their collection contract as a .nota file and shares it on social media. Collectors verify the contract is authentic before minting, preventing fake collection scams.',
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3l5 5-5 5" /><path d="M21 8H9" /><path d="M8 21l-5-5 5-5" /><path d="M3 16h12" /></svg>),
    title: 'Cross-Chain Bridging',
    body: 'A user creates a .nota file containing their addresses on Ethereum and Solana. The bridge protocol reads both addresses from a single file, reducing errors in cross-chain transfers.',
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" /><path d="M9 9v.01" /><path d="M9 12v.01" /><path d="M9 15v.01" /><path d="M9 18v.01" /></svg>),
    title: 'Institutional Custody',
    body: 'A fund manager shares .nota files with institutional-level verification (KYC-linked) with auditors and regulators. Each file contains the wallet address, verification proof, and compliance metadata.',
  },
];

const integrationCategories = [
  {
    label: 'Wallets',
    content: 'Any wallet that implements the Notareum SDK can create, receive, and verify .nota files. Users see verification badges and metadata before confirming transactions.',
  },
  {
    label: 'Exchanges',
    content: 'Exchanges use .nota files for verified deposit addresses. Customers scan or upload a .nota file instead of copying raw addresses, eliminating paste-jacking and typo risks.',
  },
  {
    label: 'DeFi Protocols',
    content: 'DeFi front-ends embed verified contract .nota files. Users confirm they are interacting with the authentic protocol contract before approving transactions.',
  },
  {
    label: 'Infrastructure',
    content: 'Block explorers, portfolio trackers, and analytics platforms parse .nota metadata to display richer, more trustworthy resource information.',
  },
];

export default function EcosystemPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div style={{ background: 'var(--bg)' }}>
      {/* Hero */}
      <section className="py-24 lg:py-32 text-center" style={{ background: 'var(--bg-alt)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="label mb-4">Ecosystem</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text)' }}>
            The <span style={{ color: 'var(--brand)' }}>Notareum</span> Ecosystem
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            A growing network of chains, wallets, exchanges, and applications building on verified resource sharing.
          </p>
        </div>
      </section>

      {/* Ecosystem Stats */}
      <section className="py-16" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {ecosystemStats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--brand)' }}>{s.value}</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chain Support */}
      <section className="py-20" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="label mb-3">Multi-Chain</div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>Chain-agnostic by design</h2>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-wider font-medium mb-4" style={{ color: 'var(--text-muted)' }}>EVM Chains</h3>
              <div className="flex flex-wrap gap-3">
                {evmChains.map((chain) => (
                  <span key={chain} className="card px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer" style={{ color: 'var(--text-body)' }}>
                    {chain}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider font-medium mb-4" style={{ color: 'var(--text-muted)' }}>Non-EVM</h3>
              <div className="flex flex-wrap gap-3">
                {nonEvmChains.map((chain) => (
                  <span key={chain} className="card px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer" style={{ color: 'var(--text-body)' }}>
                    {chain}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider font-medium mb-4" style={{ color: 'var(--text-muted)' }}>Coming Soon</h3>
              <div className="flex flex-wrap gap-3">
                {comingSoon.map((chain) => (
                  <span key={chain} className="px-4 py-2 rounded-lg text-sm opacity-70" style={{ color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                    {chain}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 lg:py-28" style={{ background: 'var(--bg-alt)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="label mb-3">Integrations</div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>Built for every platform</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tab nav */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible lg:w-48 shrink-0">
              {integrationCategories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(i)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-left whitespace-nowrap transition-colors"
                  style={{
                    background: activeCategory === i ? 'var(--brand)' : 'var(--card-bg)',
                    color: activeCategory === i ? '#fff' : 'var(--text-muted)',
                    border: activeCategory === i ? 'none' : '1px solid var(--card-border)',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            {/* Content */}
            <div className="flex-1 card rounded-xl p-8">
              <h3 className="font-semibold text-xl mb-4" style={{ color: 'var(--text)' }}>
                {integrationCategories[activeCategory].label}
              </h3>
              <p className="leading-relaxed text-base" style={{ color: 'var(--text-muted)' }}>
                {integrationCategories[activeCategory].content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Showcase */}
      <section className="py-20" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="label mb-3">Real-World Use Cases</div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>Notareum in action</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {useCaseShowcase.map((u, i) => (
              <div key={i} className="card rounded-xl p-8">
                <div className="mb-4" style={{ color: 'var(--brand)' }}>{u.icon}</div>
                <h3 className="font-semibold text-lg mb-3" style={{ color: 'var(--text)' }}>{u.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
