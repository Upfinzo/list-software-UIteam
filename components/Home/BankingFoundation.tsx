import Container from "@/components/common/Container";
import { Images } from "@/assets/images/images";
import Button from "@/components/common/Button";
import { ArrowRight } from "lucide-react";

export default function BankingFoundation() {
    return (
        <section className="relative py-[40px]" style={{
            backgroundImage: `url(${Images.home.ctabackground})`, backgroundSize: "cover",
        }}>
            <Container className="py-12 sm:py-16 lg:py-20 d-flex justify-center">
                <div className="flex flex-col justify-center items-center">
                    <img src={Images.home.ctalogo} alt="ctalogo" height={132} width={132} />
                    <h1 className="section-title leading-none pb-0 mb-0">
                        Build on a Stronger
                    </h1>

                    <h1 className="section-title brand-gradient-text my-5 leading-none pb-3 mt-2">
                        Banking Foundation
                    </h1>
                    <p className="running-text text-center mb-8 md:mx-60">Whether you are strengthening your core banking environment, expanding digital channels, connecting payment systems, or modernising operations, LIST Software brings the technology together around a proven banking foundation.</p>
                    <div>
                        <Button href="/contact" variant="primary" className="hidden sm:inline-flex">
                            Request a Demo <ArrowRight height={15} />
                        </Button>

                        <Button href="/contact" variant="secondary" className="hidden sm:inline-flex ms-5">
                            Talk to Specialist <ArrowRight height={15} />
                        </Button>

                    </div>
                </div>
            </Container>
        </section>
    )

}