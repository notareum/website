import type { Metadata } from 'next';
import { pageUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Whitepaper - Notareum Technical Specification',
  description: 'Read the Notareum whitepaper covering protocol architecture, cryptographic verification, the .nota file format, and tokenomics.',
  alternates: { canonical: pageUrl('/whitepaper') },
};

export default function WhitepaperLayout({ children }: { children: React.ReactNode }) {
  return children;
}
