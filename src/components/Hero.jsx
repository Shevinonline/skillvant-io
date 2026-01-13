import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Globe, CheckCircle2, TrendingUp, Users } from "lucide-react";
import HeroImage from '../assets/hero_student.png';

const skills = ["AI", "DESIGN", "DOMINANCE"];

const FloatingCard = ({ children, className, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: delay }}
        className={`absolute bg-[#0A0A0A]/90 backdrop-blur-md border border-[#222] p-4 flex items-center gap-3 shadow-2xl z-20 rounded-lg ${className}`}
    >
        {children}
    </motion.div>
);

const GrowthPath = () => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl z-30 hidden xl:block"
    >
        <div className="flex items-center gap-2 mb-6 bg-white/10 p-2 rounded-lg w-fit">
            <span className="text-skillvant-purple font-space-grotesk font-bold text-sm">Trusted Growth Path</span>
        </div>

        <div className="relative border-l-2 border-gray-700 ml-3 space-y-8 pl-6 py-2">
            {/* Step 3 */}
            <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-skillvant-purple border-2 border-black" />
                <p className="text-white font-bold font-space-grotesk">Associate AI Architect</p>
                <p className="text-xs text-skillvant-purple font-mono">$85k - $120k/yr</p>
            </div>
            {/* Step 2 */}
            <div className="relative opacity-70">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-500 border-2 border-black" />
                <p className="text-gray-300 font-bold font-space-grotesk">Junior Developer</p>
                <p className="text-xs text-gray-500 font-mono">First Hire</p>
            </div>
            {/* Step 1 */}
            <div className="relative opacity-40">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-700 border-2 border-black" />
                <p className="text-gray-400 font-bold font-space-grotesk">Zero Exp Beginner</p>
                <p className="text-xs text-gray-600 font-mono">Starting Point</p>
            </div>
        </div>
    </motion.div>
);

const UserAvatar = ({ className, delay }) => (
    <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay, type: "spring" }}
        className={`absolute w-12 h-12 rounded-full border-2 border-skillvant-purple overflow-hidden z-20 bg-[#111] flex items-center justify-center ${className}`}
    >
        <Users className="w-6 h-6 text-gray-400" />
    </motion.div>
);

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % skills.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="min-h-screen bg-[#080808] relative overflow-hidden flex items-center pt-20 px-6">

            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:30px_30px]" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-skillvant-purple/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

                {/* Left Content */}
                <div className="max-w-2xl relative z-20"> {/* Elevated z-index to stay above overlapping images on small screens */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 mb-8 px-4 py-1 border border-skillvant-purple/30 bg-skillvant-purple/5 text-skillvant-purple font-mono text-xs tracking-widest uppercase"
                    >
                        <span className="w-2 h-2 rounded-full bg-skillvant-purple animate-pulse" />
                        The Elite Foundry
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk leading-[0.9] tracking-tighter mb-8 text-white">
                        MASTER <br />
                        <div className="h-[1.1em] overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={skills[index]}
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -50, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="block text-transparent bg-clip-text bg-gradient-to-r from-skillvant-purple to-secondary"
                                >
                                    {skills[index]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk leading-[0.9] tracking-tighter mb-8 text-white">
                        THE BLUEPRINT <br />
                        <span className="text-gray-500">OF THE NEW ELITE.</span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg text-gray-400 font-inter leading-relaxed mb-10 max-w-lg"
                    >
                        Join the global foundry where creators become architects. Master AI-Integrated Design and Software Engineering through intensive, result-driven paths.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        <button className="bg-skillvant-purple text-black px-8 py-4 font-space-grotesk font-bold text-lg hover:bg-white transition-colors min-w-[200px]">
                            START THE ASCENT
                        </button>
                        <button className="text-white font-space-grotesk font-bold text-lg hover:text-skillvant-purple transition-colors flex items-center gap-2 group">
                            VIEW CURRICULUM <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>

                {/* Right Visual - Student Growth Path Composition */}
                <div className="relative h-[600px] flex items-center justify-center">

                    {/* Main Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative z-10 w-full h-full flex items-center justify-center"
                    >
                        <img
                            src={HeroImage}
                            alt="Student Master"
                            className="max-h-full object-contain filter drop-shadow-2xl relative z-10"
                        />

                        {/* Glow behind head */}
                        <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-skillvant-purple/30 blur-[80px] rounded-full pointer-events-none" />
                    </motion.div>

                    {/* --- THE REFERENCE UI ELEMENTS --- */}

                    {/* 1. Growth Path Left Overlay */}
                    <GrowthPath />

                    {/* 2. Floating Community Avatars (Right Side) */}
                    <UserAvatar delay={1.2} className="top-20 right-10 md:right-0 bg-blue-900" />
                    <UserAvatar delay={1.4} className="top-40 right-4 md:-right-6 bg-indigo-900" />

                    {/* 3. Floating Card: Live Class (Target: Top Left) */}
                    <FloatingCard delay={1.6} className="top-10 -left-6 md:-left-12 border-l-4 border-l-red-500 w-auto min-w-[220px]">
                        <div className="bg-red-500/10 p-2 rounded-full">
                            <Play className="w-4 h-4 text-red-500 fill-red-500" />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Up Next</p>
                            <p className="text-white font-bold text-sm">AI-Integrated Design <span className="text-red-500 text-[10px] align-top ml-1">● LIVE</span></p>
                        </div>
                    </FloatingCard>

                    {/* 4. Floating Card: Student Success (Bottom Right) */}
                    <FloatingCard delay={1.8} className="bottom-20 -right-6 md:-right-10 border-l-4 border-l-skillvant-purple w-auto min-w-[220px]">
                        <div className="bg-skillvant-purple/10 p-2 rounded-full">
                            <TrendingUp className="w-4 h-4 text-skillvant-purple" />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Latest Win</p>
                            <p className="text-white font-bold text-sm">Student earned $2k/week</p>
                        </div>
                    </FloatingCard>

                </div>
            </div>
        </section>
    );
}
