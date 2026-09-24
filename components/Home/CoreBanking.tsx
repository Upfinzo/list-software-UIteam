'use client';

import Container from "@/components/common/Container";
import Image, { type StaticImageData } from "next/image";
import { useState } from 'react';

import accountManagementIcon from "@/public/images/corebanking/account-management.svg";
import depositsTransactionsIcon from "@/public/images/corebanking/deposits-transactions.svg";
import lendingCreditIcon from "@/public/images/corebanking/lending-credit.svg";
import accountingFinanceIcon from "@/public/images/corebanking/accounting-finance.svg";
import branchOperationsIcon from "@/public/images/corebanking/branch-operations.svg";
import connectedCoreIcon from "@/public/images/corebanking/connected-core.svg";
import complianceControlIcon from "@/public/images/corebanking/compliance-control.svg";

interface PortfolioCard {
    id: number;
    number: string;
    title: string;
    description: string;
    badge?: string;
    icon: StaticImageData;
}

const portfolioCards: PortfolioCard[] = [
    {
        id: 0,
        number: '01',
        title: 'Account Management',
        description: 'Manage customer profiles, relationships, and account operations across the complete banking lifecycle.',
        badge: 'ALWAYS ON',
        icon: accountManagementIcon,
    },
    {
        id: 1,
        number: '02',
        title: 'Deposits & Transactions',
        description: 'Manage deposits, withdrawals, transfers and everyday transactions across branches and connected banking channels.',
        icon: depositsTransactionsIcon,
    },
    {
        id: 2,
        number: '03',
        title: 'Lending & Credit',
        description: 'Support loan origination and servicing with connected capabilities for credit appraisal, documentation, recovery and NPA management.',
        icon: lendingCreditIcon,
    },
    {
        id: 3,
        number: '04',
        title: 'Accounting & Finance',
        description: 'Maintain accounting, financial records, and operational controls across core banking activities.',
        icon: accountingFinanceIcon,
    },
    {
        id: 4,
        number: '05',
        title: 'Branch Operations',
        description: 'Equip banking teams with the workflows and controls needed to manage routine branch operations efficiently.',
        icon: branchOperationsIcon,
    },
    {
        id: 5,
        number: '06',
        title: 'Connected Core',
        description: 'Extend Custodian through digital banking, payment interfaces, ATM, onboarding, reporting, APIs, and integrated banking solutions.',
        icon: connectedCoreIcon,
    },
    {
        id: 6,
        number: '07',
        title: 'Compliance & Control',
        description: 'Strengthen operational governance with structured processes, controls, and oversight across banking activities.',
        icon: complianceControlIcon,
    },
];

export default function CoreBankingPortfolio() {
    const [selectedCard, setSelectedCard] = useState<number>(-1);

    // SVG Background path variables
    const sectionBgImage = 'url(/images/core-banking-bg.svg)';
    const blueCardBgImage = 'url(/images/core-banking-bg-blue.svg)';

    return (
        <section
            className="py-28 overflow-hidden relative bg-white"
            style={{
                backgroundImage: sectionBgImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            suppressHydrationWarning
        >
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Grid Section */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">

                        {/* Featured Large Blue Card — spans 2 columns on row 1 */}
                        <div
                            className="sm:col-span-2 rounded-[20px] p-7 text-white relative overflow-hidden flex flex-col shadow-xl"
                            style={{
                                background: `linear-gradient(135deg, #032683 0%, #111E89 60%, #56B0E6 100%), ${blueCardBgImage}`,
                                backgroundBlendMode: 'overlay',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            {/* Applied Figma text settings for CUSTODIAN */}
                            <span className="font-['Sora'] text-[10.5px] font-semibold tracking-[2.52px] text-white/65 uppercase relative z-10">
                                CUSTODIAN
                            </span>

                            <div className="relative z-10 mt-3">
                                <h3 className="text-[24px] font-bold tracking-tight leading-[1.2] mb-3">
                                    Core Banking System
                                </h3>
                                {/* Applied Figma text settings for the description text */}
                                <p className="text-[12.5px] font-normal leading-[20.3px] text-white/60">
                                    The engine beneath every branch, ledger, and customer record, powering secure banking operations, connected digital experiences, intelligent workflows, payments, compliance, and modern financial infrastructure
                                </p>
                            </div>
                        </div>

                        {/* Render all 7 white cards (01 Accounts … 07 Integration) */}
                        {portfolioCards.map((card) => {
                            const isSelected = selectedCard === card.id;

                            return (
                                <button
                                    type="button"
                                    key={card.id}
                                    tabIndex={0}
                                    onClick={() => setSelectedCard(card.id)}
                                    aria-pressed={isSelected}
                                    className={`text-left w-full bg-white rounded-[20px] p-5 cursor-pointer transition-all duration-300 border flex flex-col justify-start shadow-sm relative group overflow-hidden transform hover:-translate-y-1 hover:shadow-md ${isSelected
                                        ? 'border-[#56B0E6] ring-2 ring-[#56B0E6]/20'
                                        : 'border-[#DCE4EC] hover:border-[#56B0E6]/60'
                                        }`}
                                >
                                    <div className="flex justify-between items-start gap-2">
                                        <div className="w-9 h-9 shrink-0 rounded-full bg-[#EEF3FC] border border-[#DCE4EC] flex items-center justify-center group-hover:border-[#56B0E6] transition-colors">
                                            <Image src={card.icon} alt="" className="h-[18px] w-[18px] object-contain" />
                                        </div>
                                        <span className="text-[11px] font-bold text-[#B4BECC] leading-none mt-1">
                                            {card.number}
                                        </span>
                                    </div>

                                    <div className="mt-3">
                                        <h4 className="text-[14px] font-semibold leading-tight text-gray-900 group-hover:text-[#111E89] transition-colors">
                                            {card.title}
                                        </h4>
                                        <p className="text-[11px] leading-[1.5] text-[#647183] mt-1.5">
                                            {card.description}
                                        </p>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#111E89] to-[#5EAFE6] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </button>
                            );
                        })}

                    </div>

                    {/* Right Text & CTA Section */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="mb-2">
                            <span className="font-['Sora'] text-[10.5px] font-semibold tracking-[2.52px] text-[#111E89] uppercase block mb-4">
                                CORE BANKING
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight leading-[1.2] text-gray-900">
                                The Foundation for Everyday Banking
                            </h2>
                        </div>
                        <p className="text-[#647183] text-[15px] leading-[1.7]">
                            At the heart of LIST Software is Custodian Core Banking System, a comprehensive core banking solution bringing customer management, accounts, deposits, lending, transactions, accounting, and branch operations together on one operational foundation
                        </p>

                        <div className="pt-4">
                            <a
                                href="#portfolio"
                                className="inline-flex items-center justify-between px-7 py-4 rounded-full border border-[#DCE4EC] bg-white text-[#111E89] font-semibold text-sm hover:border-[#56B0E6] hover:shadow-md transition-all duration-300 group"
                            >
                                <span>Explore the Complete LIST Product Portfolio</span>
                                <span className="ml-3 transform group-hover:translate-x-1 transition-transform duration-200">
                                    →
                                </span>
                            </a>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
