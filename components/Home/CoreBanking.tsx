'use client';

import Container from "@/components/common/Container";
import React, { useState } from 'react';

interface PortfolioCard {
    id: number;
    number: string;
    title: string;
    subtitle: string;
    description: string;
    badge?: string;
    icon: React.ReactNode;
}

const portfolioCards: PortfolioCard[] = [
    {
        id: 0,
        number: '01',
        title: 'Accounts',
        subtitle: 'Operating & savings',
        description: 'Manage comprehensive operating and savings accounts with high-performance processing.',
        badge: 'ALWAYS ON',
        icon: (
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
        ),
    },
    {
        id: 1,
        number: '02',
        title: 'Deposits',
        subtitle: 'Term & recurring',
        description: 'Flexible term and recurring deposit management configured for precise financial returns.',
        icon: (
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        id: 2,
        number: '03',
        title: 'Loans',
        subtitle: 'Origination to closure',
        description: 'End-to-end loan tracking and lifecycle management from origination to final closure.',
        icon: (
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        id: 3,
        number: '04',
        title: 'Accounting',
        subtitle: 'Single customer view',
        description: 'Unified single customer view to track profiles, interactions, and financial relationships.',
        icon: (
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        id: 4,
        number: '05',
        title: 'Branch Operations',
        subtitle: 'Maker-checker',
        description: 'Robust maker-checker operational workflows ensuring compliance and authorization control.',
        icon: (
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
    },
    {
        id: 5,
        number: '06',
        title: 'Transaction',
        subtitle: 'Open connectivity',
        description: 'Open API connectivity layers to seamlessly extend services to external ecosystems.',
        icon: (
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        id: 6,
        number: '07',
        title: 'Integration',
        subtitle: 'External systems',
        description: 'Reliable integrations bridging legacy mainframes with modern banking infrastructure.',
        icon: (
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.115 6.845l.209-.41a18.562 18.562 0 012.196-3.328M12 21a9.003 9.003 0 008.354-5.646M9 12a3 3 0 106 0 3 3 0 00-6 0z" />
            </svg>
        ),
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
                                <div
                                    key={card.id}
                                    tabIndex={0}
                                    onClick={() => setSelectedCard(card.id)}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter' || event.key === ' ') {
                                            event.preventDefault();
                                            setSelectedCard(card.id);
                                        }
                                    }}
                                    className={`bg-white rounded-[20px] p-5 cursor-pointer transition-all duration-300 border flex flex-col justify-between shadow-sm relative group overflow-hidden transform hover:-translate-y-1 hover:shadow-md ${isSelected
                                        ? 'border-[#56B0E6] ring-2 ring-[#56B0E6]/20'
                                        : 'border-[#DCE4EC] hover:border-[#56B0E6]/60'
                                        }`}
                                >
                                    <div className="flex justify-between items-start gap-2">
                                        <div className="w-9 h-9 shrink-0 rounded-xl bg-[#F8FAFD] border border-[#DCE4EC] flex items-center justify-center text-[#111E89] group-hover:border-[#56B0E6] transition-colors">
                                            {card.icon}
                                        </div>
                                        <span className="text-[11px] font-bold text-[#B4BECC] leading-none mt-1">
                                            {card.number}
                                        </span>
                                    </div>

                                    <div className="mt-4">
                                        <h4 className="text-[14px] font-bold leading-tight text-gray-900 group-hover:text-[#111E89] transition-colors">
                                            {card.title}
                                        </h4>
                                        <p className="text-[12px] leading-tight text-[#647183] mt-1">
                                            {card.subtitle}
                                        </p>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#111E89] to-[#5EAFE6] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </div>
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
