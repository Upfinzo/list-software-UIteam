'use client';

import Container from "@/components/common/Container";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OutcomeCard {
    id: number;
    step: string;
    action: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const outcomeCards: OutcomeCard[] = [
    {
        id: 0,
        step: '01',
        action: 'CONNECT',
        title: 'Connect Payment Ecosystems',
        description: 'Unify payment networks, banking systems, and digital channels through intelligent connectivity.',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        id: 1,
        step: '02',
        action: 'AUTOMATE',
        title: 'Operate More Efficiently',
        description: 'Simplify banking workflows, minimize manual tasks, and accelerate operational performance.',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        id: 2,
        step: '03',
        action: 'CONTROL',
        title: 'Strengthen Transaction Controls',
        description: 'Reinforce transaction governance, risk oversight, and security across banking operations.',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        id: 3,
        step: '04',
        action: 'EXPAND',
        title: 'Expand Digital Access',
        description: 'Broaden digital banking reach, enhance accessibility, and strengthen customer engagement.',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
    },
    {
        id: 4,
        step: '05',
        action: 'IMPROVE',
        title: 'Improve Operational Visibility',
        description: 'Give management and banking teams access to timely information and reporting.',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
];

export default function BusinessOutcomes() {
    const [activeIndex, setActiveIndex] = useState<number>(4);

    const sectionBgImage = 'url(/images/core-banking-bg.svg)';

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
                {/* Header Content */}
                <div className="max-w-3xl mb-16 space-y-4">
                    <span className="text-xs font-bold tracking-widest text-[#111E89] uppercase">
                        BUSINESS OUTCOMES
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.12] text-gray-900">
                        Technology That Helps Your Bank Move Forward.
                    </h2>
                    <p className="text-[#647183] text-base leading-relaxed max-w-2xl">
                        Turn connected technology into better banking operations — with compliance readiness and extended banking capability around the existing core.
                    </p>
                </div>

                {/* Horizontal Cards Grid */}
                <div className="relative">
                    <div className="absolute top-[40px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#5EAFE6]/10 via-[#5EAFE6]/40 to-[#5EAFE6]/10 z-0 pointer-events-none hidden lg:block" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10 items-start">
                        {outcomeCards.map((card) => {
                            const isActive = activeIndex === card.id;

                            if (isActive) {
                                return (
                                    <div
                                        key={card.id}
                                        onMouseEnter={() => setActiveIndex(card.id)}
                                        className="h-[269px] rounded-[20px] p-5 text-white cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col justify-center gap-6 shadow-xl transform hover:-translate-y-1"
                                        style={{
                                            background: `linear-gradient(135deg, #032683 0%, #111E89 60%, #56B0E6 100%)`,
                                            backgroundBlendMode: 'overlay',
                                        }}
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0">
                                            {card.icon}
                                        </div>

                                        <div className="space-y-2">
                                            <div
                                                className="text-[11px] font-semibold text-[#5EAFE6] uppercase"
                                                style={{ letterSpacing: '2.2px', lineHeight: '16.5px' }}
                                            >
                                                {card.step} · {card.action}
                                            </div>
                                            <h3
                                                className="text-[14.5px] font-medium text-white"
                                                style={{ letterSpacing: '-0.36px', lineHeight: '19.9px' }}
                                            >
                                                {card.title}
                                            </h3>
                                            <AnimatePresence>
                                                <motion.p
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="text-white/80 text-[13px] leading-relaxed pt-1"
                                                >
                                                    {card.description}
                                                </motion.p>
                                            </AnimatePresence>
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#111E89] via-[#56B0E6] to-[#5EAFE6]" />
                                    </div>
                                );
                            }

                            return (
                                <div
                                    key={card.id}
                                    onMouseEnter={() => setActiveIndex(card.id)}
                                    className="h-[269px] bg-white/90 rounded-[20px] p-5 cursor-pointer transition-all duration-300 border border-[#DCE4EC] hover:border-[#5EAFE6]/60 flex flex-col justify-center gap-6 shadow-sm relative group overflow-hidden transform hover:-translate-y-1 hover:shadow-md"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-[#F8FAFD] border border-[#DCE4EC] flex items-center justify-center text-[#111E89] group-hover:border-[#5EAFE6] transition-colors shrink-0">
                                        {card.icon}
                                    </div>

                                    <div className="space-y-2">
                                        <div
                                            className="text-[11px] font-semibold text-[#5EAFE6] uppercase"
                                            style={{ letterSpacing: '2.2px', lineHeight: '16.5px' }}
                                        >
                                            {card.step} · {card.action}
                                        </div>
                                        <h3
                                            className="text-[14.5px] font-medium text-[#121F37] group-hover:text-[#111E89] transition-colors"
                                            style={{ letterSpacing: '-0.36px', lineHeight: '19.9px' }}
                                        >
                                            {card.title}
                                        </h3>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#111E89] to-[#5EAFE6] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}