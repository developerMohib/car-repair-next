import CTAContact from "@/component/contact/CTAContact";
import HeroCTA from "@/component/hero/HeroCTA";
import HowWorks from "@/component/howWorks/HowWorks";
import Pricing from "@/component/pricing/Pricing";
import ServicesOffer from "@/component/servicesOffer/ServicesOffer";
import Testominal from "@/component/testominal/Testominal";
import WhyChooseUs from "@/component/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeroCTA />
      <ServicesOffer />
      <WhyChooseUs />
      <HowWorks />
      <Pricing />
      <Testominal />
      <CTAContact />
    </main>
  );
}
