import Link from 'next/link';
import ProtocolArchitecture from '@/components/ProtocolArchitecture';

const principles = [
  {
    icon: '⬡',
    title: 'Chain Agnostic',
    body: 'Ethereum, Bitcoin, Solana, Cosmos, L2s, and any future chain. One format covers all.',
  },
  {
    icon: '{ }',
    title: 'Human Readable',
    body: 'JSON-based structure that both machines and humans can parse and inspect.',
  },
  {
    icon: '🔐',
    title: 'Cryptographically Verifiable',
    body: 'Digital signatures prove ownership and authenticity of every resource.',
  },
  {
    icon: '↗',
    title: 'Extensible',
    body: 'Schema versioning and optional fields allow upgrades without breaking compatibility.',
  },
  {
    icon: '◎',
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
    desc: 'Automated on-chain existence check. Confirms the address or contract exists on the specified chain. No human review.',
  },
  {
    level: 'Enhanced',
    color: '#3b82f6',
    desc: 'Community validator review. Multiple validators independently verify the resource against external data (project websites, social profiles, contract source code).',
  },
  {
    level: 'Institutional',
    color: '#a855f7',
    desc: 'KYC-linked verification. The resource owner provides identity documentation reviewed by accredited validators. Suitable for regulated entities.',
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
          <div className="label mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>Protocol Specification</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            The <span style={{ color: '#22d3ee' }}>.nota</span> File Format
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            A universal, cryptographically verifiable container for blockchain resources. Chain-agnostic. Human-readable. Under 2KB.
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
                <div className="text-2xl mb-3 font-mono" style={{ color: 'var(--brand)' }}>{p.icon}</div>
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
                <div key={i} className="card rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: `color-mix(in srgb, ${v.color} 15%, transparent)`, color: v.color }}>{v.level}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{v.desc}</p>
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
