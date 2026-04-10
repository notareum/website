'use client';

export default function IntroducingSolution() {
  return (
    <section className="py-16 sm:py-20 lg:py-28" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <span className="label mb-3 block">Introducing .NOTA</span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight" style={{ color: 'var(--text)' }}>
            A Simple Solution to a Complex Problem
          </h2>
          <p className="text-lg mt-4 max-w-[600px] mx-auto" style={{ color: 'var(--text-muted)' }}>
            A new file format that wraps any blockchain resource into a portable, verifiable package you can share like a photo or document.
          </p>
        </div>

        {/* V5 Topology Diagram */}
        <div className="relative flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-0">
          {/* Node 1 - Left */}
          <div className="lg:w-[220px] text-center lg:text-right">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm mx-auto lg:ml-auto mb-3"
              style={{ backgroundColor: 'var(--bg-alt)', border: '1px solid var(--border)', color: 'var(--brand)' }}
            >
              1
            </div>
            <h4 className="text-base font-medium mb-2" style={{ color: 'var(--text)' }}>Resource Wrapping</h4>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Standard data is encapsulated into the verifiable .nota format via local SDK.
            </p>
          </div>

          <div className="h-12 border-l-2 border-dashed lg:hidden" style={{ borderColor: 'var(--border)' }} />

          {/* Dashed line left */}
          <div className="hidden lg:block w-[100px] border-t-2 border-dashed mx-4" style={{ borderColor: 'var(--border)' }} />

          {/* Center node - blue */}
          <div className="bg-brand text-white rounded-xl p-6 w-full max-w-[280px] shadow-[0_10px_30px_-8px_rgba(58,111,229,0.25)] relative z-10">
            <div className="text-[0.7rem] uppercase tracking-widest mb-3 opacity-70">
              The Core Engine
            </div>
            <h3 className="text-lg font-medium mb-2">Verification Network</h3>
            <p className="text-sm text-white/80">
              Nodes reach consensus on signature validity before state transition.
            </p>
          </div>

          <div className="h-12 border-l-2 border-dashed lg:hidden" style={{ borderColor: 'var(--border)' }} />

          {/* Dashed line right */}
          <div className="hidden lg:block w-[100px] border-t-2 border-dashed mx-4" style={{ borderColor: 'var(--border)' }} />

          {/* Node 3 - Right */}
          <div className="lg:w-[220px] text-center lg:text-left">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm mx-auto lg:mr-auto mb-3"
              style={{ backgroundColor: 'var(--bg-alt)', border: '1px solid var(--border)', color: 'var(--brand)' }}
            >
              3
            </div>
            <h4 className="text-base font-medium mb-2" style={{ color: 'var(--text)' }}>Safe Execution</h4>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Receiving dApps natively decode and trust the assertion without middleman logic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
