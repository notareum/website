import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import StoriesCarousel from '@/components/StoriesCarousel';
import Challenges from '@/components/Challenges';
import ProtocolArchitecture from '@/components/ProtocolArchitecture';
import ProcessSteps from '@/components/ProcessSteps';
import NotaFormat from '@/components/NotaFormat';
import UseCases from '@/components/UseCases';
import Ecosystem from '@/components/Ecosystem';
import DeveloperSDK from '@/components/DeveloperSDK';
import TokenSection from '@/components/TokenSection';
import CTABanner from '@/components/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemStatement />
      <StoriesCarousel />
      <Challenges />
      <ProtocolArchitecture />
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
