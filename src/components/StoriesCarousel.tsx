'use client';

import { useEffect, useState, useCallback } from 'react';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const DURATION = 6000; // 6s per story
  const TICK = 50;

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % stories.length);
    setProgress(0);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);
    setProgress(0);
  }, []);

  // Auto-advance timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goNext();
          return 0;
        }
        return prev + (TICK / DURATION) * 100;
      });
    }, TICK);
    return () => clearInterval(interval);
  }, [isPaused, goNext]);

  // Tap zones: left 40% = prev, right 40% = next, middle 20% = pause toggle
  const handleTap = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    if (x < 0.4) goPrev();
    else if (x > 0.6) goNext();
  };

  const getCardStyle = (i: number) => {
    const diff = i - activeIndex;
    const wrappedDiff =
      diff > stories.length / 2 ? diff - stories.length :
      diff < -stories.length / 2 ? diff + stories.length : diff;

    if (wrappedDiff === 0) {
      return {
        transform: 'translateX(0) scale(1)',
        opacity: 1,
        zIndex: 10,
        flex: '0 0 min(440px, 80vw)',
      };
    }

    const direction = wrappedDiff > 0 ? 1 : -1;
    const absD = Math.abs(wrappedDiff);

    if (absD > 2) {
      return {
        transform: `translateX(${direction * 120}%) scale(0.7)`,
        opacity: 0,
        zIndex: 0,
        flex: '0 0 0px',
      };
    }

    return {
      transform: `translateX(${direction * 10}%) scale(${absD === 1 ? 0.85 : 0.75})`,
      opacity: absD === 1 ? 0.6 : 0.3,
      zIndex: 5 - absD,
      flex: `0 0 min(${absD === 1 ? 200 : 140}px, ${absD === 1 ? 30 : 20}vw)`,
    };
  };

  return (
    <section
      className="py-16 sm:py-20 lg:py-28"
      style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        <span className="label mb-3 block">Real Stories</span>
        <h2
          className="text-3xl font-normal tracking-tight sm:text-4xl"
          style={{ color: 'var(--text)' }}
        >
          Behind Every Lost Transaction Is a Person
        </h2>
      </div>

      {/* Carousel container */}
      <div
        className="relative mx-auto max-w-5xl cursor-pointer select-none overflow-hidden px-4"
        onClick={handleTap}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex items-center justify-center gap-3 sm:gap-4" style={{ minHeight: '320px' }}>
          {stories.map((story, i) => {
            const style = getCardStyle(i);
            const isActive = i === activeIndex;
            return (
              <div
                key={i}
                className="rounded-xl p-6 sm:p-8 transition-all duration-500 ease-out"
                style={{
                  ...style,
                  background: isActive ? 'var(--brand)' : 'var(--card-bg)',
                  border: isActive ? 'none' : '1px solid var(--card-border)',
                  color: isActive ? '#ffffff' : 'var(--text-body)',
                  pointerEvents: isActive ? 'auto' : 'none',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Progress bar on active card */}
                {isActive && (
                  <div
                    className="absolute top-0 left-0 h-[3px]"
                    style={{
                      width: `${progress}%`,
                      background: 'rgba(255,255,255,0.5)',
                      transition: `width ${TICK}ms linear`,
                    }}
                  />
                )}
                <div className="mb-4 text-2xl">{story.emoji}</div>
                <p
                  className={`mb-6 leading-relaxed ${isActive ? 'text-sm sm:text-[0.9375rem]' : 'text-xs line-clamp-3'}`}
                  style={{
                    color: isActive ? 'rgba(255,255,255,0.9)' : 'var(--text-body)',
                  }}
                >
                  &ldquo;{story.quote}&rdquo;
                </p>
                <div
                  className="text-xs font-medium uppercase tracking-wider"
                  style={{
                    color: isActive ? 'rgba(255,255,255,0.6)' : 'var(--text-muted)',
                  }}
                >
                  {story.source}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress dots */}
      <div className="mt-8 flex justify-center gap-2">
        {stories.map((_, i) => (
          <button
            key={i}
            onClick={() => { setActiveIndex(i); setProgress(0); }}
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
