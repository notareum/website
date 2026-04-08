'use client';

const useCases = [
  {
    num: '01',
    title: 'Sharing Wallet Addresses',
    desc: 'Send your address as a verifiable .nota file instead of a raw hex string. The recipient sees your name, chain, and verification status before sending.',
  },
  {
    num: '02',
    title: 'Payment Requests',
    desc: 'Create a payment request with amount, currency, and recipient verification baked in. Like a QR code, but portable, verifiable, and tamper-proof.',
  },
  {
    num: '03',
    title: 'Transaction Receipts',
    desc: 'Get a cryptographic receipt for every transaction. Shareable, verifiable, and permanently yours. Proof of payment that actually means something.',
  },
  {
    num: '04',
    title: 'Cross-Border Remittance',
    desc: 'Send payment instructions to family abroad with built-in verification. No more "did I use the right address?" No more hoping the money arrives.',
  },
  {
    num: '05',
    title: 'Merchant Checkout',
    desc: 'Accept crypto with a verified .nota payment page. Customers see they are paying the right merchant, not a phishing clone with a similar URL.',
  },
  {
    num: '06',
    title: 'Salary and Payroll',
    desc: 'Pay employees in crypto with verifiable .nota payslips showing employer identity, amount, chain, and timestamp. Auditable and portable.',
  },
  {
    num: '07',
    title: 'NFT Certificates',
    desc: 'Share NFT ownership and provenance as .nota files. Provable, portable, and immune to marketplace shutdowns or metadata link rot.',
  },
  {
    num: '08',
    title: 'IPFS and Arweave Sharing',
    desc: 'Share decentralized storage links as verified .nota files. Cryptographic proof that the CID or transaction ID points to exactly what it claims.',
  },
  {
    num: '09',
    title: 'Multi-sig Coordination',
    desc: 'Share transaction proposals with all signers as .nota files. Every signer verifies the same payload, the same destination, the same terms.',
  },
  {
    num: '10',
    title: 'Tax Documentation',
    desc: 'Export transaction history as .nota files for tax reporting. Cryptographically provable cost basis that auditors can independently verify.',
  },
  {
    num: '11',
    title: 'Developer Tooling',
    desc: 'Distribute verifiable smart contract ABIs, deployment addresses, and configuration across teams without relying on centralized registries.',
  },
  {
    num: '12',
    title: 'Enterprise Legal',
    desc: 'Immutable document custody and automated settlement for holding company transactions via .nota-wrapped cryptographic files.',
  },
  {
    num: '13',
    title: 'Supply Chain',
    desc: 'Cross-chain verifiable supply chain manifests protecting the integrity of logistics, certifications, and provenance data.',
  },
  {
    num: '14',
    title: 'DID and Identity',
    desc: 'Issue verifiable credentials wrapped in .nota format for instant identity verification on any supported network or application.',
  },
  {
    num: '15',
    title: 'DAO Governance',
    desc: 'Package proposals, vote receipts, and treasury reports as .nota files. Transparent governance artifacts that any member can verify.',
  },
  {
    num: '16',
    title: 'Insurance Claims',
    desc: 'Submit on-chain insurance claims with .nota-wrapped evidence: transaction records, timestamps, and cryptographic proof of loss.',
  },
];

export default function UseCases() {
  return (
    <section className="py-16 sm:py-20 lg:py-28" style={{ background: 'var(--bg)' }} id="use-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="label mb-3 block">Use Cases</span>
        <h2 className="mb-4 text-3xl font-normal tracking-tight sm:text-4xl" style={{ color: 'var(--text)' }}>
          One Format, Everywhere
        </h2>
        <p className="mb-10 max-w-2xl text-base sm:mb-12 sm:text-lg" style={{ color: 'var(--text-muted)' }}>
          From everyday transactions to enterprise operations, the .nota format brings verification
          and human readability to every interaction with a blockchain.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {useCases.map((uc, i) => {
            const accent = i % 2 === 0;
            return (
              <div
                key={uc.num}
                className="group relative flex min-h-[200px] flex-col overflow-hidden rounded-xl p-5 sm:min-h-[220px] sm:p-6"
                style={{
                  background: accent ? 'var(--brand)' : 'var(--bg-alt)',
                  color: accent ? '#ffffff' : 'var(--text)',
                }}
              >
                <div className="text-xs mb-3" style={{ opacity: 0.5 }}>{uc.num}</div>
                <div className="text-[0.875rem] leading-relaxed flex-1">{uc.desc}</div>
                <div className="text-[0.6rem] uppercase tracking-widest mt-4" style={{ opacity: 0.4 }}>{uc.title}</div>
                <div
                  className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-tl-lg transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{
                    background: accent ? '#ffffff' : 'var(--text)',
                    color: accent ? 'var(--brand)' : 'var(--bg)',
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
