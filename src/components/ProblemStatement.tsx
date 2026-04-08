'use client';

const stats = [
  { value: '$2.8B+', label: 'Lost to address poisoning attacks (2023-2025)' },
  { value: '1 in 5', label: 'New crypto users have sent to a wrong address' },
  { value: '300%+', label: 'Increase in clipboard malware targeting crypto' },
  { value: '0', label: 'Confirmation steps before irreversible transactions' },
];

export default function ProblemStatement() {
  return (
    <section className="py-16 sm:py-20 lg:py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="label mb-3 block">The Problem</span>
        <h2
          className="mb-8 text-3xl font-normal tracking-tight sm:mb-10 sm:text-4xl lg:text-5xl"
          style={{ color: 'var(--text)' }}
        >
          Billions Lost to a Copy-Paste Problem
        </h2>

        <div className="max-w-3xl space-y-6">
          <p className="text-base leading-relaxed sm:text-lg" style={{ color: 'var(--text-body)' }}>
            Every day, people share wallet addresses, transaction hashes, NFT identifiers, and contract addresses
            by copying and pasting raw hex strings. A 42-character jumble of letters and numbers like{' '}
            <code className="font-mono text-sm" style={{ color: 'var(--brand)' }}>0x7a2b...9f3e</code>{' '}
            is supposed to represent a person, a business, a treasury. But it looks like gibberish to anyone
            who is not a developer. And even developers get it wrong.
          </p>
          <p className="text-base leading-relaxed sm:text-lg" style={{ color: 'var(--text-body)' }}>
            When you make a bank transfer, the system shows you the account holder&apos;s name before you confirm.
            That one small feedback loop prevents millions of errors every day. In crypto, you get nothing. You paste
            an address, hit send, and hope. There is no &quot;Are you sure this is John?&quot; confirmation.
            No name resolution. No second chance. If even one character is wrong, or if clipboard malware silently
            swapped the address while you were not looking, your money is gone. Permanently. Irreversibly.
          </p>
          <p className="text-base leading-relaxed sm:text-lg" style={{ color: 'var(--text-body)' }}>
            This is not a fringe problem. Address poisoning attacks, clipboard hijackers, fake contract scams,
            and plain human error have cost the industry billions. They have cost individuals their life savings,
            cost businesses months of revenue, and cost the entire ecosystem its credibility with mainstream users.
            The technology that promises to bank the unbanked cannot even confirm who you are sending money to.
          </p>
        </div>

        {/* Stat cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card p-6 sm:p-7"
            >
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
