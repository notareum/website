'use client';

const challenges = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
    ),
    title: 'The Copy-Paste Trap',
    desc: 'Sharing blockchain addresses means copying hex strings and hoping you got it right. One wrong character and your money is gone forever. There is no undo button, no customer support, no chargeback. Just loss.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <line x1="2" y1="2" x2="22" y2="22" />
      </svg>
    ),
    title: 'No Name, No Face',
    desc: 'When you send a bank transfer, you see the recipient name before confirming. In crypto, you stare at 0x7a2b... and just trust. No identity resolution, no confirmation, no human-readable feedback at all.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: 'Invisible Thieves',
    desc: 'Clipboard malware silently replaces wallet addresses. Address poisoning floods your history with lookalike addresses. Fake contracts impersonate real ones. The threats are invisible, and by the time you notice, it is already too late.',
  },
];

export default function Challenges() {
  return (
    <section className="py-16 sm:py-20 lg:py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="label mb-3 block">The Challenge</span>
        <h2 className="mb-10 text-3xl font-normal tracking-tight sm:mb-12 sm:text-4xl" style={{ color: 'var(--text)' }}>
          Why This Keeps Happening
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((c, i) => (
            <div
              key={i}
              className="card group p-6 sm:p-8"
            >
              <div
                className="w-12 h-12 rounded flex items-center justify-center mb-6"
                style={{
                  border: '1px solid var(--accent)',
                  background: 'color-mix(in srgb, var(--accent) 10%, transparent)',
                  color: 'var(--accent)',
                }}
              >
                {c.icon}
              </div>
              <h3 className="font-normal text-lg mb-3" style={{ color: 'var(--text)' }}>{c.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
