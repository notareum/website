'use client';

import type { FocusEvent } from 'react';
import { useEffect, useState } from 'react';

const stories = [
  {
    id: '01',
    title: 'A poisoned history entry looked familiar',
    threat: 'Address poisoning',
    persona: 'DeFi trader',
    source: 'Public account, 2024',
    impact: '$120K in ETH lost',
    appearedAs: 'A recent address that looked identical at a glance',
    failure: 'Transaction history became the trust signal',
    referenceTitle: 'Ledger: Address poisoning attacks in crypto',
    referenceUrl:
      'https://www.ledger.com/academy/topics/security/what-are-address-poisoning-attacks-in-crypto-and-how-to-avoid-them',
    quote:
      'I copied the address from my transaction history. It looked identical to the one I always use. But someone had poisoned my history with a lookalike address. $120,000 in ETH, gone in one click.',
  },
  {
    id: '02',
    title: 'A checkout terminal became the attacker',
    threat: 'Clipboard hijacker',
    persona: 'E-commerce operator',
    source: 'Reddit report',
    impact: 'An entire quarter of revenue lost',
    appearedAs: 'A normal checkout flow on the merchant terminal',
    failure: 'Copied wallet data was silently replaced',
    referenceTitle: 'Halborn: Clipper malware and clipboard hijacking',
    referenceUrl: 'https://www.halborn.com/blog/post/clipper-malware-how-hackers-steal-crypto-with-clipboard-hijacking',
    quote:
      'We ran a small online store accepting crypto. For three months, a clipboard hijacker on our checkout terminal was silently replacing our wallet address with theirs. We lost an entire quarter of revenue before we noticed.',
  },
  {
    id: '03',
    title: 'A scam reply inside a family chat',
    threat: 'Social impersonation',
    persona: 'Remittance recipient',
    source: 'Nigeria remittance story',
    impact: 'Relocation funds diverted',
    appearedAs: 'Instructions inside the same group thread',
    failure: 'No verified recipient identity before sending',
    referenceTitle: 'Uniswap: WhatsApp or Telegram support scams',
    referenceUrl: 'https://support.uniswap.org/hc/en-us/articles/17523201861389-WhatsApp-or-Telegram-support-scams',
    quote:
      'My grandson sent me instructions to receive USDT from abroad. I copied the address from what I thought was his message. It was a scam reply in the same group chat. My family had pooled money to help me relocate.',
  },
  {
    id: '04',
    title: 'A perfect interface hid a fake router',
    threat: 'Contract phishing',
    persona: 'DeFi user',
    source: 'Public account, 2023',
    impact: 'Entire wallet drained',
    appearedAs: 'The familiar Uniswap interface and URL pattern',
    failure: 'Approval went to a malicious contract clone',
    referenceTitle: 'Uniswap: Crypto wallet signature scams',
    referenceUrl: 'https://support.uniswap.org/hc/en-us/articles/40050562560781-Crypto-Wallet-Signature-Scams',
    quote:
      'I approved what I thought was the Uniswap router contract. The URL was right, the interface looked perfect. But the contract address was a phishing clone. My entire wallet was drained in seconds.',
  },
  {
    id: '05',
    title: 'Five signers missed two characters',
    threat: 'Treasury ops error',
    persona: 'DAO contributor',
    source: 'Governance forum report',
    impact: '$400K treasury transfer lost',
    appearedAs: 'An address copied from recent multisig activity',
    failure: 'Human review relied on visual matching alone',
    referenceTitle: 'Ledger: Address poisoning and transaction interception',
    referenceUrl:
      'https://www.ledger.com/academy/topics/security/what-are-address-poisoning-attacks-in-crypto-and-how-to-avoid-them',
    quote:
      'Our DAO treasury multisig sent $400K to an address from our transaction history that had been poisoned. Five signers approved it. None of us caught the difference. It was the last two characters.',
  },
  {
    id: '06',
    title: 'A convenience extension intercepted payment',
    threat: 'Browser malware',
    persona: 'Freelance developer',
    source: 'Public account, 2024',
    impact: '2.5 ETH payment lost',
    appearedAs: 'A routine client payment and copy flow',
    failure: 'Clipboard trust was broken by an installed extension',
    referenceTitle: 'Halborn: Clipper malware via unofficial apps and plugins',
    referenceUrl: 'https://www.halborn.com/blog/post/clipper-malware-how-hackers-steal-crypto-with-clipboard-hijacking',
    quote:
      'I am a freelance developer. A client paid me 2.5 ETH for a month of work. A browser extension I installed for "convenience" had a clipboard hijacker. The payment went to someone else. I had no recourse.',
  },
  {
    id: '07',
    title: 'A fake DM broke a collector sale',
    threat: 'Direct-message impersonation',
    persona: 'NFT artist',
    source: 'Twitter/X post',
    impact: '8 ETH sale collapsed',
    appearedAs: 'A buyer handoff that looked legitimate in chat',
    failure: 'Counterparty identity was never verified',
    referenceTitle: 'Uniswap: Giveaway promotion scams on social platforms',
    referenceUrl: 'https://support.uniswap.org/hc/en-us/articles/17522955185421-Giveaway-promotion-scams',
    quote:
      'A collector wanted to buy my NFT for 8 ETH. They sent payment to what they thought was my address, but it was a phished version from a fake DM. Neither of us got the funds. The trust was broken.',
  },
];

const ROTATION_MS = 7000;
const PROGRESS_TICK_MS = 80;

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  const rotation = direction === 'left' ? 'rotate(180deg)' : 'none';

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: rotation }}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export default function StoriesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const activeStory = stories[activeIndex];
  const uniqueThreatCount = new Set(stories.map((story) => story.threat)).size;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const syncPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    syncPreference();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', syncPreference);

      return () => {
        mediaQuery.removeEventListener('change', syncPreference);
      };
    }

    mediaQuery.addListener(syncPreference);

    return () => {
      mediaQuery.removeListener(syncPreference);
    };
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) {
      return;
    }

    const step = (PROGRESS_TICK_MS / ROTATION_MS) * 100;
    const intervalId = window.setInterval(() => {
      setProgress((currentProgress) => Math.min(currentProgress + step, 100));
    }, PROGRESS_TICK_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused, prefersReducedMotion]);

  useEffect(() => {
    if (progress < 100) {
      return;
    }

    setActiveIndex((currentIndex) => (currentIndex + 1) % stories.length);
    setProgress(0);
  }, [progress]);

  const setStory = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  const moveStory = (direction: -1 | 1) => {
    setActiveIndex((currentIndex) => (currentIndex + direction + stories.length) % stories.length);
    setProgress(0);
  };

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsPaused(false);
    }
  };

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
      style={{
        background:
          'linear-gradient(180deg, var(--bg-alt) 0%, color-mix(in srgb, var(--brand-fog) 24%, var(--bg-alt)) 100%)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-56"
        style={{
          background:
            'radial-gradient(circle at top left, color-mix(in srgb, var(--brand) 14%, transparent) 0%, transparent 58%)',
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full blur-3xl"
        style={{
          background: 'color-mix(in srgb, var(--brand-fog) 60%, transparent)',
          opacity: 0.9,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-end">
          <div className="min-w-0 max-w-3xl">
            <span className="label mb-3 block">Real Stories</span>
            <h2
              className="text-3xl font-normal tracking-tight sm:text-4xl lg:text-5xl"
              style={{ color: 'var(--text)' }}
            >
              The failure mode is technical. The damage is human.
            </h2>
            <p
              className="mt-4 max-w-2xl text-sm leading-7 sm:text-base"
              style={{ color: 'var(--text-muted)' }}
            >
              These incidents span trading, treasury operations, remittance, creator commerce, and everyday payments.
              The pattern is consistent: the interface looked credible long enough for a user to trust the wrong thing.
            </p>
          </div>

          <div
            className="min-w-0 rounded-[24px] p-5 sm:p-6"
            style={{
              background: 'color-mix(in srgb, var(--card-bg) 82%, var(--brand-fog))',
              border: '1px solid color-mix(in srgb, var(--brand) 18%, var(--card-border))',
              boxShadow: '0 18px 45px color-mix(in srgb, var(--brand) 8%, transparent)',
            }}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <div
                  className="font-medium uppercase"
                  style={{ color: 'var(--accent)', fontSize: '0.56rem', letterSpacing: '0.22em', lineHeight: 1.1 }}
                >
                  Incident Archive
                </div>
                <div className="mt-2 text-sm leading-6" style={{ color: 'var(--text-body)' }}>
                  {stories.length} documented scenarios across {uniqueThreatCount} recurring failure patterns.
                </div>
              </div>
              <div
                className="rounded-full"
                style={{
                  background: prefersReducedMotion
                    ? 'color-mix(in srgb, var(--slate) 10%, transparent)'
                    : 'color-mix(in srgb, var(--brand) 12%, transparent)',
                  color: prefersReducedMotion ? 'var(--slate)' : 'var(--brand-strong)',
                  fontSize: '0.56rem',
                  letterSpacing: '0.2em',
                  lineHeight: 1.05,
                  padding: '0.42rem 0.7rem',
                }}
              >
                {prefersReducedMotion ? 'Manual review' : isPaused ? 'Paused' : 'Auto-rotating'}
              </div>
            </div>
            <p className="mt-4 text-xs leading-6" style={{ color: 'var(--text-muted)' }}>
              Condensed composite narratives informed by public incident reporting and threat research. Each story links to a related public reference.
            </p>
          </div>
        </div>

        <div
          className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={handleBlur}
        >
          <div className="order-2 min-w-0 lg:order-1">
            <div
              className="flex w-full gap-3 overflow-x-auto pb-2 lg:grid lg:max-h-[44rem] lg:overflow-visible lg:pb-0"
              role="tablist"
              aria-label="Incident stories"
            >
              {stories.map((story, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={story.id}
                    type="button"
                    id={`story-tab-${story.id}`}
                    role="tab"
                    aria-controls={`story-panel-${story.id}`}
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setStory(index)}
                    className="min-w-[250px] rounded-[22px] p-4 text-left transition-all duration-300 sm:min-w-[280px] sm:p-5 lg:min-w-0"
                    style={{
                      background: isActive
                        ? 'linear-gradient(135deg, color-mix(in srgb, var(--brand) 14%, var(--card-bg)) 0%, color-mix(in srgb, var(--brand-fog) 60%, var(--card-bg)) 100%)'
                        : 'color-mix(in srgb, var(--card-bg) 94%, var(--bg-alt))',
                      border: isActive
                        ? '1px solid color-mix(in srgb, var(--brand) 32%, var(--card-border))'
                        : '1px solid var(--card-border)',
                      boxShadow: isActive
                        ? '0 18px 36px color-mix(in srgb, var(--brand) 10%, transparent)'
                        : '0 8px 22px color-mix(in srgb, var(--text) 4%, transparent)',
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div
                          className="font-mono uppercase"
                          style={{ color: 'var(--accent)', fontSize: '0.56rem', letterSpacing: '0.24em', lineHeight: 1.1 }}
                        >
                          Case {story.id}
                        </div>
                        <h3 className="mt-3 text-base font-normal leading-6 sm:text-lg" style={{ color: 'var(--text)' }}>
                          {story.title}
                        </h3>
                      </div>
                      <div
                        className="rounded-full whitespace-nowrap"
                        style={{
                          background: isActive
                            ? 'color-mix(in srgb, var(--brand) 14%, transparent)'
                            : 'color-mix(in srgb, var(--slate) 10%, transparent)',
                          color: isActive ? 'var(--brand-strong)' : 'var(--slate)',
                          fontSize: '0.53rem',
                          letterSpacing: '0.18em',
                          lineHeight: 1.15,
                          padding: '0.38rem 0.62rem',
                        }}
                      >
                        {story.threat}
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-6" style={{ color: 'var(--text-muted)' }}>
                      {story.persona} · {story.impact}
                    </p>

                    <div className="mt-5 rounded-full" style={{ background: 'color-mix(in srgb, var(--border) 85%, transparent)', height: '2px' }}>
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: isActive ? `${progress}%` : '0%',
                          background: 'var(--brand)',
                        }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <article
            id={`story-panel-${activeStory.id}`}
            role="tabpanel"
            aria-labelledby={`story-tab-${activeStory.id}`}
            className="order-1 min-w-0 overflow-hidden rounded-[28px] p-6 sm:p-8 lg:order-2 lg:p-10"
            style={{
              background:
                'linear-gradient(145deg, color-mix(in srgb, var(--card-bg) 82%, var(--brand-fog)) 0%, color-mix(in srgb, var(--card-bg) 96%, var(--bg-alt)) 52%, color-mix(in srgb, var(--brand-fog) 32%, var(--card-bg)) 100%)',
              border: '1px solid color-mix(in srgb, var(--brand) 18%, var(--card-border))',
              boxShadow: '0 30px 80px color-mix(in srgb, var(--brand) 12%, transparent)',
            }}
          >
            <div className="mb-6 flex gap-2">
              {stories.map((story, index) => (
                <div
                  key={story.id}
                    className="flex-1 overflow-hidden rounded-full"
                    style={{ background: 'color-mix(in srgb, var(--border) 75%, transparent)', height: '3px' }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-200"
                    style={{
                      width: index === activeIndex ? `${progress}%` : index < activeIndex ? '100%' : '0%',
                      background: 'var(--brand)',
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-start sm:justify-between" style={{ borderColor: 'color-mix(in srgb, var(--brand) 14%, var(--border))' }}>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="rounded-full font-mono uppercase"
                    style={{
                      background: 'color-mix(in srgb, var(--brand) 12%, transparent)',
                      color: 'var(--brand-strong)',
                      fontSize: '0.56rem',
                      letterSpacing: '0.21em',
                      lineHeight: 1.05,
                      padding: '0.42rem 0.78rem',
                    }}
                  >
                    Case {activeStory.id}
                  </span>
                  <span
                    className="rounded-full whitespace-nowrap font-medium uppercase"
                    style={{
                      background: 'color-mix(in srgb, var(--slate) 10%, transparent)',
                      color: 'var(--slate)',
                      fontSize: '0.56rem',
                      letterSpacing: '0.19em',
                      lineHeight: 1.05,
                      padding: '0.42rem 0.78rem',
                    }}
                  >
                    {activeStory.threat}
                  </span>
                </div>

                <h3 className="mt-4 max-w-2xl text-2xl font-normal leading-tight sm:text-3xl lg:text-[2.2rem]" style={{ color: 'var(--text)' }}>
                  {activeStory.title}
                </h3>
              </div>

              <div
                className="w-fit rounded-[18px]"
                style={{
                  background: 'color-mix(in srgb, var(--bg) 72%, transparent)',
                  border: '1px solid color-mix(in srgb, var(--brand) 10%, var(--card-border))',
                  padding: '0.72rem 0.82rem 0.78rem',
                }}
              >
                <div
                  className="font-medium uppercase"
                  style={{ color: 'var(--text-muted)', fontSize: '0.56rem', letterSpacing: '0.21em', lineHeight: 1.1 }}
                >
                  Human cost
                </div>
                <div className="mt-2 text-sm font-medium sm:text-[0.95rem]" style={{ color: 'var(--text)' }}>
                  {activeStory.impact}
                </div>
              </div>
            </div>

            <blockquote className="mt-8 max-w-3xl text-xl font-normal leading-[1.45] sm:text-2xl sm:leading-[1.5]" style={{ color: 'var(--text-body)' }}>
              &ldquo;{activeStory.quote}&rdquo;
            </blockquote>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              <div
                className="rounded-[20px] p-4"
                style={{
                  background: 'color-mix(in srgb, var(--bg) 72%, transparent)',
                  border: '1px solid color-mix(in srgb, var(--brand) 10%, var(--card-border))',
                }}
              >
                <div
                  className="font-medium uppercase"
                  style={{ color: 'var(--accent)', fontSize: '0.56rem', letterSpacing: '0.21em', lineHeight: 1.1 }}
                >
                  Persona
                </div>
                <div className="mt-2 text-sm leading-6 sm:text-[0.9375rem]" style={{ color: 'var(--text)' }}>
                  {activeStory.persona}
                </div>
              </div>
              <div
                className="rounded-[20px] p-4"
                style={{
                  background: 'color-mix(in srgb, var(--bg) 72%, transparent)',
                  border: '1px solid color-mix(in srgb, var(--brand) 10%, var(--card-border))',
                }}
              >
                <div
                  className="font-medium uppercase"
                  style={{ color: 'var(--accent)', fontSize: '0.56rem', letterSpacing: '0.21em', lineHeight: 1.1 }}
                >
                  What looked valid
                </div>
                <div className="mt-2 text-sm leading-6 sm:text-[0.9375rem]" style={{ color: 'var(--text)' }}>
                  {activeStory.appearedAs}
                </div>
              </div>
              <div
                className="rounded-[20px] p-4"
                style={{
                  background: 'color-mix(in srgb, var(--bg) 72%, transparent)',
                  border: '1px solid color-mix(in srgb, var(--brand) 10%, var(--card-border))',
                }}
              >
                <div
                  className="font-medium uppercase"
                  style={{ color: 'var(--accent)', fontSize: '0.56rem', letterSpacing: '0.21em', lineHeight: 1.1 }}
                >
                  Where trust failed
                </div>
                <div className="mt-2 text-sm leading-6 sm:text-[0.9375rem]" style={{ color: 'var(--text)' }}>
                  {activeStory.failure}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-5 border-t pt-6 sm:flex-row sm:items-end sm:justify-between" style={{ borderColor: 'color-mix(in srgb, var(--brand) 14%, var(--border))' }}>
              <div>
                <div
                  className="font-medium uppercase"
                  style={{ color: 'var(--text-muted)', fontSize: '0.56rem', letterSpacing: '0.21em', lineHeight: 1.1 }}
                >
                  Source context
                </div>
                <div className="mt-2 text-sm leading-6 sm:text-[0.9375rem]" style={{ color: 'var(--text)' }}>
                  {activeStory.persona}
                </div>
                <div className="text-sm leading-6" style={{ color: 'var(--text-muted)' }}>
                  {activeStory.source}
                </div>
                <a
                  href={activeStory.referenceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5"
                  style={{ color: 'var(--brand)', fontSize: '0.72rem', letterSpacing: '0.04em', lineHeight: 1.2 }}
                >
                  <span>Open public reference</span>
                  <ExternalLinkIcon />
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="font-medium uppercase"
                  style={{ color: 'var(--text-muted)', fontSize: '0.56rem', letterSpacing: '0.2em', lineHeight: 1.1 }}
                >
                  {String(activeIndex + 1).padStart(2, '0')} / {String(stories.length).padStart(2, '0')}
                </div>
                <button
                  type="button"
                  onClick={() => moveStory(-1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-200 hover:-translate-x-0.5"
                  style={{
                    background: 'color-mix(in srgb, var(--bg) 80%, transparent)',
                    border: '1px solid color-mix(in srgb, var(--brand) 10%, var(--card-border))',
                    color: 'var(--text)',
                  }}
                  aria-label="Show previous story"
                >
                  <ArrowIcon direction="left" />
                </button>
                <button
                  type="button"
                  onClick={() => moveStory(1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-200 hover:translate-x-0.5"
                  style={{
                    background: 'var(--brand)',
                    border: '1px solid color-mix(in srgb, var(--brand) 55%, var(--brand-strong))',
                    color: '#ffffff',
                    boxShadow: '0 12px 30px color-mix(in srgb, var(--brand) 22%, transparent)',
                  }}
                  aria-label="Show next story"
                >
                  <ArrowIcon direction="right" />
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
