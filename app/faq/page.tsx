"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import Container from "@/components/common/Container";

const faqs = [
	{
		question: "Can LIST Software integrate with our existing banking systems?",
		answer:
			"Yes. The solution supports integration with existing banking applications, payment systems, digital channels, and third-party services through APIs, middleware, and interfaces",
	},
	{
		question: "Can the platform be configured around our business requirements?",
		answer:
			"Yes. The platform provides modular capabilities that align with your operational processes, business needs, technology environment, and implementation priorities",
	},
	{
		question: "Can the solution support our growth and changing requirements?",
		answer:
			"Yes. The technology is designed to accommodate evolving needs across transaction volumes, branches, digital channels, and functional requirements",
	},
	{
		question: "How can the platform support our operational transformation?",
		answer:
			"The solution provides capabilities that help modernize banking workflows, strengthen operational processes, and introduce new digital capabilities while aligning with your organisation's technology and business priorities",
	},
	{
		question: "What should we consider when evaluating the solution?",
		answer:
			" Key considerations include functional coverage, scalability, deployment approach, technology requirements, and the areas where you want to enhance your banking capabilities",
	},
	{
		question: "How can we discuss our specific requirements?",
		answer:
			"You can connect with the team to discuss your business objectives, operational requirements, technology environment, and potential solution approach",
	},
];

export default function FAQPage() {
	const [openIndex, setOpenIndex] = useState(0);

	return (
		<section className="bg-[#f7f9fc] py-20 sm:py-28 lg:py-32">
			<Container>
				<div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20 xl:grid-cols-[340px_minmax(0,1fr)] xl:gap-20">
					<div>
						{/* <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#173a9a]">
							FAQ
						</p> */}
						<h1 className="mt-5 max-w-xs text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#0D1B6F] sm:text-5xl ">
							Frequently Asked 
							<br />
							Questions
						</h1>
					</div>

					<div className="border-t border-[#dce4ec]">
						{faqs.map((faq, index) => {
							const isOpen = openIndex === index;
							const answerId = `faq-answer-${index}`;

							return (
								<div key={faq.question} className="border-b border-[#dce4ec]">
									<button
										type="button"
										aria-controls={answerId}
										aria-expanded={isOpen}
										className="flex w-full items-center justify-between gap-6 py-6 text-left text-base font-medium leading-6 text-[#121f37] transition-colors hover:text-[#173a9a] sm:py-7"
										onClick={() => setOpenIndex(isOpen ? -1 : index)}
									>
										<span>{faq.question}</span>
										<span
											className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
												isOpen
													? "border-[#56b0e6] text-[#1a5bb8]"
													: "border-[#dce4ec] text-[#173a9a]"
											}`}
										>
											{isOpen ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
										</span>
									</button>

									{isOpen && (
										<p
											id={answerId}
											className="-mt-2 max-w-3xl pb-7 pr-12 text-base leading-7 text-[#7b8798]"
										>
											{faq.answer}
										</p>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</Container>
		</section>
	);
}
