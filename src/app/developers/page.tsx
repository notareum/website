'use client';

import Link from 'next/link';
import { useState } from 'react';

const jsCode = `import { Notareum } from '@notareum/sdk';

const nota = Notareum.create({
  type: 'address',
  chain: 'ethereum',
  identifier: '0x1a2b3c...def',
  name: 'My Wallet'
});

const signed = await nota.sign(privateKey);
await signed.save('my-wallet.nota');`;

const pyCode = `from notareum import NotaFile

nota = NotaFile.create(
    type="address",
    chain="ethereum",
    identifier="0x1a2b3c...def",
    name="My Wallet"
)

signed = nota.sign(private_key)
signed.save("my-wallet.nota")`;

const rustCode = `use notareum::NotaFile;

let nota = NotaFile::builder()
    .resource_type("address")
    .chain("ethereum")
    .identifier("0x1a2b3c...def")
    .name("My Wallet")
    .build()?;

let signed = nota.sign(&private_key)?;
signed.save("my-wallet.nota")?;`;

const sdkFeatures = [
  {
    title: 'Create & Sign',
    body: 'Generate .nota files for any supported resource type. Sign with ECDSA or EdDSA.',
  },
  {
    title: 'Verify & Resolve',
    body: 'Check verification status, resolve aliases (treasury.nota), validate signatures.',
  },
  {
    title: 'Submit for Verification',
    body: 'Push resources to the validator network. Track verification progress.',
  },
  {
    title: 'Parse & Display',
    body: 'Rich UI components for rendering .nota previews in your app. React, Swift, Kotlin.',
  },
  {
    title: 'Batch Operations',
    body: 'Create, verify, and manage thousands of .nota files programmatically.',
  },
  {
    title: 'Webhook Events',
    body: 'Get notified when verification status changes, disputes are filed, or validators respond.',
  },
];

const guides = [
  {
    title: 'Wallet Integration Guide',
    desc: 'Add .nota support to custodial or non-custodial wallets',
    href: '/developers#wallet',
  },
  {
    title: 'Exchange Integration',
    desc: 'Enable verified deposits and withdrawals with .nota files',
    href: '/developers#exchange',
  },
  {
    title: 'dApp Integration',
    desc: 'Accept and display verified resources in your decentralized application',
    href: '/developers#dapp',
  },
  {
    title: 'Enterprise API',
    desc: 'High-throughput verification for institutional use cases',
    href: '/developers#enterprise',
  },
];

const langs = ['JavaScript / TypeScript', 'Python', 'Rust', 'Go', 'Swift (iOS)', 'Kotlin (Android)'];

const tabs = [
  { label: 'JavaScript', code: jsCode, lang: 'javascript' },
  { label: 'Python', code: pyCode, lang: 'python' },
  { label: 'Rust', code: rustCode, lang: 'rust' },
];

export default function DevelopersPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{ background: 'var(--bg)' }}>
      {/* Hero */}
      <section className="page-hero" style={{ background: 'var(--bg-alt)' }}>
        <div className="page-hero-shell">
          <div className="label mb-4">Developer Docs</div>
          <h1 className="page-title mb-6 font-bold" style={{ color: 'var(--text)' }}>
            Build with <span style={{ color: 'var(--brand)' }}>Notareum</span>
          </h1>
          <p className="page-copy" style={{ color: 'var(--text-muted)' }}>
            Integrate verified blockchain resource sharing into your wallet, exchange, or dApp. SDKs for every major platform.
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="page-section" style={{ background: 'var(--bg)' }}>
        <div className="page-shell-narrow">
          <div className="text-center mb-12">
            <div className="label mb-3">Quick Start</div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>
              Create your first .nota file in 5 lines
            </h2>
          </div>

          {/* Tab buttons */}
          <div className="mb-0 flex w-full overflow-x-auto rounded-t-lg" style={{ border: '1px solid var(--border)' }}>
            {tabs.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className="shrink-0 px-4 py-2.5 text-sm font-medium transition-colors sm:px-5"
                style={{
                  background: activeTab === i ? 'var(--brand)' : 'transparent',
                  color: activeTab === i ? '#fff' : 'var(--text-muted)',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
          <pre className="rounded-t-none rounded-b-lg text-sm leading-relaxed" style={{ borderTop: 'none' }}>
            <code>{tabs[activeTab].code}</code>
          </pre>
        </div>
      </section>

      {/* SDK Features */}
      <section id="sdk" className="page-section-lg" style={{ background: 'var(--bg-alt)' }}>
        <div className="page-shell">
          <div className="text-center mb-14">
            <div className="label mb-3">SDK Capabilities</div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>Everything you need</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdkFeatures.map((f, i) => (
              <div key={i} className="card rounded-xl p-6">
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text)' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Languages */}
      <section className="page-section" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="page-shell">
          <div className="text-center mb-8">
            <div className="label mb-2">Supported Languages</div>
            <h2 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>Code in your language</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {langs.map((lang) => (
              <span
                key={lang}
                className="card px-4 py-2 rounded-lg text-sm font-mono"
                style={{ color: 'var(--text-body)' }}
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Guides */}
      <section className="page-section-lg" style={{ background: 'var(--bg-alt)' }}>
        <div className="page-shell">
          <div className="text-center mb-14">
            <div className="label mb-3">Integration Guides</div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>Step-by-step integration</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {guides.map((g, i) => (
              <Link key={i} href={g.href} className="card rounded-xl p-6 group transition-colors block">
                <h3 className="font-semibold mb-2 transition-colors" style={{ color: 'var(--text)' }}>
                  {g.title} <span style={{ color: 'var(--brand)' }}>&#8594;</span>
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{g.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section" style={{ background: 'var(--bg)' }}>
        <div className="page-shell-narrow text-center">
          <div className="card rounded-2xl p-8 sm:p-10" style={{ border: '1px solid var(--brand)' }}>
            <div className="label mb-4">Get Started</div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>Start building today</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/developers" className="btn-primary w-full sm:w-auto">Read Full Docs</Link>
              <a
                href="https://github.com/notareum"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto"
              >
                View on GitHub
              </a>
              <a
                href="https://discord.gg/notareum"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto"
              >
                Join Developer Discord
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
