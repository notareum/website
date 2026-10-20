import type { Metadata } from 'next';
import { pageUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Ecosystem - Apps and Integrations Built on Notareum',
  description: 'Explore the growing ecosystem of wallets, dApps, and tools built on the Notareum protocol across every major blockchain.',
  alternates: { canonical: pageUrl('/ecosystem') },
};

export default function EcosystemLayout({ children }: { children: React.ReactNode }) {
  return children;
}
