import Container from "@/components/common/Container";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <ContactInfo />
            <ContactForm />
          </div> 
        </Container>
      </section>
    </>
  );
}