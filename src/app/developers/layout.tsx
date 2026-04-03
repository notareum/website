import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Developers - Build with Notareum SDK',
  description: 'Integrate Notareum into your application with our SDK, API reference, and developer documentation. Build verified resource sharing for any blockchain.',
};

export default function DevelopersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
