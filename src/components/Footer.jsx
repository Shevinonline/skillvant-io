import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Youtube, Linkedin, Music, ArrowUp, Zap } from "lucide-react";

// Custom TikTok Icon (using Music as placeholder fall-back if needed, but SVG is better)
const TikTok = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);


const footerLinks = {
    platform: [
        { name: "Catalog", href: "#" },
        { name: "Bootcamps", href: "#" },
        { name: "1:1 Sessions", href: "#" },
        { name: "Talent Board", href: "#" },
        { name: "Pricing", href: "#" },
    ],
    resources: [
        { name: "Student Hosting", href: "#" },
        { name: "Learning Tools", href: "#" },
        { name: "Video Vault", href: "#" },
        { name: "Cheatsheets", href: "#" },
        { name: "Roadmaps", href: "#" },
    ],
    community: [
        { name: "Student Stories", href: "#" },
        { name: "Leaderboard", href: "#" },
        { name: "Patreon", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
    ],
};

const SocialIcon = ({ Icon, href }) => (
    <a
        href={href}
        className="w-10 h-10 bg-[#111] border border-[#222] rounded-lg flex items-center justify-center text-gray-400 hover:text-skillvant-purple hover:border-skillvant-purple hover:shadow-[0_0_15px_-3px_rgba(139,92,246,0.6)] transition-all duration-300 group"
    >
        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </a>
);

export default function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#050505] border-t border-skillvant-purple relative pt-20 pb-10 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 transform -translate-y-1/2 left-1/4 w-[500px] h-[500px] bg-skillvant-purple/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Main 4-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 text-center md:text-left">

                    {/* Column 1: Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center md:items-start"
                    >
                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-6 group cursor-pointer">

                            <span className="text-2xl font-bold font-space-grotesk text-white tracking-tight group-hover:text-skillvant-purple transition-colors">
                                SKILLVANT.IO
                            </span>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs font-inter">
                            Architecting the future of digital dominance through AI and Elite Design.
                        </p>

                        <div className="flex gap-4">
                            <SocialIcon Icon={Facebook} href="#" />
                            <SocialIcon Icon={Youtube} href="#" />
                            <SocialIcon Icon={Linkedin} href="#" />
                            <SocialIcon Icon={TikTok} href="#" />
                        </div>
                    </motion.div>

                    {/* Column 2: Platform */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="text-skillvant-purple font-space-grotesk font-bold text-lg mb-6 uppercase tracking-wider">
                            Platform
                        </h4>
                        <ul className="space-y-4 font-inter text-sm">
                            {footerLinks.platform.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-500 hover:text-white transition-colors duration-300 flex items-center gap-2 justify-center md:justify-start group">
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-skillvant-purple transition-all duration-300" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 3: Resources */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="text-skillvant-purple font-space-grotesk font-bold text-lg mb-6 uppercase tracking-wider">
                            Resources
                        </h4>
                        <ul className="space-y-4 font-inter text-sm">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-500 hover:text-white transition-colors duration-300 flex items-center gap-2 justify-center md:justify-start group">
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-skillvant-purple transition-all duration-300" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 4: Community & Legal */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h4 className="text-skillvant-purple font-space-grotesk font-bold text-lg mb-6 uppercase tracking-wider">
                            Legal
                        </h4>
                        <ul className="space-y-4 font-inter text-sm">
                            {footerLinks.community.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-500 hover:text-white transition-colors duration-300 flex items-center gap-2 justify-center md:justify-start group">
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-skillvant-purple transition-all duration-300" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="border-t border-[#111] pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600 font-mono gap-4"
                >
                    <p>© 2026 Skillvant.io. All Rights Reserved.</p>
                    <div className="flex items-center gap-2">
                        <Zap className="w-3 h-3 text-skillvant-purple" />
                        <span>Designed for the Top 1%</span>
                    </div>
                </motion.div>

            </div>

            {/* Back to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 w-12 h-12 bg-skillvant-purple text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.8)] hover:scale-110 transition-all duration-300 z-50 group"
                    >
                        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                )}
            </AnimatePresence>

        </footer>
    );
}
