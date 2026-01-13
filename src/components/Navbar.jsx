import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';


import SkillvantLogo from "../assets/skillvanlogo.png";

const menuData = [
    {
        title: "Catalog",
        type: "mega",
        columns: [
            {
                title: "Courses",
                items: [
                    { label: "Web Design + AI", href: "#" },
                    { label: "App Development + AI", href: "#", badge: "Soon" },
                    { label: "Web Development + AI", href: "#", badge: "Soon" },
                    { label: "UI/UX Design + AI", href: "#", badge: "Soon" },
                ]
            },
            {
                title: "Live Learning",
                items: [
                    { label: "Bootcamps", href: "#" },
                    { label: "1:1 Sessions", href: "#" },
                ]
            }
        ]
    },
    {
        title: "Resources",
        type: "mega",
        columns: [
            {
                title: "Learn",
                items: [
                    { label: "Student Hosting", href: "#" },
                    { label: "Learning Tools", href: "#" },
                    { label: "Videos", href: "#" },
                    { label: "Cheatsheets", href: "#" },
                    { label: "Roadmaps", href: "#" },
                ]
            },
            {
                title: "Practice Tools",
                items: [
                    { label: "Challenges", href: "#" },
                    { label: "Quizzes", href: "#" },
                ]
            }
        ]
    },
    {
        title: "Communities",
        type: "grid",
        items: [
            { label: "Patreon Community", href: "#" },
            { label: "WhatsApp Community", href: "#" },
            { label: "Telegram Channel", href: "#" },
            { label: "Student Leaderboard", href: "#" },
            { label: "Live Events", href: "#" },
            { label: "Student Stories", href: "#" },
        ]
    },
    {
        title: "Talent Board",
        type: "link",
        href: "#"
    },
    {
        title: "Pricing",
        type: "dropdown",
        items: [
            { label: "For Students", href: "#" },
            { label: "For Business", href: "#" },
        ]
    }
];

const MenuItem = ({ item, hoveredItem, setHoveredItem, activeMobile, setActiveMobile }) => {
    const isHovered = hoveredItem === item.title;
    const isMobileActive = activeMobile === item.title;

    return (
        <>
            {/* Desktop View */}
            <div
                className="hidden lg:block relative group h-full"
                onMouseEnter={() => setHoveredItem(item.title)}
                onMouseLeave={() => setHoveredItem(null)}
            >
                <button
                    className={cn(
                        "h-full px-4 flex items-center gap-1 text-sm font-medium transition-colors hover:text-white font-space-grotesk",
                        isHovered ? "text-white" : "text-gray-400"
                    )}
                >
                    {item.title}
                    {item.type !== 'link' && (
                        <ChevronDown
                            className={cn("w-4 h-4 transition-transform duration-200", isHovered ? "rotate-180" : "")}
                        />
                    )}
                </button>

                <AnimatePresence>
                    {isHovered && item.type !== 'link' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 w-max pt-4 z-50"
                        >
                            <div className="bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl overflow-hidden min-w-[300px]">
                                {item.type === 'mega' && (
                                    <div className="flex gap-12">
                                        {item.columns.map((col, idx) => (
                                            <div key={idx} className="flex flex-col gap-4">
                                                <h4 className="text-gray-500 font-mono text-xs uppercase tracking-wider mb-2">{col.title}</h4>
                                                <ul className="space-y-3">
                                                    {col.items.map((sub, sIdx) => (
                                                        <li key={sIdx}>
                                                            <a href={sub.href} className="block group/link">
                                                                <span className="text-gray-300 group-hover/link:text-skillvant-purple transition-colors font-inter text-sm flex items-center gap-2">
                                                                    {sub.label}
                                                                    {sub.badge && (
                                                                        <span className="text-[10px] px-1.5 py-0.5 rounded border border-skillvant-purple text-skillvant-purple uppercase tracking-tighter">
                                                                            {sub.badge}
                                                                        </span>
                                                                    )}
                                                                </span>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {item.type === 'grid' && (
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-[400px]">
                                        {item.items.map((sub, sIdx) => (
                                            <a key={sIdx} href={sub.href} className="flex items-center gap-2 group/link">
                                                <div className="w-1.5 h-1.5 bg-white/20 rounded-full group-hover/link:bg-skillvant-purple transition-colors" />
                                                <span className="text-gray-300 group-hover/link:text-white transition-colors font-inter text-sm">
                                                    {sub.label}
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                )}

                                {item.type === 'dropdown' && (
                                    <ul className="space-y-3 min-w-[150px]">
                                        {item.items.map((sub, sIdx) => (
                                            <li key={sIdx}>
                                                <a href={sub.href} className="text-gray-300 hover:text-skillvant-purple transition-colors font-inter text-sm block">
                                                    {sub.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default function Navbar() {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMobile, setActiveMobile] = useState(null);

    return (
        <nav className="fixed w-full z-50 bg-[#0A0A0A] border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <div className="z-50 flex items-center">
                    <img src={SkillvantLogo} alt="Skillvant.io" className="h-10 w-auto object-contain" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex h-full items-center gap-2">
                    {menuData.map((item, idx) => (
                        <MenuItem
                            key={idx}
                            item={item}
                            hoveredItem={hoveredItem}
                            setHoveredItem={setHoveredItem}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden lg:block">
                    <button className="px-5 py-2 bg-white text-black font-bold font-space-grotesk text-sm hover:bg-skillvant-purple transition-colors">
                        Access Portal
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white z-50"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-0 bg-[#0A0A0A] z-40 pt-24 px-6 overflow-y-auto lg:hidden"
                        >
                            <div className="flex flex-col gap-6">
                                {menuData.map((item, idx) => (
                                    <div key={idx} className="border-b border-white/10 pb-4 last:border-0">
                                        <button
                                            onClick={() => setActiveMobile(activeMobile === item.title ? null : item.title)}
                                            className="flex items-center justify-between w-full text-left text-xl font-space-grotesk font-bold text-white mb-2"
                                        >
                                            {item.title}
                                            {item.type !== 'link' && (
                                                <ChevronDown className={cn("transition-transform", activeMobile === item.title ? "rotate-180" : "")} />
                                            )}
                                        </button>

                                        <AnimatePresence>
                                            {activeMobile === item.title && item.type !== 'link' && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pl-4 pt-2 flex flex-col gap-4 text-gray-400 font-inter text-sm">
                                                        {item.type === 'mega' && item.columns.map((col, cIdx) => (
                                                            <div key={cIdx} className="flex flex-col gap-2">
                                                                <div className="text-xs uppercase tracking-wider text-skillvant-purple opacity-70">{col.title}</div>
                                                                {col.items.map((sub, sIdx) => (
                                                                    <div key={sIdx} className="flex items-center gap-2">
                                                                        {sub.label}
                                                                        {sub.badge && <span className="text-[10px] border border-skillvant-purple text-skillvant-purple px-1 rounded">{sub.badge}</span>}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ))}

                                                        {item.type === 'grid' && item.items.map((sub, sIdx) => (
                                                            <div key={sIdx}>{sub.label}</div>
                                                        ))}

                                                        {item.type === 'dropdown' && item.items.map((sub, sIdx) => (
                                                            <div key={sIdx}>{sub.label}</div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}

                                <button className="w-full py-4 mt-4 bg-skillvant-purple text-black font-bold font-space-grotesk text-lg">
                                    Access Portal
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
