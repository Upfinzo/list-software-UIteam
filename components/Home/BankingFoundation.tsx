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
                    <h1 className="text-[49px] font-semibold mb-0 pb-0 mt-2 leading-none text-[#121F37]">
                        Build on a Stronger <span className="bg-gradient-to-r from-[#072B8F] via-[#1E5CC7] to-[#5CB7EA] bg-clip-text text-transparent">Banking Foundation</span>
                    </h1>
                    <p className="running-text mx-auto mb-8 mt-7 max-w-[980px] text-center text-black">
                        Whether you are strengthening your core banking environment, expanding digital channels, connecting payment systems,<br />
                        <span className="block">modernising operations, LIST Software brings the technology together around a proven banking foundation</span>
                    </p>
                    <div className="justify-center text-center">
                        <Button href="/" variant="primary" className="hidden sm:inline-flex mt-7 h-[51px]">
                            Request a Demo <ArrowRight height={15} />
                        </Button>

                        <Button href="/" variant="secondary" className="h-[51px] md:ms-3 mt-3 md:mt-0">
                            Talk to Specialist <ArrowRight height={15} />
                        </Button>

                    </div>
                </div>
            </Container>
        </section>
    )

}