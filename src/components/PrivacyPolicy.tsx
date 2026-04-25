'use client';

import Link from 'next/link';

const lastUpdated = 'April 25, 2026';

const sections = [
  {
    heading: '1. Introduction',
    body: (
      <>
        <p>
          Notareum Labs (&quot;Notareum,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website at{' '}
          <Link href="/" style={{ color: 'var(--brand)' }}>notareum.com</Link> (the &quot;Site&quot;) and develops the open Notareum protocol and the
          {' '}<span className="font-mono">.nota</span> file format. This Privacy Policy explains what information we collect when you visit the Site, how we use it,
          and the choices you have. By using the Site you agree to the practices described below.
        </p>
        <p>
          This policy applies only to the marketing Site. It does not cover on-chain activity, third-party wallets, dApps, exchanges, or any
          decentralized infrastructure operated by validators or community members. Public blockchain data is, by design, transparent and outside our control.
        </p>
      </>
    ),
  },
  {
    heading: '2. Information We Collect',
    body: (
      <>
        <p className="font-semibold" style={{ color: 'var(--text)' }}>Information you provide</p>
        <ul>
          <li>Email address and message content when you contact us at addresses such as <span className="font-mono">hello@notareum.com</span>, <span className="font-mono">research@notareum.com</span>, <span className="font-mono">partnerships@notareum.com</span>, or <span className="font-mono">security@notareum.com</span>.</li>
          <li>Information you submit through forms, surveys, or newsletter signups, where applicable.</li>
        </ul>
        <p className="font-semibold" style={{ color: 'var(--text)' }}>Information collected automatically</p>
        <ul>
          <li>Standard server logs (IP address, user agent, referrer, timestamps) generated when your browser requests pages from the Site.</li>
          <li>Privacy-preserving analytics (aggregate page views, referrers, country-level location) used to understand how the Site is used.</li>
          <li>Cookies and similar technologies strictly necessary for theme preference and basic Site functionality.</li>
        </ul>
        <p>
          We do not knowingly collect sensitive personal information, and we do not request wallet signatures, private keys, or seed phrases from
          visitors to this Site.
        </p>
      </>
    ),
  },
  {
    heading: '3. How We Use Information',
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Operate, maintain, and secure the Site.</li>
          <li>Respond to inquiries, partnership requests, security disclosures, and other communications.</li>
          <li>Understand aggregate usage patterns and improve content, performance, and accessibility.</li>
          <li>Detect, prevent, and respond to abuse, fraud, or technical issues.</li>
          <li>Comply with applicable legal obligations.</li>
        </ul>
      </>
    ),
  },
  {
    heading: '4. Cookies and Local Storage',
    body: (
      <>
        <p>
          The Site uses a small number of cookies and browser local storage entries to remember your theme preference (light or dark) and to
          support core functionality. We do not use third-party advertising cookies or cross-site tracking pixels.
        </p>
        <p>
          You can clear cookies and local storage at any time through your browser settings. Doing so may reset your preferences but will not
          prevent you from using the Site.
        </p>
      </>
    ),
  },
  {
    heading: '5. Third-Party Services',
    body: (
      <>
        <p>
          The Site may load resources from, or link to, third-party services such as documentation hosts, code repositories (for example GitHub),
          community platforms (for example Discord, Telegram, X), and content delivery networks. These services have their own privacy policies
          and we encourage you to review them. Notareum is not responsible for the practices of third parties.
        </p>
      </>
    ),
  },
  {
    heading: '6. Sharing and Disclosure',
    body: (
      <>
        <p>We do not sell personal information. We share information only:</p>
        <ul>
          <li>With service providers acting on our behalf (for example hosting and email infrastructure) under appropriate confidentiality terms.</li>
          <li>To comply with applicable laws, regulations, valid legal process, or enforceable governmental requests.</li>
          <li>To protect the rights, property, or safety of Notareum, our users, or the public.</li>
          <li>In connection with a merger, acquisition, financing, reorganization, or sale of assets, subject to standard confidentiality protections.</li>
        </ul>
      </>
    ),
  },
  {
    heading: '7. Data Retention',
    body: (
      <>
        <p>
          We retain information only as long as necessary for the purposes described in this policy or as required by law. Server logs are kept for a
          limited period for security and diagnostic purposes. Email correspondence is retained for as long as needed to manage the relationship and
          for reasonable record-keeping.
        </p>
      </>
    ),
  },
  {
    heading: '8. Security',
    body: (
      <>
        <p>
          We apply reasonable administrative, technical, and organizational measures to protect information collected through the Site. No method of
          transmission or storage is fully secure, and we cannot guarantee absolute security. To report a security concern related to the Site or the
          protocol, please email <span className="font-mono">security@notareum.com</span>.
        </p>
      </>
    ),
  },
  {
    heading: '9. International Users',
    body: (
      <>
        <p>
          The Site is operated as a global, static resource. By using it from outside the jurisdiction in which our infrastructure is hosted, you
          understand that your information may be processed in jurisdictions whose data protection laws differ from those of your country.
        </p>
      </>
    ),
  },
  {
    heading: '10. Your Rights',
    body: (
      <>
        <p>
          Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict the use of personal information we hold about
          you, and to object to certain processing. To exercise any of these rights, contact{' '}
          <span className="font-mono">legal@notareum.com</span>. We will respond within a reasonable time and in accordance with applicable law.
        </p>
      </>
    ),
  },
  {
    heading: '11. Children',
    body: (
      <>
        <p>
          The Site is not directed to children under the age of 13 (or the equivalent minimum age in your jurisdiction). We do not knowingly collect
          personal information from children. If you believe a child has provided information to us, please contact{' '}
          <span className="font-mono">legal@notareum.com</span> so we can take appropriate action.
        </p>
      </>
    ),
  },
  {
    heading: '12. Changes to This Policy',
    body: (
      <>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the &quot;Last updated&quot; date at the top of this page.
          Material changes will be highlighted on the Site or communicated through other reasonable means.
        </p>
      </>
    ),
  },
  {
    heading: '13. Contact',
    body: (
      <>
        <p>
          For privacy questions or requests, contact us at <span className="font-mono">legal@notareum.com</span>. For general inquiries, use{' '}
          <span className="font-mono">hello@notareum.com</span>.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      {/* Hero */}
      <section className="page-hero" style={{ background: 'var(--bg-alt)' }}>
        <div className="page-hero-shell">
          <div className="label mb-4">Legal</div>
          <h1 className="page-title mb-6 font-bold" style={{ color: 'var(--text)' }}>
            Privacy <span style={{ color: 'var(--brand)' }}>Policy</span>
          </h1>
          <p className="page-copy" style={{ color: 'var(--text-muted)' }}>
            How Notareum Labs collects, uses, and safeguards information on notareum.com.
          </p>
          <p className="mt-4 text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="page-section" style={{ background: 'var(--bg)' }}>
        <div className="page-shell-narrow">
          <div className="card rounded-2xl p-6 sm:p-8 lg:p-12">
            <div className="space-y-10 text-base leading-relaxed" style={{ color: 'var(--text-body)' }}>
              {sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="text-xl sm:text-2xl font-semibold mb-4 tracking-[-0.01em]" style={{ color: 'var(--text)' }}>
                    {s.heading}
                  </h2>
                  <div className="space-y-4 legal-prose">{s.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
