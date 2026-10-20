import type { Metadata } from 'next';
import PrivacyPolicy from '@/components/PrivacyPolicy';
import { pageUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Notareum Labs collects, uses, and safeguards information on notareum.com.',
  // Same document as /privacy-policy/. Point crawlers at that indexable URL.
  alternates: { canonical: pageUrl('/privacy-policy') },
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
