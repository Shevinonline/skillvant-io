import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ExternalLink, Code2, Database, Layout, Smartphone, Globe, Cpu } from "lucide-react";

// Importing images
import RadisonImg from '../assets/Radison.png';
import CeylonPlanetImg from '../assets/Ceylon Planet.png';
import OnyxModeImg from '../assets/Onyx Mode.png';

const projects = [
    {
        category: "AI Architecture",
        title: "Radison AI Concierge",
        image: RadisonImg,
        desc: "A fully autonomous concierge interface merging high-end hospitality with predictive AI models. Handles real-time guest requests.",
        link: "#",
        tech: ["OpenAI", "React", "Node"]
    },
    {
        category: "FinTech Dashboard",
        title: "Synapse Financial",
        image: CeylonPlanetImg,
        desc: "Real-time data visualization platform for institutional traders. Processes 50k+ data points per second with D3.js.",
        link: "#",
        tech: ["Next.js", "D3.js", "AWS"]
    },
    {
        category: "E-Commerce",
        title: "Neo-Brutalist Shop",
        image: OnyxModeImg,
        desc: "A comprehensive UI kit and headless commerce platform for high-conversion fashion brands, focusing on bold typography.",
        link: "#",
        tech: ["Shopify", "Framer", "GSAP"]
    },
    {
        category: "EdTech Platform",
        title: "EduFlow Learning",
        image: RadisonImg, // Reusing image for demo
        desc: "Scalable microservices architecture for a regional education platform, featuring AI-driven personalized learning paths.",
        link: "#",
        tech: ["Docker", "Python", "Redis"]
    },
    {
        category: "HealthTech",
        title: "VitaSync Monitor",
        image: CeylonPlanetImg, // Reusing image for demo
        desc: "IoT-connected patient monitoring dashboard with anomaly detection. Bridges wearable hardware with cloud analytics.",
        link: "#",
        tech: ["Flutter", "Firebase", "TensorFlow"]
    }
];

const ProjectCard = ({ project }) => (
    <div className="min-w-[320px] md:min-w-[380px] group bg-[#0A0A0A] border border-[#222] flex flex-col h-full snap-start relative hover:border-skillvant-purple/30 transition-colors duration-300 overflow-hidden">

        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-skillvant-purple group-hover:shadow-[0_0_15px_#8B5CF6] transition-shadow duration-300 z-20" />

        {/* Cover Image */}
        <div className="h-48 overflow-hidden relative border-b border-[#222]">
            <div className="absolute inset-0 bg-skillvant-purple/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
        </div>

        <div className="p-8 flex flex-col h-full">
            {/* Header */}
            <h4 className="text-skillvant-purple font-mono text-xs font-bold uppercase tracking-widest mb-4">
                {project.category}
            </h4>

            <h3 className="text-3xl font-space-grotesk font-bold text-white mb-4 leading-tight">
                {project.title}
            </h3>

            <p className="text-gray-400 font-inter text-sm leading-relaxed mb-8 flex-grow">
                {project.desc}
            </p>

            <a href={project.link} className="inline-flex items-center gap-2 text-skillvant-purple font-bold text-sm hover:underline underline-offset-4 mb-10">
                View Case Study <ExternalLink className="w-3 h-3" />
            </a>

            {/* Footer / Tech Stack */}
            <div className="border-t border-[#222] pt-6 flex items-center gap-6 text-gray-500">
                {project.tech.map((t, i) => (
                    <span key={i} className="font-mono text-xs font-bold uppercase tracking-wider hover:text-white transition-colors cursor-default">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

export default function PortfolioShowcase() {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-[#080808] py-24 border-b border-[#111] relative border-t border-[#222]">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Row */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-space-grotesk font-bold text-white mb-6"
                        >
                            Our Talenters <br />
                            <span className="text-gray-500">Portfolio Showcase</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 font-inter text-lg max-w-lg"
                        >
                            From global AI interfaces to category-defining marketplaces, successful businesses across industries grow and scale with Skillvant talent.
                        </motion.p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={scrollLeft}
                            className="w-12 h-12 rounded-full bg-[#111] border border-[#333] flex items-center justify-center text-white hover:bg-skillvant-purple hover:text-black hover:border-skillvant-purple transition-all active:scale-95"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={scrollRight}
                            className="w-12 h-12 rounded-full bg-[#111] border border-[#333] flex items-center justify-center text-white hover:bg-skillvant-purple hover:text-black hover:border-skillvant-purple transition-all active:scale-95"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Horizontal Scroll Carousel */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {projects.map((proj, idx) => (
                        <ProjectCard key={idx} project={proj} />
                    ))}
                </div>

            </div>
        </section>
    );
}
