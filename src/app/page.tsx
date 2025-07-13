import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      {/* HERO SECTION */}
      <Hero
        title="Our Faiths Forward"
        subtitle="Real Faith. Real Justice. Real Action."
        description="Uniting people of all faiths to stand up for justice, dignity, and hope in our communities."
        ctaText="Explore the Toolkit"
        ctaLink="https://toolkit.ourfaithsforward.org"
      />

      {/* WHY USE THIS SITE */}
      <SectionTitle
        preTitle="Our Mission"
        title="Why use Our Faiths Forward?"
      >
        Our Faiths Forward is a campaign for every community that wants faith to mean more than talk. We provide practical, action-ready resources to protect women’s health, welcome immigrants and refugees, include LGBTQI people, defend economic justice, and care for our planet—grounded in the teachings of our faiths.
      </SectionTitle>

      {/* BENEFITS - You can edit benefitOne/Two in ../components/data.js or replace this with a custom list */}
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      {/* VIDEO/ABOUT SECTION */}
      <SectionTitle
        preTitle="Watch Our Story"
        title="Learn about Our Faiths Forward"
      >
        See how congregations and communities are moving faith from words to action. This video highlights how real people are using the toolkit for justice and compassion.
      </SectionTitle>
      {/* Change videoId to your own YouTube/Vimeo ID or remove if you don’t have a video yet */}
      <Video videoId="fZ0D0cnR88E" />

      {/* TESTIMONIALS */}
      <SectionTitle
        preTitle="Stories of Impact"
        title="What communities are saying"
      >
        Congregations across the country are making a difference—hosting health workshops, advocating for justice, and welcoming their neighbors.
      </SectionTitle>
      <Testimonials
        testimonials={[
          {
            name: "Rev. Sarah L.",
            content: "Our Faiths Forward toolkit made it easy for our small church to have tough, important conversations about real-world issues.",
          },
          {
            name: "Imam Khalid R.",
            content: "We brought our interfaith partners together for a climate action event inspired by the resources here.",
          },
          {
            name: "Rabbi Miriam D.",
            content: "Finally—something practical and positive! Our community feels empowered to speak up and show up.",
          },
        ]}
      />

      {/* FAQ SECTION */}
      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Got questions? We’ve got answers.  
        Everything you need to know about getting started, inviting others, and using the toolkit in your congregation or community.
      </SectionTitle>
      <Faq
        faqs={[
          {
            question: "Who is this campaign for?",
            answer: "Anyone of any faith (or none at all!) who wants to take real-world action for justice and inclusion."
          },
          {
            question: "Can I customize the toolkit for my community?",
            answer: "Absolutely! Adapt the materials for your tradition, language, and local context."
          },
          {
            question: "How do I share my story or event?",
            answer: "Send us a note via the contact page, or tag us on social with #OurFaithsForward!"
          },
        ]}
      />

      {/* CALL TO ACTION */}
      <Cta
        title="Ready to move faith forward?"
        description="Take the pledge, join an event, or bring the toolkit to your community."
        ctaText="Get Involved"
        ctaLink="/contact"
      />
    </Container>
  );
}
