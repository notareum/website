'use client';

export default function SolutionStatement() {
  return (
    <section className="py-16 sm:py-20 lg:py-28" style={{ backgroundColor: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <span className="label mb-3 block">The Solution</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight mb-6" style={{ color: 'var(--text)' }}>
            Notareum Introduces the{' '}
            <code className="font-mono" style={{ color: 'var(--brand)' }}>.nota</code>{' '}
            File
          </h2>
          <p className="text-base leading-relaxed sm:text-lg" style={{ color: 'var(--text-body)' }}>
            Instead of copying raw hex strings and hoping for the best, Notareum introduces a
            Universal Transfer Interface: a portable, verifiable{' '}
            <code className="font-mono text-sm" style={{ color: 'var(--brand)' }}>.nota</code>{' '}
            file format that wraps any blockchain resource (wallet addresses, transaction hashes,
            NFTs, IPFS identifiers, contract addresses, metadata) into a single file you can share
            the same way you share photos, documents, or links.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="card p-6 sm:p-8">
            <div
              className="w-12 h-12 rounded flex items-center justify-center mb-6"
              style={{
                border: '1px solid var(--accent)',
                background: 'color-mix(in srgb, var(--accent) 10%, transparent)',
                color: 'var(--accent)',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3 className="font-normal text-lg mb-3" style={{ color: 'var(--text)' }}>Identity Resolution</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Every .nota file carries human-readable metadata: who owns the address, what chain
              it belongs to, and its verification status. Like seeing &quot;John Doe, Checking Account&quot;
              instead of a 42-character hex string.
            </p>
          </div>

          <div className="card p-6 sm:p-8">
            <div
              className="w-12 h-12 rounded flex items-center justify-center mb-6"
              style={{
                border: '1px solid var(--accent)',
                background: 'color-mix(in srgb, var(--accent) 10%, transparent)',
                color: 'var(--accent)',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="font-normal text-lg mb-3" style={{ color: 'var(--text)' }}>Cryptographic Verification</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              The file is signed and sealed with a cryptographic proof. If anyone tampers with the
              address or metadata, clipboard malware or otherwise, the verification fails before
              you ever hit send.
            </p>
          </div>

          <div className="card p-6 sm:p-8">
            <div
              className="w-12 h-12 rounded flex items-center justify-center mb-6"
              style={{
                border: '1px solid var(--accent)',
                background: 'color-mix(in srgb, var(--accent) 10%, transparent)',
                color: 'var(--accent)',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                <polyline points="13 2 13 9 20 9" />
              </svg>
            </div>
            <h3 className="font-normal text-lg mb-3" style={{ color: 'var(--text)' }}>Universal Portability</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Share .nota files over email, messaging apps, AirDrop, QR codes, or any file-sharing method.
              No more copy-paste. No more praying. Just attach a file and the recipient verifies it automatically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
