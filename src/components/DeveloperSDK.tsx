'use client';

import { useState } from 'react';

const tabs = ['JavaScript', 'Python', 'Rust'] as const;
type Tab = (typeof tabs)[number];

const codeSnippets: Record<Tab, string> = {
  JavaScript: `import { NotaEngine } from '@notareum/sdk';
import { providers } from 'ethers';

// 1. Initialize the engine
const engine = new NotaEngine({
  rpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/...'
});

// 2. Parse and verify a .nota file
async function verifyAsset(fileBuffer) {
  const result = await engine.verify(fileBuffer);

  if (result.isValid) {
    console.log('Asset Owner:', result.payload.owner);
  } else {
    throw new Error('Cryptographic proof failed');
  }
}`,
  Python: `from notareum import NotaEngine

# 1. Initialize the engine
engine = NotaEngine(
  rpc_url="https://eth-mainnet.g.alchemy.com/v2/..."
)

# 2. Parse and verify a .nota file
async def verify_asset(file_buffer):
  result = await engine.verify(file_buffer)

  if result.is_valid:
    print('Asset Owner:', result.payload.owner)
  else:
    raise ValueError('Cryptographic proof failed')`,
  Rust: `use notareum::{NotaEngine, VerifyResult};

// 1. Initialize the engine
let engine = NotaEngine::new(
  "https://eth-mainnet.g.alchemy.com/v2/..."
);

// 2. Parse and verify a .nota file
async fn verify_asset(buf: &[u8]) -> Result<()> {
  let result = engine.verify(buf).await?;
  if result.is_valid {
    println!("Asset Owner: {}", result.payload.owner);
  }
  Ok(())
}`,
};

export default function DeveloperSDK() {
  const [activeTab, setActiveTab] = useState<Tab>('JavaScript');

  return (
    <section className="py-16 sm:py-20 lg:py-28" style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }} id="developers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left - Description */}
          <div>
            <span className="label mb-3 block">Developer SDK</span>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight mb-6" style={{ color: 'var(--text)' }}>
              Integrate in Minutes
            </h2>
            <p className="mb-8 text-sm leading-relaxed sm:text-base" style={{ color: 'var(--text-muted)' }}>
              Native libraries available for the most popular Web3 development
              environments. Create, sign, and verify .nota files with a few lines of code.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Zero-knowledge proof generation',
                'Native cross-chain serialization',
                'Lightweight footprint (~12KB gzipped)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-body)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="/developers" className="btn-primary w-full text-sm sm:w-auto">
              Read Documentation
            </a>
          </div>

          {/* Right - Code window */}
          <div className="min-w-0 overflow-hidden rounded-xl shadow-lg" style={{ border: '1px solid var(--card-border)', background: 'var(--code-bg)' }}>
            {/* Tab bar */}
            <div className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between" style={{ borderBottom: '1px solid var(--card-border)' }}>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="font-mono text-xs transition-colors whitespace-nowrap"
                    style={{ color: activeTab === tab ? 'var(--brand)' : 'var(--text-muted)' }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <span className="font-mono text-xs hidden sm:inline" style={{ color: 'var(--text-muted)' }}>
                npm install @notareum/sdk
              </span>
            </div>
            {/* Code */}
            <div className="overflow-x-auto p-4 font-mono text-[13px] leading-[1.7] sm:p-6 sm:text-sm" style={{ color: 'var(--code-text)' }}>
              <pre className="m-0 whitespace-pre" style={{ background: 'transparent', border: 'none', padding: 0 }}>
                <code>{codeSnippets[activeTab]}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
