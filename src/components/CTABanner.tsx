'use client';

export default function CTABanner() {
  return (
    <section className="py-24 lg:py-32" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="card rounded-2xl p-10 lg:p-14" style={{ border: '1px solid var(--brand)', background: 'var(--card-bg)' }}>
          <span className="label mb-4 block">Get Started</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
            Ready to build on Notareum?
          </h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Integrate the .nota format into your wallet, exchange, or dApp.
            Our SDKs provide simple wrappers around complex cryptographic proofs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/developers" className="btn-primary">
              Read the Docs
            </a>
            <a href="/ecosystem" className="btn-secondary">
              Explore Ecosystem
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
