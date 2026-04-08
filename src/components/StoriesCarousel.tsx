'use client';

import { useEffect, useRef, useState } from 'react';

const stories = [
  {
    emoji: '💸',
    quote:
      'I copied the address from my transaction history. It looked identical to the one I always use. But someone had poisoned my history with a lookalike address. $120,000 in ETH, gone in one click.',
    source: 'DeFi trader, 2024',
  },
  {
    emoji: '🏪',
    quote:
      'We ran a small online store accepting crypto. For three months, a clipboard hijacker on our checkout terminal was silently replacing our wallet address with theirs. We lost an entire quarter of revenue before we noticed.',
    source: 'E-commerce operator, Reddit r/cryptocurrency',
  },
  {
    emoji: '👵',
    quote:
      'My grandson sent me instructions to receive USDT from abroad. I copied the address from what I thought was his message. It was a scam reply in the same group chat. My family had pooled money to help me relocate.',
    source: 'Remittance recipient, Nigeria',
  },
  {
    emoji: '🔓',
    quote:
      'I approved what I thought was the Uniswap router contract. The URL was right, the interface looked perfect. But the contract address was a phishing clone. My entire wallet was drained in seconds.',
    source: 'DeFi user, 2023',
  },
  {
    emoji: '🏛️',
    quote:
      'Our DAO treasury multisig sent $400K to an address from our transaction history that had been poisoned. Five signers approved it. None of us caught the difference. It was the last two characters.',
    source: 'DAO contributor, Ethereum governance forum',
  },
  {
    emoji: '💻',
    quote:
      'I am a freelance developer. A client paid me 2.5 ETH for a month of work. A browser extension I installed for "convenience" had a clipboard hijacker. The payment went to someone else. I had no recourse.',
    source: 'Freelancer, 2024',
  },
  {
    emoji: '🎨',
    quote:
      'A collector wanted to buy my NFT for 8 ETH. They sent payment to what they thought was my address, but it was a phished version from a fake DM. Neither of us got the funds. The trust was broken.',
    source: 'NFT artist, Twitter/X',
  },
];

export default function StoriesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[activeIndex] as HTMLElement | undefined;
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeIndex]);

  return (
    <section
      className="py-16 sm:py-20 lg:py-28"
      style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="label mb-3 block">Real Stories</span>
        <h2
          className="mb-10 text-3xl font-normal tracking-tight sm:mb-12 sm:text-4xl"
          style={{ color: 'var(--text)' }}
        >
          Behind Every Lost Transaction Is a Person
        </h2>
      </div>

      {/* Scrollable story cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 pb-4 sm:gap-5 sm:px-6 lg:px-8"
        style={{
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {stories.map((story, i) => (
          <div
            key={i}
            className="flex-shrink-0 rounded-xl p-6 sm:p-8"
            style={{
              width: 'min(360px, 85vw)',
              scrollSnapAlign: 'center',
              background: activeIndex === i ? 'var(--brand)' : 'var(--card-bg)',
              border: activeIndex === i ? 'none' : '1px solid var(--card-border)',
              color: activeIndex === i ? '#ffffff' : 'var(--text-body)',
              transition: 'background 0.4s, color 0.4s, border 0.4s',
            }}
          >
            <div className="mb-4 text-2xl">{story.emoji}</div>
            <p
              className="mb-6 text-sm leading-relaxed sm:text-[0.9375rem]"
              style={{
                color: activeIndex === i ? 'rgba(255,255,255,0.9)' : 'var(--text-body)',
              }}
            >
              &ldquo;{story.quote}&rdquo;
            </p>
            <div
              className="text-xs font-medium uppercase tracking-wider"
              style={{
                color: activeIndex === i ? 'rgba(255,255,255,0.6)' : 'var(--text-muted)',
              }}
            >
              {story.source}
            </div>
          </div>
        ))}
      </div>

      {/* Progress dots */}
      <div className="mt-6 flex justify-center gap-2">
        {stories.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: activeIndex === i ? '24px' : '8px',
              background: activeIndex === i ? 'var(--brand)' : 'var(--border)',
            }}
            aria-label={`Story ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
