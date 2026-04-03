'use client';

/* Stats are now integrated into the Hero data grid (V7 style).
   This component is kept for reuse on sub-pages if needed. */

const stats = [
  { value: '2.4M+', label: '.nota Files Minted' },
  { value: '14', label: 'Supported Chains' },
  { value: '<0.1s', label: 'Verification Time' },
  { value: '$4.2B', label: 'Secured Value' },
];

export default function Stats() {
  return (
    <section className="border-y" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: 'var(--border)' }}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="px-5 py-8 text-center sm:px-6 sm:py-10 lg:px-8 lg:py-12"
              style={{ background: 'var(--bg)' }}
            >
              <div className="text-3xl lg:text-4xl font-medium font-mono leading-none mb-2 tracking-tight" style={{ color: 'var(--brand)' }}>
                {stat.value}
              </div>
              <div className="label text-[0.7rem]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
