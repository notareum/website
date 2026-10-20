import type { Metadata } from 'next';
import TermsOfService from '@/components/TermsOfService';
import { pageUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The rules that apply when you access or use notareum.com.',
  alternates: { canonical: pageUrl('/terms') },
};

export default function TermsPage() {
  return <TermsOfService />;
}
