'use client';
import Container from "@/components/common/Container";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItem {
    numericValue: number;
    suffix: string;
    label: string;
}

const stats: StatItem[] = [
    { numericValue: 20, suffix: '+', label: 'Years of Banking\nTechnology' },
    { numericValue: 100, suffix: '+', label: 'Financial Institutions' },
    { numericValue: 800, suffix: '+', label: 'Branches Connected' },
];

const features: string[] = [
    'Proven Banking Technology',
    'Deep Domain Expertise',
    'Long-Term Partnerships',
    'Continuous Evolution',
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    useEffect(() => {
        if (isInView) {
            let startTime: number | null = null;
            const duration = 2000; // Animation duration in ms (2 seconds)

            const animateCount = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);

                // Easing function for smooth slowdown at the end
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);

                setCount(Math.floor(easeOutQuart * value));

                if (progress < 1) {
                    requestAnimationFrame(animateCount);
                } else {
                    setCount(value); // Ensure it lands exactly on target
                }
            };

            requestAnimationFrame(animateCount);
        }
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
}

export default function ProvenFoundationSection() {
    return (
        <section className="bg-[#F8FAFD] py-16 px-6 sm:px-12 lg:px-20 border-t border-b border-[#DCE4EC]">
            <Container>
                <div className="container mx-auto max-w-7xl">
                    {/* Top Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left Column: Heading and Subtitle */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-6 space-y-6"
                        >
                            <span className="text-xs font-bold tracking-widest text-[#111E89] uppercase">
                                Proven in banking. Built to evolve
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight leading-[1.15] max-w-[740px]">
                                A banking technology foundation built over decades
                            </h2>
                        </motion.div>

                        {/* Right Column: Statistics Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#DCE4EC]"
                        >
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col justify-center ${index !== 0 ? 'sm:pl-8 lg:pl-10' : ''} pt-6 sm:pt-0`}
                                >
                                    <div className="text-4xl sm:text-5xl font-extrabold text-[#111E89] tracking-tight">
                                        <Counter value={stat.numericValue} suffix={stat.suffix} />
                                    </div>
                                    <div className="mt-2 text-sm text-[#647183] font-medium whitespace-pre-line">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Fading Divider Line & Bottom Feature List */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-16 pt-5"
                    >
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#5EAFE6]/50 to-transparent mb-8" />

                        <ul className="flex flex-wrap items-center justify-start gap-y-4 gap-x-12">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center space-x-2.5 text-[#647183] text-sm font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#5EAFE6] inline-block" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}