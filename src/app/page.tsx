import type { Metadata } from 'next';
import CTABanner from '@/components/CTABanner';
import Challenges from '@/components/Challenges';
import DeveloperSDK from '@/components/DeveloperSDK';
import Ecosystem from '@/components/Ecosystem';
import Hero from '@/components/Hero';
import IntroducingSolution from '@/components/IntroducingSolution';
import NotaFormat from '@/components/NotaFormat';
import ProblemStatement from '@/components/ProblemStatement';
import ProcessSteps from '@/components/ProcessSteps';
import SolutionStatement from '@/components/SolutionStatement';
import StoriesCarousel from '@/components/StoriesCarousel';
import TokenSection from '@/components/TokenSection';
import UseCases from '@/components/UseCases';
import { pageUrl } from '@/lib/seo';

export const metadata: Metadata = {
  alternates: { canonical: pageUrl('/') },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroducingSolution />
      <ProblemStatement />
      <StoriesCarousel />
      <Challenges />
      <SolutionStatement />
      <ProcessSteps />
      <NotaFormat />
      <UseCases />
      <Ecosystem />
      <DeveloperSDK />
      <TokenSection />
      <CTABanner />
    </>
  );
}
