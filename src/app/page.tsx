import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { sections } from "@/data/sections";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      {/* <Logos /> */}
      <Container>
        <Benefits />

        <Section
          id="pricing"
          title={sections.pricing.title}
          description={sections.pricing.description}
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title={sections.testimonials.title}
          description={sections.testimonials.description}
        >
          <Testimonials />
        </Section>

        {/* <Section
          id="pricing"
          title=""
          description=""
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title=""
          description=""
        >
          <Testimonials />
        </Section> */}

        <FAQ />

        {/* <Stats /> */}

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
