import { Container } from "../components/Container";
import { Hero } from "../components/Hero";
import { SectionTitle } from "../components/SectionTitle";
import { Benefits } from "../components/Benefits";
import { Video } from "../components/Video";
import { Testimonials } from "../components/Testimonials";
import { Faq } from "../components/Faq";
import { Cta } from "../components/Cta";
import { womensHealthToolkit, economicJusticeToolkit, benefitOne, benefitTwo } from "../components/data";

export default function Home() {
  return (
    <Container>
      {/* HERO SECTION */}
      <Hero />

      {/* MISSION/ABOUT SECTION */}
      <SectionTitle
        preTitle="Our Mission"
        title="Why use Our Faiths Forward?"
      >
        Our Faiths Forward is a campaign for every community that wants faith to mean more than talk. We provide practical, action-ready resources to protect women’s health, welcome immigrants and refugees, include LGBTQI people, defend economic justice, and care for our planet—grounded in the teachings of our faiths.
      </SectionTitle>

      {/* BENEFITS */}
      
      <Benefits imgPos="right" data={womensHealthToolkit} />
      <Benefits data={economicJusticeToolkit} />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      {/* Future VIDEO/ABOUT SECTION 
      <SectionTitle
        preTitle="Watch Our Story"
        title="Learn about Our Faiths Forward"
      >
        See how congregations and communities are moving faith from words to action. This video highlights how real people are using the toolkit for justice and compassion.
      </SectionTitle>
      <Video videoId="fZ0D0cnR88E" />
      */}

      {/* Future TESTIMONIALS 
      <SectionTitle
        preTitle="Stories of Impact"
        title="What communities are saying"
      >
        Congregations across the country are making a difference—hosting health workshops, advocating for justice, and welcoming their neighbors.
      </SectionTitle>
      <Testimonials />
      */}

      {/* FAQ SECTION */}
      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Got questions? We’ve got answers.
        Everything you need to know about getting started, inviting others, and using the toolkit in your congregation or community.
      </SectionTitle>
      <Faq />

    </Container>
  );
}
