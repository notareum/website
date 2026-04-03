'use client';

export default function CTABanner() {
  return (
    <section className="py-16 sm:py-20 lg:py-28" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="card rounded-2xl p-8 sm:p-10 lg:p-14" style={{ border: '1px solid var(--brand)', background: 'var(--card-bg)' }}>
          <span className="label mb-4 block">Get Started</span>
          <h2 className="mb-4 text-2xl font-bold sm:text-4xl" style={{ color: 'var(--text)' }}>
            Ready to build on Notareum?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base sm:text-lg" style={{ color: 'var(--text-muted)' }}>
            Integrate the .nota format into your wallet, exchange, or dApp.
            Our SDKs provide simple wrappers around complex cryptographic proofs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/developers" className="btn-primary w-full sm:w-auto">
              Read the Docs
            </a>
            <a href="/ecosystem" className="btn-secondary w-full sm:w-auto">
              Explore Ecosystem
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
