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
const getStatClassName = (index: number, total: number) => {
    if (index === 0) {
        return 'pt-0 sm:pr-8 lg:pr-10';
    }

    if (index === total - 1) {
        return 'pb-0 sm:pl-8 lg:pl-10';
    }

    return 'sm:px-8 lg:px-10';
};
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
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                        {/* Left Column: Heading and Subtitle */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-6 space-y-6"
                        >
                            <span className="font-['Sora'] text-[11px] font-semibold leading-[16.5px] tracking-[2.42px] pb-4 text-[#111E89] uppercase">
                                Proven in banking. Built to evolve
                            </span>
                            <h2 className="font-['Sora'] text-[33.6px] font-semibold leading-[42px] tracking-[-0.84px] text-[#121F37] max-w-[740px] pt-4">
                               A banking technology foundation built  over decades with the experience to support what comes next 
                            </h2>
                        </motion.div>

                        {/* Right Column: Statistics */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            // CHANGED: Using flex instead of grid avoids conflict between 'gap' and 'divide' spacing on mobile
                            className="lg:col-span-6 flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-[#DCE4EC]"
                        >
                            {stats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    // Targeted padding ensures proper spacing and removes excess bottom padding from the last item
                                    className={`flex flex-col justify-center py-8 sm:py-0 ${getStatClassName(
                                        index,
                                        stats.length,
                                    )}`}
                                >
                                    <div className="font-['Sora'] text-[48px] font-semibold leading-[48px] tracking-[-1.2px] text-[#111E89]">
                                        <Counter
                                            value={stat.numericValue}
                                            suffix={stat.suffix}
                                        />
                                    </div>

                                    <div className="mt-2 whitespace-pre-line text-[13px] font-normal leading-[17.9px] tracking-[0px] text-[#647183]">
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
                        className=" pt-4"
                    >
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#5EAFE6]/50 to-transparent mb-8" />

                        {/* CHANGED: Adjusted to grid on mobile so it splits neatly into 2 columns if space allows, matching the image */}
                        <ul className="grid grid-cols-1 min-[450px]:grid-cols-2 md:flex md:flex-wrap md:items-center justify-start gap-y-4 gap-x-12">
                            {features.map((feature) => (
                                <li key={feature} className="flex items-center space-x-2.5 font-['Sora'] text-[12.5px] font-medium leading-[18.8px] tracking-[0.75px] text-[#647183]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#5EAFE6] shrink-0" />
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
