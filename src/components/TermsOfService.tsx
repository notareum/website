'use client';

import Link from 'next/link';

const lastUpdated = 'April 25, 2026';

const sections = [
  {
    heading: '1. Acceptance of Terms',
    body: (
      <>
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website at{' '}
          <Link href="/" style={{ color: 'var(--brand)' }}>notareum.com</Link> (the &quot;Site&quot;), operated by Notareum Labs (&quot;Notareum,&quot;
          &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using the Site, you agree to be bound by these Terms. If you do not
          agree, do not use the Site.
        </p>
      </>
    ),
  },
  {
    heading: '2. Informational Purpose',
    body: (
      <>
        <p>
          The Site is an informational resource describing the Notareum protocol, the open <span className="font-mono">.nota</span> file format,
          related software development kits, and the work of Notareum Labs. Content on the Site is provided for general information only and does
          not constitute financial, investment, legal, tax, or other professional advice.
        </p>
      </>
    ),
  },
  {
    heading: '3. No Token Offer or Solicitation',
    body: (
      <>
        <p>
          Nothing on the Site constitutes an offer to sell, a solicitation of an offer to buy, or a recommendation regarding any digital asset,
          security, or financial instrument, including any reference to a prospective <span className="font-mono">$NOTA</span> token. Any future
          token-related activity will be subject to its own terms, eligibility requirements, and applicable law.
        </p>
        <p>
          Forward-looking statements (including roadmaps and timelines) reflect current expectations, are subject to change, and do not constitute
          a binding commitment.
        </p>
      </>
    ),
  },
  {
    heading: '4. Protocol and Open-Source Software',
    body: (
      <>
        <p>
          The Notareum protocol, the <span className="font-mono">.nota</span> specification, and related reference implementations are open and may
          be governed by separate open-source licenses published in their respective repositories. Those licenses, not these Terms, control your
          rights to use, modify, and distribute that software.
        </p>
        <p>
          On-chain interactions, validator operations, and decentralized usage of the protocol occur outside the Site and outside our direct
          control. You are solely responsible for your use of any blockchain network, wallet, or third-party application.
        </p>
      </>
    ),
  },
  {
    heading: '5. Acceptable Use',
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Site in any manner that violates applicable law or regulation.</li>
          <li>Attempt to gain unauthorized access to the Site, related systems, or other users&apos; data.</li>
          <li>Interfere with or disrupt the integrity, performance, or security of the Site.</li>
          <li>Scrape, harvest, or collect content from the Site for unlawful or abusive purposes.</li>
          <li>Use the Site to transmit malware, spam, or other harmful content.</li>
          <li>Misrepresent your affiliation with Notareum or any other person or entity.</li>
        </ul>
      </>
    ),
  },
  {
    heading: '6. Intellectual Property',
    body: (
      <>
        <p>
          The Site, including its design, text, graphics, logos, and the &quot;Notareum&quot; name and marks, is owned by Notareum Labs or its
          licensors and is protected by intellectual property laws. Except for content explicitly released under an open-source license or
          permitted by our brand guidelines, you may not reproduce, modify, distribute, or create derivative works without prior written consent.
        </p>
        <p>
          For brand assets and usage guidance, refer to the brand kit linked from the Site.
        </p>
      </>
    ),
  },
  {
    heading: '7. Third-Party Links and Services',
    body: (
      <>
        <p>
          The Site may link to third-party websites, applications, or services that are not operated by Notareum, including documentation
          platforms, code repositories, community channels, and the launch dApp. We do not control and are not responsible for the content,
          policies, or practices of any third party. Use of those services is at your own risk and subject to their terms.
        </p>
      </>
    ),
  },
  {
    heading: '8. Disclaimers',
    body: (
      <>
        <p>
          THE SITE AND ALL CONTENT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS,
          IMPLIED, OR STATUTORY, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY,
          AVAILABILITY, OR THAT THE SITE WILL BE UNINTERRUPTED OR ERROR-FREE.
        </p>
        <p>
          Blockchain technologies are inherently experimental and involve risks, including risks of loss, smart contract failure, regulatory
          change, and irreversible transactions. You are solely responsible for evaluating these risks before using any related software.
        </p>
      </>
    ),
  },
  {
    heading: '9. Limitation of Liability',
    body: (
      <>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, NOTAREUM LABS, ITS AFFILIATES, AND THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS
          WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA,
          GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR USE OF, OR INABILITY TO USE, THE SITE.
        </p>
      </>
    ),
  },
  {
    heading: '10. Indemnification',
    body: (
      <>
        <p>
          You agree to indemnify and hold harmless Notareum Labs and its affiliates from and against any claims, liabilities, damages, losses,
          and expenses (including reasonable legal fees) arising out of or related to your use of the Site, your violation of these Terms, or
          your violation of any rights of a third party.
        </p>
      </>
    ),
  },
  {
    heading: '11. Changes to the Site or Terms',
    body: (
      <>
        <p>
          We may modify, suspend, or discontinue any part of the Site at any time without notice. We may also update these Terms from time to time.
          Material changes will be reflected by updating the &quot;Last updated&quot; date above. Your continued use of the Site after changes
          become effective constitutes acceptance of the revised Terms.
        </p>
      </>
    ),
  },
  {
    heading: '12. Governing Law',
    body: (
      <>
        <p>
          These Terms are governed by the laws of the jurisdiction in which Notareum Labs is established, without regard to its conflict of laws
          rules. Any dispute arising out of or relating to these Terms or the Site will be subject to the exclusive jurisdiction of the competent
          courts of that jurisdiction, except where mandatory consumer protection laws provide otherwise.
        </p>
      </>
    ),
  },
  {
    heading: '13. Severability and Entire Agreement',
    body: (
      <>
        <p>
          If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect. These Terms,
          together with the <Link href="/privacy-policy" style={{ color: 'var(--brand)' }}>Privacy Policy</Link>, constitute the entire agreement
          between you and Notareum regarding the Site.
        </p>
      </>
    ),
  },
  {
    heading: '14. Contact',
    body: (
      <>
        <p>
          Questions about these Terms can be sent to <span className="font-mono">legal@notareum.com</span>. For general inquiries, use{' '}
          <span className="font-mono">hello@notareum.com</span>.
        </p>
      </>
    ),
  },
];

export default function TermsOfService() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      {/* Hero */}
      <section className="page-hero" style={{ background: 'var(--bg-alt)' }}>
        <div className="page-hero-shell">
          <div className="label mb-4">Legal</div>
          <h1 className="page-title mb-6 font-bold" style={{ color: 'var(--text)' }}>
            Terms of <span style={{ color: 'var(--brand)' }}>Service</span>
          </h1>
          <p className="page-copy" style={{ color: 'var(--text-muted)' }}>
            The rules that apply when you use notareum.com.
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
