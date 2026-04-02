import Link from 'next/link';
import ProtocolArchitecture from '@/components/ProtocolArchitecture';

const principles = [
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>),
    title: 'Chain Agnostic',
    body: 'Ethereum, Bitcoin, Solana, Cosmos, L2s, and any future chain. One format covers all.',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1" /><path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1" /></svg>),
    title: 'Human Readable',
    body: 'JSON-based structure that both machines and humans can parse and inspect.',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /><circle cx="12" cy="16" r="1" /></svg>),
    title: 'Cryptographically Verifiable',
    body: 'Digital signatures prove ownership and authenticity of every resource.',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M10 14L21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>),
    title: 'Extensible',
    body: 'Schema versioning and optional fields allow upgrades without breaking compatibility.',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" /><line x1="16" y1="8" x2="2" y2="22" /><line x1="17.5" y1="15" x2="9" y2="15" /></svg>),
    title: 'Lightweight',
    body: 'Typical .nota files are 1 to 2KB. Share via messaging apps, email, QR codes, or NFC.',
  },
];

const resourceTypes = [
  { type: 'address', desc: 'Wallet or account address', example: '0x... ETH wallet' },
  { type: 'contract', desc: 'Smart contract reference', example: 'Uniswap V3 Router' },
  { type: 'transaction', desc: 'Transaction receipt', example: 'Payment confirmation' },
  { type: 'nft', desc: 'Non-fungible token', example: 'CryptoPunk #1234' },
  { type: 'ipfs', desc: 'IPFS content identifier', example: 'Document, media, data' },
  { type: 'metadata', desc: 'Arbitrary structured data', example: 'KYC attestation' },
];

const verificationLevels = [
  {
    level: 'Basic',
    color: '#10b981',
    badgeBg: '#10b981',
    entityType: 'Addresses & Resources',
    desc: 'Automated on-chain existence check. Confirms the address or contract exists on the specified chain. No human review.',
    badge: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#10b981" />
        <path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    example: {
      name: '0x7a2b...9f3e',
      label: 'Personal Wallet',
      meta: 'Ethereum Mainnet',
    },
  },
  {
    level: 'Enhanced',
    color: '#3A6FE5',
    badgeBg: '#3A6FE5',
    entityType: 'Projects & Protocols',
    desc: 'Community validator review. Multiple validators independently verify the resource against external data (project websites, social profiles, contract source code).',
    badge: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 1l3.09 6.26L22 8.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 13.14l-5-4.87 6.91-1.01L12 1z" fill="#3A6FE5" />
        <path d="M9.5 12l2 2 3.5-3.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    example: {
      name: 'Uniswap V3 Router',
      label: 'Verified Contract',
      meta: 'Ethereum · 8 validators',
    },
  },
  {
    level: 'Institutional',
    color: '#a855f7',
    badgeBg: '#a855f7',
    entityType: 'Regulated Entities & Organizations',
    desc: 'KYC-linked verification. The resource owner provides identity documentation reviewed by accredited validators. Suitable for regulated entities.',
    badge: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 1l2.39 4.84 5.34.78-3.87 3.77.91 5.34L12 13.27l-4.77 2.46.91-5.34-3.87-3.77 5.34-.78L12 1z" fill="#a855f7" />
        <rect x="6" y="16" width="12" height="7" rx="1" fill="#a855f7" />
        <path d="M9 19.5h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9.5 12l2 2 3-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    example: {
      name: 'Notareum Treasury',
      label: 'Institutional Wallet',
      meta: 'Ethereum · KYC verified',
    },
  },
];

const chains = [
  'Ethereum', 'Polygon', 'Arbitrum', 'Optimism', 'Base', 'Bitcoin',
  'Solana', 'Avalanche', 'BNB Chain', 'Cosmos', 'Fantom', 'zkSync',
];

const notaFileCode = `{
  "version": "1.0",
  "type": "address",
  "chain": {
    "name": "ethereum",
    "chainId": 1,
    "network": "mainnet"
  },
  "resource": {
    "identifier": "0x1a2b3c...def",
    "name": "Notareum Treasury",
    "alias": "treasury.nota",
    "description": "Official protocol treasury wallet"
  },
  "verification": {
    "status": "verified",
    "level": "institutional",
    "validators": ["0xval1...", "0xval2...", "0xval3..."],
    "proofHash": "0xabc123..."
  },
  "signature": {
    "algorithm": "ECDSA",
    "curve": "secp256k1",
    "address": "0xsigner...",
    "timestamp": 1709251200
  }
}`;

export default function ProtocolPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      {/* Hero - V5 blue hero */}
      <section className="hero-blue py-24 lg:py-32 text-center">
        <div className="hero-shape-1" />
        <div className="hero-shape-2" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="label mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>Notareum Protocol</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            The <span style={{ color: '#93B8FF' }}>.nota</span> File Format
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            A universal, cryptographically verifiable container for blockchain resource sharing. Chain-agnostic. Human-readable. Under 2KB.
          </p>
        </div>
      </section>

      {/* Protocol Architecture */}
      <ProtocolArchitecture />

      {/* Design Principles */}
      <section className="py-20" style={{ background: 'var(--bg-alt)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="label mb-3">Design Philosophy</div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>Built on five principles</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {principles.map((p, i) => (
              <div key={i} className="card rounded-xl p-6 text-center">
                <div className="mb-3" style={{ color: 'var(--brand)' }}>{p.icon}</div>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: 'var(--text)' }}>{p.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* File Structure */}
      <section id="file-format" className="py-20 lg:py-28" style={{ background: 'var(--bg)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="label mb-3">File Format</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: 'var(--text)' }}>Inside a .nota file</h2>
              <p className="leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                Every .nota file is a JSON object with four top-level sections: chain identification, resource details, verification status, and a cryptographic signature. The format is human-readable and machine-parseable with no binary dependencies.
              </p>
              <ul className="space-y-3">
                {['version: Schema version for forward compatibility', 'chain: Network and chain ID identification', 'resource: The actual blockchain resource and metadata', 'verification: On-chain proof and validator list', 'signature: ECDSA or EdDSA proof of authenticity'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5" style={{ color: 'var(--brand)' }}>&#9679;</span>
                    <span style={{ color: 'var(--text-muted)' }}><span className="font-mono" style={{ color: 'var(--text)' }}>{item.split(':')[0]}</span>: {item.split(':')[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <pre className="text-xs lg:text-sm leading-relaxed">
                <code>{notaFileCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Types */}
      <section className="py-20" style={{ background: 'var(--bg-alt)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="label mb-3">Resource Types</div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>One format, many resource types</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <th className="text-left py-3 px-4 font-medium uppercase tracking-wider text-xs" style={{ color: 'var(--text-muted)' }}>Type</th>
                  <th className="text-left py-3 px-4 font-medium uppercase tracking-wider text-xs" style={{ color: 'var(--text-muted)' }}>Description</th>
                  <th className="text-left py-3 px-4 font-medium uppercase tracking-wider text-xs" style={{ color: 'var(--text-muted)' }}>Example</th>
                </tr>
              </thead>
              <tbody>
                {resourceTypes.map((r, i) => (
                  <tr key={i} className="transition-colors" style={{ borderBottom: '1px solid var(--border)' }}>
                    <td className="py-4 px-4">
                      <span className="font-mono px-2 py-0.5 rounded text-xs" style={{ color: 'var(--brand)', background: 'color-mix(in srgb, var(--brand) 10%, transparent)' }}>{r.type}</span>
                    </td>
                    <td className="py-4 px-4" style={{ color: 'var(--text-body)' }}>{r.desc}</td>
                    <td className="py-4 px-4" style={{ color: 'var(--text-muted)' }}>{r.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Verification Engine */}
      <section id="verification" className="py-20 lg:py-28" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="label mb-3">Verification Engine</div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>Decentralized verification you can trust</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--text)' }}>How verification works</h3>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                Notareum uses a staking-based verification model. Validators lock $NOTA tokens as collateral and verify that blockchain resources match their claimed metadata. If a validator approves a fraudulent resource, their stake is slashed. Honest validators earn rewards.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                A resource achieves &quot;verified&quot; status when a supermajority (&gt;66%) of assigned validators approve it. Disputed resources enter arbitration, where a larger validator pool reviews the case.
              </p>
            </div>
            <div className="space-y-4">
              {verificationLevels.map((v, i) => (
                <div key={i} className="card rounded-xl p-5" style={{ borderLeft: `3px solid ${v.color}` }}>
                  <div className="flex items-center gap-3 mb-1">
                    {v.badge}
                    <span className="font-semibold" style={{ color: 'var(--text)' }}>{v.level}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `color-mix(in srgb, ${v.color} 12%, transparent)`, color: v.color }}>{v.entityType}</span>
                  </div>
                  <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-muted)' }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Client render examples */}
          <div className="mt-4">
            <div className="text-center mb-10">
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text)' }}>How clients render verification badges</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Example of how wallets, explorers, and dApps display each verification level to end users.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {verificationLevels.map((v, i) => (
                <div key={i} className="card rounded-xl overflow-hidden">
                  {/* Simulated wallet UI header */}
                  <div className="px-5 py-3 flex items-center gap-2 text-xs font-medium" style={{ background: 'var(--bg-alt)', borderBottom: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg>
                    Wallet Client Preview
                  </div>
                  {/* Simulated resource card */}
                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      {/* Avatar placeholder */}
                      <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-white text-xs font-bold" style={{ background: v.color }}>
                        {v.example.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-sm truncate" style={{ color: 'var(--text)' }}>{v.example.name}</span>
                          {v.badge}
                        </div>
                        <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{v.example.label}</div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between py-2.5 px-3 rounded-lg text-xs" style={{ background: `color-mix(in srgb, ${v.color} 8%, var(--bg-alt))`, border: `1px solid color-mix(in srgb, ${v.color} 20%, transparent)` }}>
                      <span style={{ color: 'var(--text-muted)' }}>{v.example.meta}</span>
                      <span className="font-medium flex items-center gap-1" style={{ color: v.color }}>
                        {v.badge}
                        {v.level} Verified
                      </span>
                    </div>
                    {/* Trust indicator bar */}
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                        <div className="h-full rounded-full" style={{ width: i === 0 ? '33%' : i === 1 ? '66%' : '100%', background: v.color }} />
                      </div>
                      <span className="text-[10px] font-medium" style={{ color: v.color }}>Trust {i === 0 ? 'L1' : i === 1 ? 'L2' : 'L3'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chain Support */}
      <section className="py-20" style={{ background: 'var(--bg-alt)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="label mb-3">Multi-Chain</div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>Every chain. One standard.</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {chains.map((chain) => (
              <span
                key={chain}
                className="card px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                style={{ color: 'var(--text-body)' }}
              >
                {chain}
              </span>
            ))}
          </div>
          <p className="text-center text-sm" style={{ color: 'var(--text-muted)' }}>+ More chains added continuously</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28" style={{ background: 'var(--bg)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>Ready to integrate the .nota format?</h2>
          <p className="mb-8" style={{ color: 'var(--text-muted)' }}>Check out the developer documentation and SDKs to get started.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/developers" className="btn-primary">View Developer Docs</Link>
            <Link href="/whitepaper" className="btn-secondary">Read the Whitepaper</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
