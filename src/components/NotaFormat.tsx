'use client';

export default function NotaFormat() {
  return (
    <section className="py-16 sm:py-20 lg:py-28" style={{ background: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }} id="protocol">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left - Description + steps */}
          <div>
            <span className="label mb-3 block">The .nota Format</span>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight mb-6" style={{ color: 'var(--text)' }}>
              Cryptographically Secured Portability
            </h2>
            <p className="mb-8 text-sm leading-relaxed sm:text-base" style={{ color: 'var(--text-muted)' }}>
              The <code className="font-mono text-sm" style={{ color: 'var(--brand)' }}>.nota</code> format is a
              lightweight, verifiable container for blockchain state and metadata. It
              encapsulates the payload, structural schema, and the cryptographic proof
              necessary for zero-trust verification across any supported environment.
            </p>

            {/* Step list */}
            <div className="relative pl-7 sm:pl-8">
              <div className="absolute bottom-0 left-[6px] top-0 w-px sm:left-[7px]" style={{ background: 'var(--border)' }} />
              {[
                {
                  num: '1',
                  title: 'Payload Serialization',
                  desc: 'Raw data is normalized and serialized deterministically to ensure consistent hashing across all platforms.',
                },
                {
                  num: '2',
                  title: 'Proof Generation',
                  desc: "A ZK or Merkle proof is generated based on the source chain's state root.",
                },
                {
                  num: '3',
                  title: 'Encapsulation',
                  desc: 'Data, schema, and proof are bundled into a single .nota binary or JSON artifact.',
                },
              ].map((step, i) => (
                <div key={i} className={`relative ${i < 2 ? 'pb-10' : ''}`}>
                  <div className="absolute -left-7 top-[6px] h-[15px] w-[15px] rounded-full sm:-left-8" style={{ background: 'var(--bg-alt)', border: '2px solid var(--brand)' }} />
                  <h4 className="font-normal mb-2" style={{ color: 'var(--text)' }}>
                    {step.num}. {step.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Code window */}
          <div className="rounded-xl overflow-hidden shadow-lg" style={{ border: '1px solid var(--card-border)' }}>
            <div className="flex justify-between items-center px-4 py-3 font-mono text-xs" style={{ background: 'var(--code-bg)', borderBottom: '1px solid var(--card-border)', color: 'var(--text-muted)' }}>
              <span>example.nota</span>
              <span>JSON Representation</span>
            </div>
            <div className="overflow-x-auto p-4 font-mono text-[13px] leading-[1.7] sm:p-6 sm:text-sm" style={{ background: 'var(--code-bg)', color: 'var(--text-body)' }}>
              <pre className="m-0" style={{ background: 'transparent', border: 'none', padding: 0 }}>
                <code>{`{
  `}<span style={{ color: 'var(--brand)' }}>&quot;header&quot;</span>{`: {
    `}<span style={{ color: 'var(--brand)' }}>&quot;version&quot;</span>{`: `}<span style={{ color: 'var(--accent)' }}>&quot;1.0.0&quot;</span>{`,
    `}<span style={{ color: 'var(--brand)' }}>&quot;network&quot;</span>{`: `}<span style={{ color: 'var(--accent)' }}>&quot;eip155:1&quot;</span>{`,
    `}<span style={{ color: 'var(--brand)' }}>&quot;timestamp&quot;</span>{`: `}<span style={{ color: 'var(--accent)' }}>1678886400</span>{`
  },
  `}<span style={{ color: 'var(--brand)' }}>&quot;payload&quot;</span>{`: {
    `}<span style={{ color: 'var(--brand)' }}>&quot;assetId&quot;</span>{`: `}<span style={{ color: 'var(--brand)' }}>&quot;0x7a2...f9c&quot;</span>{`,
    `}<span style={{ color: 'var(--brand)' }}>&quot;owner&quot;</span>{`: `}<span style={{ color: 'var(--brand)' }}>&quot;notareum.eth&quot;</span>{`,
    `}<span style={{ color: 'var(--brand)' }}>&quot;attributes&quot;</span>{`: [{`}<span style={{ color: 'var(--brand)' }}>&quot;trait_type&quot;</span>{`: `}<span style={{ color: 'var(--brand)' }}>&quot;Core&quot;</span>{`}]
  },
  `}<span style={{ color: 'var(--brand)' }}>&quot;proof&quot;</span>{`: {
    `}<span style={{ color: 'var(--brand)' }}>&quot;type&quot;</span>{`: `}<span style={{ color: 'var(--brand)' }}>&quot;MerklePatricia&quot;</span>{`,
    `}<span style={{ color: 'var(--brand)' }}>&quot;root&quot;</span>{`: `}<span style={{ color: 'var(--brand)' }}>&quot;0x8b3...1a4&quot;</span>{`,
    `}<span style={{ color: 'var(--brand)' }}>&quot;path&quot;</span>{`: [`}<span style={{ color: 'var(--brand)' }}>&quot;0x...&quot;</span>{`, `}<span style={{ color: 'var(--brand)' }}>&quot;0x...&quot;</span>{`]
  },
  `}<span style={{ color: 'var(--brand)' }}>&quot;signature&quot;</span>{`: `}<span style={{ color: 'var(--brand)' }}>&quot;0x32f9...7b1a&quot;</span>{`
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
