'use client';

import Container from "@/components/common/Container";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CoreTab {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const tabs: CoreTab[] = [
    {
        id: 0,
        title: 'Digital Core Banking',
        description: 'Accounts, deposits, loans, transactions, accounting, branches, mobile, internet, WhatsApp, e-passbook and customer communication.',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        id: 1,
        title: 'Payments & Transactions',
        description: 'RTGS, EFT, NACH, CTS, Positive Pay, beneficiary verification, PFMS and digital payment connectivity.',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Compliance & Risk',
        description: 'AML, CKYC, identity validation, audit and credit-bureau reporting.',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Operations & Intelligence',
        description: 'Reporting, customer management, recovery workflows, investments, and operational automation',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Built',
        description: 'A dependable foundation for everyday financial operations.',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        id: 5,
        title: 'Connect',
        description: 'Unify banking experiences across channels, services, payments, and operational workflows.',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
];

export default function ConnectedCore() {
    const [activeTab, setActiveTab] = useState<number>(0);

    const nodePositions = [
        { top: '2%', left: '50%', transform: 'translate(-50%, -50%)' },
        { top: '24%', left: '85%', transform: 'translate(-50%, -50%)' },
        { top: '76%', left: '85%', transform: 'translate(-50%, -50%)' },
        { top: '98%', left: '50%', transform: 'translate(-50%, -50%)' },
        { top: '76%', left: '15%', transform: 'translate(-50%, -50%)' },
        { top: '24%', left: '15%', transform: 'translate(-50%, -50%)' },
    ];

    return (
        <section className="bg-white py-12 lg:py-16 overflow-hidden">
            <style jsx global>{`
        @keyframes smoothDashMove {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -36; }
        }
        .animate-smooth-flow {
          animation: smoothDashMove 2s linear infinite;
        }

        @keyframes infiniteDotFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -24; }
        }
        .animate-infinite-dots {
          animation: infiniteDotFlow 3s linear infinite;
        }
      `}</style>

            <Container>
                {/* 1. SEPARATE HEADING ROW */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-10 sm:mb-12">
                    <div className="lg:col-span-7 space-y-4 max-w-xl">
                        <span className="text-xs font-bold tracking-widest text-[#111E89] uppercase">
                            THE CONNECTED CORE
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight mt-3 leading-[1.12]">
                            One Core. Connected Capabilities. <span className="text-[#647183]">Built to Work Together.</span>
                        </h2>
                        <p className="text-[#647183] lg:text-[15px] mt-3 text-base leading-relaxed">
                            LIST Software’s core banking software connects the Custodian Core Banking Solution with digital banking, payments, APIs, compliance and operational technologies, enables financial institutions to extend, integrate and modernize their banking capabilities without disrupting the operational foundation at the center.
                        </p>
                    </div>
                </div>

                {/* 2. ACCORDION & CIRCLE ROW - Aligned to items-start */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Interactive Tabs with Fixed Height */}
                    {/* Applying a fixed height ensures the block doesn't expand/shrink on hover */}
                    <div className="lg:col-span-7 w-full h-[450px] lg:h-[480px]">
                        <div className="flex flex-col w-full">
                            {tabs.map((tab, index, array) => {
                                const isActive = activeTab === tab.id;
                                const isLast = index === array.length - 1;
                                const borderClass = isLast ? '' : 'border-b border-[#DCE4EC]';

                                return (
                                    <div
                                        key={tab.id}
                                        onMouseEnter={() => setActiveTab(tab.id)}
                                        className={`group relative flex items-start py-5 cursor-pointer transition-colors duration-200 ${borderClass}`}
                                    >
                                        <div className="flex items-start gap-5 w-full">
                                            {/* Icon Container */}
                                            <div
                                                className={`w-[36px] h-[36px] shrink-0 rounded-[16px] flex items-center justify-center transition-all duration-200 ${isActive
                                                        ? 'bg-gradient-to-b from-[#F4F9FF] to-[#E8F1FA] border border-[#56B0E6]/70 text-[#111E89]'
                                                        : 'bg-transparent text-[#8C9BB4] border border-[#DCE4EC] group-hover:bg-gradient-to-b group-hover:from-[#F4F9FF] group-hover:to-[#E8F1FA] group-hover:border-[#56B0E6]/70 group-hover:text-[#111E89]'
                                                    }`}
                                            >
                                                {tab.icon}
                                            </div>

                                            <div className="flex flex-col justify-center w-full">
                                                <h4 className={`font-['Sora'] text-[16px] leading-[24px] tracking-[-0.4px] transition-colors duration-200 ${isActive
                                                        ? 'font-bold text-[#121F37]'
                                                        : 'font-medium text-[#647183] group-hover:text-[#121F37]'
                                                    }`}>
                                                    {tab.title}
                                                </h4>

                                                <AnimatePresence initial={false}>
                                                    {isActive && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pt-2">
                                                                <p className="text-[14px] font-normal leading-[22.8px] tracking-[0px] text-[#647183]">
                                                                    {tab.description}
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Circular Interactive Diagram - Matches top alignment */}
                    <div className="lg:col-span-5 flex justify-center items-start pt-2 lg:pt-0">
                        <div className="relative w-[380px] h-[380px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">

                            <div className="absolute inset-20 rounded-full border border-[#DCE4EC] pointer-events-none" />
                            <div className="absolute inset-8 rounded-full border border-dashed border-[#56B0E6]/20 last-line pointer-events-none" />

                            <svg className="absolute inset-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] pointer-events-none overflow-visible">
                                <circle
                                    cx="50%" cy="50%" r="50%"
                                    fill="none"
                                    stroke="#56B0E6"
                                    strokeWidth="2"
                                    strokeDasharray="8 12"
                                    className="animate-infinite-dots"
                                />
                            </svg>

                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                {nodePositions.map((_, index) => {
                                    const allCoords = [
                                        { x1: '50%', y1: '10%', x2: '50%', y2: '50%' }, // Top
                                        { x1: '80%', y1: '28%', x2: '50%', y2: '50%' }, // Top-Right
                                        { x1: '80%', y1: '72%', x2: '50%', y2: '50%' }, // Bottom-Right
                                        { x1: '50%', y1: '90%', x2: '50%', y2: '50%' }, // Bottom
                                        { x1: '20%', y1: '72%', x2: '50%', y2: '50%' }, // Bottom-Left
                                        { x1: '20%', y1: '28%', x2: '50%', y2: '50%' }, // Top-Left
                                    ];
                                    const line = allCoords[index];
                                    return (
                                        <line key={index} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="#DCE4EC" strokeWidth="1" />
                                    );
                                })}
                            </svg>

                            {/* Center Core Box Content */}
                            <div className="absolute z-10 w-[240px] sm:w-[260px] min-h-[140px] bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(86,176,230,0.15)] border border-[#DCE4EC] text-center flex flex-col items-center justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex flex-col items-center"
                                    >
                                        <span className="text-[11px] font-extrabold tracking-widest text-[#111E89] uppercase mb-2">
                                            {tabs[activeTab].title}
                                        </span>
                                        <p className="text-xs sm:text-sm text-[#647183] leading-relaxed">
                                            {tabs[activeTab].description}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Solid Blue Straight Line for Active Hover State */}
                            {(() => {
                                const activeCoords = [
                                    { x1: '50%', y1: '10%', x2: '50%', y2: '50%' }, // Top
                                    { x1: '80%', y1: '28%', x2: '50%', y2: '50%' }, // Top-Right
                                    { x1: '80%', y1: '72%', x2: '50%', y2: '50%' }, // Bottom-Right
                                    { x1: '50%', y1: '90%', x2: '50%', y2: '50%' }, // Bottom
                                    { x1: '20%', y1: '72%', x2: '50%', y2: '50%' }, // Bottom-Left
                                    { x1: '20%', y1: '28%', x2: '50%', y2: '50%' }, // Top-Left
                                ];
                                const line = activeCoords[activeTab];
                                return (
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-1">
                                        <line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="#56B0E6" strokeWidth="2.5" />
                                    </svg>
                                );
                            })()}

                            {/* Floating Node Icons Around the Circle */}
                            {tabs.map((tab, index) => {
                                const isActive = activeTab === index;
                                return (
                                    <div
                                        key={tab.id}
                                        style={nodePositions[index]}
                                        className="absolute cursor-pointer p-2 z-30"
                                        onMouseEnter={() => setActiveTab(index)}
                                    >
                                        <div
                                            className={`w-[58px] h-[58px] rounded-[22.4px] flex items-center justify-center transition-all duration-200 ${isActive
                                                    ? 'text-white border border-[#56B0E6] shadow-[0_10px_25px_rgba(86,176,230,0.4)] ring-4 ring-[#56B0E6]/20'
                                                    : 'bg-white text-[#111E89] hover:border-[#56B0E6] border-[1.12px] border-[#DCE4EC] shadow-sm'
                                                }`}
                                            style={isActive ? { background: 'linear-gradient(135deg, #032683 0%, #56B0E6 100%)' } : {}}
                                        >
                                            {tab.icon}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}