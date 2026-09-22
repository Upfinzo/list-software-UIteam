'use client';

import Container from "@/components/common/Container";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const connectcore = [
    "Build",
    "Connect",
    "Integrate",
    "Evolve",
];
interface CoreTab {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const tabs: CoreTab[] = [
    {
        id: 0,
        title: 'Core Banking',
        description: 'Accounts, deposits, loans, transactions, accounting, branches Operations',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        id: 1,
        title: 'Payments & Transactions',
        description: 'RTGS, EFT, NACH, CTS, Positive Pay, beneficiary verification, PFMS and digital payment connectivity',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Compliance & Risk',
        description: 'AML, CKYC, identity validation, audit and credit-bureau reporting',
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
        title: 'Digital Banking',
        description: 'Mobile banking, internet banking, WhatsApp banking, e-passbook and customer communication.',
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                <path d="M12.0004 5.33317V3.99984C12.0004 3.64622 11.8599 3.30708 11.6099 3.05703C11.3598 2.80698 11.0207 2.6665 10.667 2.6665H2.66704C2.31342 2.6665 1.97428 2.80698 1.72423 3.05703C1.47419 3.30708 1.33371 3.64622 1.33371 3.99984V8.6665C1.33371 9.02013 1.47419 9.35926 1.72423 9.60931C1.97428 9.85936 2.31342 9.99984 2.66704 9.99984H8.00038" stroke="currentColor" strokeWidth="0.991667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.66629 12.6669V10.0269V12.1269" stroke="currentColor" strokeWidth="0.991667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.66629 12.6665H7.99962" stroke="currentColor" strokeWidth="0.991667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.333 8H11.9996C11.2632 8 10.6663 8.59695 10.6663 9.33333V13.3333C10.6663 14.0697 11.2632 14.6667 11.9996 14.6667H13.333C14.0693 14.6667 14.6663 14.0697 14.6663 13.3333V9.33333C14.6663 8.59695 14.0693 8 13.333 8Z" stroke="currentColor" strokeWidth="0.991667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>


        ),
    },
    {
        id: 5,
        title: 'Integration & Connectivity',
        description: 'APIs, banking interfaces, third-party integrations and connected systems that extend core banking capabilities.',
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" >
                <path d="M2.7002 8.6084C2.28305 8.81359 1.92978 9.1143 1.64551 9.50586C1.28234 10.0062 1.09961 10.5767 1.09961 11.2002C1.09966 11.9979 1.38484 12.6925 1.94629 13.2539C2.50777 13.8153 3.20228 14.0996 4 14.0996C4.79772 14.0996 5.49223 13.8153 6.05371 13.2539C6.61516 12.6925 6.90034 11.9979 6.90039 11.2002V10.9004H11.3242L11.4736 10.7324C11.5335 10.665 11.6092 10.6078 11.7061 10.5615C11.7856 10.5235 11.8806 10.5 12 10.5C12.202 10.5 12.3577 10.5649 12.4961 10.7031C12.6346 10.8416 12.7002 10.998 12.7002 11.2002C12.7002 11.4023 12.6345 11.5578 12.4961 11.6963C12.3576 11.8347 12.2022 11.9004 12 11.9004C11.8807 11.9004 11.7856 11.8769 11.7061 11.8389C11.6092 11.7926 11.5335 11.7353 11.4736 11.668L11.3242 11.5H7.51172L7.42969 11.9004C7.26581 12.7081 6.86977 13.3717 6.22949 13.9062C5.59548 14.4355 4.85978 14.7002 4 14.7002C3.0255 14.7002 2.20931 14.3626 1.52344 13.6768C0.837594 12.9909 0.500045 12.1747 0.5 11.2002C0.5 10.3404 0.76467 9.60471 1.29395 8.9707C1.68987 8.49646 2.15663 8.15654 2.7002 7.94531V8.6084ZM8.40039 3.2998C8.60244 3.29989 8.75807 3.36549 8.89648 3.50391C9.03485 3.64236 9.09961 3.79786 9.09961 4V4.14258C9.09851 4.14567 9.09755 4.14968 9.0957 4.1543L9.00391 4.38379L9.13086 4.5957L10.8701 7.51562L11.0605 7.83496L11.4209 7.74512C11.4942 7.72679 11.5766 7.71406 11.668 7.70898C11.7787 7.70284 11.8893 7.7002 12 7.7002C12.9745 7.7002 13.7907 8.03774 14.4766 8.72363C15.1624 9.4095 15.5 10.2257 15.5 11.2002C15.5 12.1747 15.1624 12.9909 14.4766 13.6768C13.7907 14.3626 12.9745 14.7002 12 14.7002C11.3394 14.7002 10.7529 14.5386 10.2285 14.2217C9.97748 14.0699 9.7538 13.8956 9.55469 13.7002H10.5332C10.7276 13.82 10.9363 13.9139 11.1592 13.9795C11.4323 14.0598 11.7131 14.0996 12 14.0996C12.7977 14.0996 13.4922 13.8153 14.0537 13.2539C14.6152 12.6925 14.9003 11.9979 14.9004 11.2002C14.9004 10.4025 14.6151 9.70797 14.0537 9.14648C13.4922 8.58499 12.7978 8.2998 12 8.2998C11.6873 8.2998 11.3883 8.34341 11.1064 8.43457C10.9994 8.46922 10.8955 8.51197 10.7939 8.55957L8.6084 4.92285L8.49316 4.73047L8.27344 4.68848C8.10269 4.65592 7.96905 4.57974 7.85645 4.45117C7.75632 4.33674 7.7002 4.19628 7.7002 4C7.7002 3.7979 7.76502 3.64233 7.90332 3.50391C8.04182 3.36541 8.19815 3.2998 8.40039 3.2998ZM8.40039 0.5C9.37462 0.50009 10.1902 0.837836 10.876 1.52344C11.4411 2.08859 11.7699 2.74226 11.8682 3.5H11.2578C11.1619 2.90996 10.8938 2.38694 10.4531 1.94629C9.89177 1.38508 9.19785 1.0997 8.40039 1.09961C7.60272 1.09961 6.90815 1.38492 6.34668 1.94629C5.78518 2.50779 5.5 3.20224 5.5 4C5.5 4.6828 5.70979 5.29715 6.12988 5.82227C6.40163 6.16192 6.72607 6.42263 7.09766 6.60449L4.71094 10.583L4.58398 10.7959L4.67578 11.0254C4.69131 11.0642 4.69434 11.0821 4.69434 11.082C4.6979 11.1106 4.7002 11.1496 4.7002 11.2002C4.70015 11.4023 4.63455 11.5578 4.49609 11.6963C4.35762 11.8347 4.20219 11.9004 4 11.9004C3.79781 11.9004 3.64238 11.8347 3.50391 11.6963C3.36545 11.5578 3.29985 11.4023 3.2998 11.2002C3.2998 11.0235 3.35229 10.8882 3.45605 10.7695C3.57774 10.6305 3.71649 10.546 3.88086 10.5049L4.08203 10.4551L4.18848 10.2783L6.06836 7.1582L6.27734 6.81055L5.98047 6.53418C5.6453 6.22211 5.38105 5.8481 5.1875 5.4082C4.99692 4.97491 4.90039 4.50734 4.90039 4C4.90039 3.02546 5.23794 2.20933 5.92383 1.52344C6.60968 0.837679 7.42594 0.5 8.40039 0.5Z" stroke="currentColor" />
            </svg>

        ),
    },
];

const lineCoords = [
    { id: 'top', x1: '50%', y1: '10%', x2: '50%', y2: '50%' },
    { id: 'top-right', x1: '80%', y1: '28%', x2: '50%', y2: '50%' },
    { id: 'bottom-right', x1: '80%', y1: '72%', x2: '50%', y2: '50%' },
    { id: 'bottom', x1: '50%', y1: '90%', x2: '50%', y2: '50%' },
    { id: 'bottom-left', x1: '20%', y1: '72%', x2: '50%', y2: '50%' },
    { id: 'top-left', x1: '20%', y1: '28%', x2: '50%', y2: '50%' },
];

export default function ConnectedCore() {
    const [activeTab, setActiveTab] = useState<number>(0);

    const nodePositions = [
        { id: 'top', top: '2%', left: '50%', transform: 'translate(-50%, -50%)' },
        { id: 'top-right', top: '24%', left: '85%', transform: 'translate(-50%, -50%)' },
        { id: 'bottom-right', top: '76%', left: '85%', transform: 'translate(-50%, -50%)' },
        { id: 'bottom', top: '98%', left: '50%', transform: 'translate(-50%, -50%)' },
        { id: 'bottom-left', top: '76%', left: '15%', transform: 'translate(-50%, -50%)' },
        { id: 'top-left', top: '24%', left: '15%', transform: 'translate(-50%, -50%)' },
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
                    <div className="lg:col-span-7 space-y-4  ">
                        <span className="text-xs font-bold tracking-widest text-[#111E89] uppercase">
                            THE CONNECTED CORE
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight mt-3 leading-[1.12]">
                            One Core. Connected Capabilities <span className="text-[#647183]">Built to Work Together</span>
                        </h2>
                        <p className="text-[#647183] lg:text-[15px] mt-3 text-base leading-relaxed">
                            LIST Software’s core banking software connects the Custodian Core Banking Solution with digital banking, payments, APIs, compliance and operational technologies, enables financial institutions to extend, integrate and modernize their banking capabilities without disrupting the operational foundation at the center
                        </p>
                        <ul className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
                            {connectcore.map((connectcore) => (
                                <li
                                    key={connectcore}
                                    className="chip-shadow inline-flex h-[34.5px] items-center rounded-full border border-[#DCE4EC] bg-[#F8FAFD] px-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#121F37]"
                                >
                                    {connectcore}
                                </li>
                            ))}
                        </ul>
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
                                {lineCoords.map((line) => (
                                    <line key={line.id} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="#DCE4EC" strokeWidth="1" />
                                ))}
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
                                const line = lineCoords[activeTab];
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