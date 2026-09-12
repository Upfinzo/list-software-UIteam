import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
export default function CTASection() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-2xl bg-black px-8 py-16 text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to build something great?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Let&apos;s discuss your project and find the right
            solution for your business.
          </p>

          <div className="mt-8">
            <Button href="/contact" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}