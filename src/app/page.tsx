import Hero from '@/components/Hero';
import ProtocolArchitecture from '@/components/ProtocolArchitecture';
import Challenges from '@/components/Challenges';
import ProcessSteps from '@/components/ProcessSteps';
import NotaFormat from '@/components/NotaFormat';
import DeveloperSDK from '@/components/DeveloperSDK';
import Ecosystem from '@/components/Ecosystem';
import UseCases from '@/components/UseCases';
import TokenSection from '@/components/TokenSection';
import CTABanner from '@/components/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProtocolArchitecture />
      <Challenges />
      <ProcessSteps />
      <NotaFormat />
      <DeveloperSDK />
      <Ecosystem />
      <UseCases />
      <TokenSection />
      <CTABanner />
    </>
  );
}
