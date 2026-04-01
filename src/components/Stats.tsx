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
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-10 px-6 lg:py-12 lg:px-8 text-center ${
                i < stats.length - 1 ? 'border-r' : ''
              }`}
              style={{ borderColor: 'var(--border)' }}
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
