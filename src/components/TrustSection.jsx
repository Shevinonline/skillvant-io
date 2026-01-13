import React from "react";
import { motion } from "framer-motion";
import { Layers, Zap, Cpu, MousePointer2 } from "lucide-react";

const LogoItem = ({ children, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay }}
        className="group relative flex items-center justify-center cursor-pointer px-4 py-2"
    >
        <div className="text-gray-400 group-hover:text-skillvant-purple transition-all duration-300 filter group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">
            {children}
        </div>
    </motion.div>
);

export default function TrustSection() {
    return (
        <section className="bg-[#080808] py-16 relative border-y border-white/5">

            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Heading */}
                <h3 className="text-skillvant-purple/50 font-mono text-xs font-bold tracking-[0.3em] uppercase mb-10">
                    Our Learners Work At
                </h3>

                {/* Stable Grid */}
                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-80 hover:opacity-100 transition-opacity duration-500">

                    {/* Fiverr */}
                    <LogoItem delay={0.1}>
                        <span className="font-black text-3xl font-inter tracking-tighter">fiverr.</span>
                    </LogoItem>

                    {/* Upwork */}
                    <LogoItem delay={0.2}>
                        <span className="font-bold text-3xl font-space-grotesk tracking-tight">upwork</span>
                    </LogoItem>

                    {/* Contra */}
                    <LogoItem delay={0.3}>
                        <div className="flex items-center gap-1">
                            <Zap className="w-5 h-5 fill-current" />
                            <span className="font-black text-2xl font-inter uppercase tracking-widest">Contra</span>
                        </div>
                    </LogoItem>

                    {/* Skillvant (Primary) */}
                    <LogoItem delay={0.4}>
                        <div className="flex items-center gap-2">
                            <Layers className="w-6 h-6" />
                            <span className="font-bold text-2xl font-space-grotesk tracking-wide">SKILLVANT</span>
                        </div>
                    </LogoItem>

                    {/* Synapse */}
                    <LogoItem delay={0.5}>
                        <div className="flex items-center gap-2">
                            <Cpu className="w-5 h-5" />
                            <span className="font-mono text-lg font-medium tracking-tighter">synapse_labs</span>
                        </div>
                    </LogoItem>

                </div>
            </div>
        </section>
    );
}
