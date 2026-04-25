import type { Metadata } from 'next';
import TermsOfService from '@/components/TermsOfService';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The rules that apply when you access or use notareum.com.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return <TermsOfService />;
}
