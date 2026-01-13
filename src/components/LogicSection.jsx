import React from "react";
import { Brain, Layout, TrendingUp } from "lucide-react";

const verticals = [
    {
        title: "AI Mastery",
        desc: "Advanced Prompt Engineering & Autonomous Workflows.",
        icon: Brain,
        id: "01"
    },
    {
        title: "Design Systems",
        desc: "UI/UX Architecture & Aesthetic Theory.",
        icon: Layout,
        id: "02"
    },
    {
        title: "Brand Equity",
        desc: "Personal Branding & Micro-SaaS Growth.",
        icon: TrendingUp,
        id: "03"
    }
];

export default function LogicSection() {
    return (
        <section className="py-24 bg-skillvant-black text-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-xl font-mono text-gray-500 mb-12">01 // CORE VERTICALS</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-t border-b border-white/10">
                    {verticals.map((item, index) => (
                        <div
                            key={index}
                            className="group p-8 md:p-12 transition-colors duration-500 hover:bg-skillvant-dark-grey relative overflow-hidden"
                        >
                            <div className="flex flex-col gap-6 relative z-10">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-skillvant-purple/10 transition-colors">
                                    <item.icon className="w-6 h-6 text-white group-hover:text-skillvant-purple transition-colors" />
                                </div>

                                <h3 className="text-2xl font-space-grotesk font-bold">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 font-inter leading-relaxed max-w-xs group-hover:text-gray-300 transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
