'use client';

const stats = [
  { value: '$2.8B+', label: 'Lost to address poisoning attacks (2023-2025)' },
  { value: '1 in 5', label: 'New crypto users have sent to a wrong address' },
  { value: '300%+', label: 'Increase in clipboard malware targeting crypto' },
  { value: '0', label: 'Confirmation steps before irreversible transactions' },
];

/* Inline illustration: clipboard malware mockup */
function ClipboardMalwareCard() {
  return (
    <div
      className="rounded-2xl p-6 sm:p-8 w-full"
      style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: 'color-mix(in srgb, var(--brand) 12%, transparent)', color: 'var(--brand)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div>
          <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>Send Assets</div>
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Paste destination address</div>
        </div>
      </div>

      {/* Address field */}
      <div className="mb-1">
        <div className="text-[10px] font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--brand)' }}>
          Recipient Address
        </div>
        <div
          className="flex items-center gap-2 rounded-lg px-4 py-3"
          style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)' }}
        >
          <span className="font-mono text-sm flex-1 truncate" style={{ color: 'var(--text-body)' }}>
            <span style={{ color: 'var(--brand)' }}>0x7a2b</span>
            <span>890cf58231548a892</span>
            <span style={{ color: '#ef4444', fontWeight: 700 }}>&nbsp;4&nbsp;</span>
            <span>92a912</span>
            <span style={{ color: 'var(--brand)', fontWeight: 600 }}>9f3e</span>
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--text-muted)', flexShrink: 0 }}>
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        </div>
      </div>

      {/* Warning */}
      <div
        className="mt-3 flex items-start gap-2.5 rounded-lg px-4 py-3"
        style={{ background: 'color-mix(in srgb, #ef4444 8%, transparent)', border: '1px solid color-mix(in srgb, #ef4444 20%, transparent)' }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" className="mt-0.5 flex-shrink-0">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        <span className="text-xs leading-relaxed" style={{ color: 'var(--text-body)' }}>
          Clipboard malware silently swapped the address while you were not looking.
        </span>
      </div>
    </div>
  );
}

/* Inline illustration: bank vs crypto comparison */
function ComparisonCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {/* Bank Transfer card */}
      <div
        className="rounded-2xl p-6 sm:p-8"
        style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: 'color-mix(in srgb, var(--brand) 12%, transparent)', color: 'var(--brand)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Bank Transfer</div>
            <div className="text-xs" style={{ color: 'var(--text-muted)' }}>The safety of name resolution</div>
          </div>
        </div>

        <div
          className="rounded-lg p-4 mb-4 text-sm leading-relaxed"
          style={{ background: 'var(--bg-alt)', color: 'var(--text-body)' }}
        >
          When you make a bank transfer, the system shows you the account holder&apos;s name before you confirm.
        </div>

        <div
          className="rounded-lg p-4 flex items-center gap-4"
          style={{ borderLeft: '3px solid #22c55e', background: 'color-mix(in srgb, #22c55e 6%, transparent)' }}
        >
          <div className="flex-1">
            <div className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--brand)' }}>
              Sending Funds To
            </div>
            <div className="text-lg font-semibold" style={{ color: 'var(--text)' }}>John Doe</div>
            <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Checking Account ending in ****4921</div>
          </div>
          <span
            className="flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium"
            style={{ background: 'color-mix(in srgb, #22c55e 12%, transparent)', color: '#22c55e' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Verified
          </span>
        </div>
      </div>

      {/* Crypto Transfer card (dark) */}
      <div
        className="rounded-2xl p-6 sm:p-8"
        style={{ background: '#0f1420', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.06)', color: '#9ca3af' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M16 3l5 5-5 5" /><path d="M21 8H9" /><path d="M8 21l-5-5 5-5" /><path d="M3 16h12" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-semibold" style={{ color: '#f9fafb' }}>Crypto Transfer</div>
            <div className="text-xs" style={{ color: '#9ca3af' }}>The void of confirmation</div>
          </div>
        </div>

        <div
          className="rounded-lg p-4 mb-4 text-sm leading-relaxed"
          style={{ background: 'rgba(255,255,255,0.04)', color: '#d1d5db' }}
        >
          There is no &quot;Are you sure this is John?&quot; confirmation. No name resolution. No second chance.
        </div>

        <div className="rounded-lg p-4 mb-3" style={{ background: 'rgba(255,255,255,0.04)' }}>
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: '#6b7280' }}>
                Sending Funds To
              </div>
              <div className="font-mono text-sm break-all" style={{ color: '#d1d5db' }}>
                0x7a2b890cf58231548a892f392a9129f3e
              </div>
            </div>
            <span
              className="flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.06)', color: '#9ca3af' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><path d="M12 16v.01" /><path d="M12 8v4" />
              </svg>
              Unknown
            </span>
          </div>
        </div>

        <div
          className="flex items-start gap-2.5 rounded-lg px-4 py-3"
          style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" className="mt-0.5 flex-shrink-0">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <span className="text-xs leading-relaxed" style={{ color: '#d1d5db' }}>
            If even one character is wrong, your money is gone. Permanently. Irreversibly.
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProblemStatement() {
  return (
    <section className="py-16 sm:py-20 lg:py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Side-by-side: problem text + clipboard illustration */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 mb-14 sm:mb-16">
          <div>
            <span className="label mb-3 block">The Problem</span>
            <h2
              className="mb-6 text-3xl font-normal tracking-tight sm:text-4xl lg:text-5xl"
              style={{ color: 'var(--text)' }}
            >
              Billions Lost to a Copy-Paste Problem
            </h2>
            <p
              className="text-base leading-relaxed sm:text-lg"
              style={{ color: 'var(--text-body)' }}
            >
              Every day, people share wallet addresses, transaction hashes, and contract addresses
              by copying and pasting raw hex strings. A 42-character jumble like{' '}
              <code className="font-mono text-sm" style={{ color: 'var(--brand)' }}>0x7a2b...9f3e</code>{' '}
              is supposed to represent a person, a business, a treasury. But it looks like gibberish
              to most people. And even experts get it wrong.
            </p>
          </div>
          <ClipboardMalwareCard />
        </div>

        {/* The Missing Feedback Loop */}
        <div className="mb-12 text-center max-w-2xl mx-auto sm:mb-14">
          <h3
            className="mb-4 text-2xl font-normal tracking-tight sm:text-3xl"
            style={{ color: 'var(--text)' }}
          >
            The Missing Feedback Loop
          </h3>
          <p className="text-base leading-relaxed sm:text-lg" style={{ color: 'var(--text-body)' }}>
            In traditional finance, confirmation prevents millions of errors daily. In crypto, you get
            nothing. You paste an address, hit send, and hope.
          </p>
        </div>

        {/* Bank vs Crypto comparison */}
        <div className="mb-14 sm:mb-16 max-w-4xl mx-auto">
          <ComparisonCards />
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {stats.map((stat) => (
            <div key={stat.label} className="card p-6 sm:p-7">
              <div
                className="mb-2 text-2xl font-medium font-mono tracking-tight sm:text-3xl"
                style={{ color: 'var(--brand)' }}
              >
                {stat.value}
              </div>
              <div className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
