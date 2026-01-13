import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Brain, Layout, Globe, Server, Shield, Terminal, BarChart2, Smartphone,
    Code2, Database, Cloud, Lock, Cpu, Joystick, Briefcase,
    PenTool, Image, Grid, Palette, Box, Rocket, UserCheck, Megaphone, FileText,
    Users, DollarSign, Gem, Layers, Fingerprint, Package, Blocks, Activity, Award
} from "lucide-react";

// TAB 01: TOP SUBJECTS (24 Items)
const topSubjects = [
    // AI & Neural Networks
    { icon: Terminal, title: "Prompt Engineering" },
    { icon: Brain, title: "Generative AI Mastery" },
    { icon: Activity, title: "Neural Network Basics" },
    { icon: Activity, title: "AI Workflow Automation" },
    { icon: Terminal, title: "LLM Implementation" },
    { icon: Briefcase, title: "AI for Business Strategy" },

    // Design & Aesthetics
    { icon: Layout, title: "UI/UX Architecture" },
    { icon: PenTool, title: "Neo-Bauhaus Design Theory" },
    { icon: Image, title: "Visual Storytelling" },
    { icon: Grid, title: "Design Systems with AI" },
    { icon: Palette, title: "Brand Identity Design" },
    { icon: Box, title: "Web3 Aesthetics" },

    // Tech & Development
    { icon: Code2, title: "Full-Stack Web Dev" },
    { icon: Rocket, title: "Micro-SaaS Development" },
    { icon: Smartphone, title: "App Dev with AI" },
    { icon: Shield, title: "Cybersecurity Fundamentals" },
    { icon: Cloud, title: "Cloud Infrastructure" },
    { icon: Database, title: "Data Science for Creators" },

    // Growth & Branding
    { icon: UserCheck, title: "Personal Branding Elite" },
    { icon: Megaphone, title: "Digital Marketing AI" },
    { icon: FileText, title: "Content Strategy" },
    { icon: Users, title: "Client Acquisition Mastery" },
    { icon: DollarSign, title: "High-Ticket Sales" },
    { icon: Globe, title: "Future Literacy" }
];

// TAB 02: CERTIFICATION PREP (12 Items)
const certPrep = [
    { icon: Cpu, title: "AI System Architect" },
    { icon: Terminal, title: "Certified Prompt Engineer" },
    { icon: Gem, title: "UI/UX Aesthetic Specialist" },
    { icon: Layers, title: "Full-Stack AI Developer" },
    { icon: Fingerprint, title: "Digital Brand Strategist" },
    { icon: Package, title: "Micro-SaaS Product Manager" },
    { icon: BarChart2, title: "Data-Driven Creative Director" },
    { icon: Blocks, title: "Verified Web3 Architect" },
    { icon: Rocket, title: "Certified Growth Hacker" },
    { icon: Lock, title: "Advanced Cybersecurity Practitioner" },
    { icon: Activity, title: "Master of Digital Workflow" },
    { icon: Award, title: "Skillvant Certified Mentor" }
];

const TabButton = ({ isActive, onClick, label }) => (
    <button
        onClick={onClick}
        className={`pb-4 px-1 text-sm md:text-base font-bold font-mono transition-all duration-300 relative uppercase tracking-wider ${isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
            }`}
    >
        {label}
        {isActive && (
            <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 w-full h-[2px] bg-skillvant-purple"
            />
        )}
    </button>
);

const SubjectCard = ({ icon: Icon, title }) => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group border border-[#333] bg-[#0A0A0A] h-16 px-6 flex items-center gap-4 cursor-pointer transition-all duration-300 hover:border-skillvant-purple hover:bg-[#111]"
    >
        <div className="text-gray-400 group-hover:text-skillvant-purple transition-colors">
            <Icon strokeWidth={1.5} className="w-6 h-6" />
        </div>
        <h3 className="text-sm font-space-grotesk font-bold text-white group-hover:text-white tracking-tight leading-none">
            {title}
        </h3>
    </motion.div>
);

export default function TabbedGrid() {
    const [activeTab, setActiveTab] = useState("subjects");

    return (
        <section className="bg-[#050505] py-24 px-6 border-b border-[#111]">
            <div className="max-w-7xl mx-auto">

                {/* Heading like reference */}
                <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold text-white mb-12">
                    Mastery Hub
                </h2>

                {/* Tab Header - Left Aligned */}
                <div className="flex justify-start mb-10 border-b border-[#222]">
                    <div className="flex gap-8 overflow-x-auto no-scrollbar">
                        <TabButton
                            label="Top subjects"
                            isActive={activeTab === "subjects"}
                            onClick={() => setActiveTab("subjects")}
                        />
                        <TabButton
                            label="Certification prep"
                            isActive={activeTab === "certs"}
                            onClick={() => setActiveTab("certs")}
                        />
                    </div>
                </div>

                {/* Content Area */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {activeTab === "subjects" ? (
                            <motion.div
                                key="subjects"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                            >
                                {topSubjects.map((item, idx) => (
                                    <SubjectCard key={idx} icon={item.icon || item.iconComp || Activity} title={item.title} />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="certs"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                            >
                                {certPrep.map((item, idx) => (
                                    <SubjectCard key={idx} icon={item.icon} title={item.title} />
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
