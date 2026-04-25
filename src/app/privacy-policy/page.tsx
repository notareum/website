import type { Metadata } from 'next';
import PrivacyPolicy from '@/components/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Notareum Labs collects, uses, and safeguards information on notareum.com.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
