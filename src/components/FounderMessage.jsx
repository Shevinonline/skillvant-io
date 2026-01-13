import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import ShevinImg from "../assets/shevin.jpg";

export default function FounderMessage() {
    return (
        <section className="bg-[#080808] py-24 px-6 relative overflow-hidden border-t border-[#111]">

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Column: Founder Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-full border border-skillvant-purple/30 translate-x-4 translate-y-4 rounded-sm" />
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-skillvant-purple/20 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative z-10 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
                        <img
                            src={ShevinImg}
                            alt="Shevin Nikesh"
                            className="w-full h-[500px] lg:h-[600px] object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-40" />
                    </div>
                </motion.div>

                {/* Right Column: The Message */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="w-8 h-[2px] bg-skillvant-purple" />
                            <span className="text-skillvant-purple font-mono text-sm uppercase tracking-widest">
                                A Message from the Founder
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-8 leading-tight">
                            Why I Built <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-skillvant-purple to-white">Skillvant.</span>
                        </h2>

                        <div className="space-y-6 text-gray-400 font-inter text-lg leading-relaxed mb-10">
                            <p>
                                <span className="text-white font-bold">I started my journey</span> in digital product design back in 2018. Like many of you, I realized that true success isn't just about mastering a tool—it's about understanding the intersection of design, technology, and business strategy.
                            </p>
                            <p>
                                I built key products for companies that scaled to millions, but I saw a gap. Traditional education wasn't keeping up with the speed of AI.
                            </p>
                            <p>
                                Skillvant is the answer to that. It's not just a course; it's the exact blueprint I used to build my career, packaged to help you bypass years of trial and error.
                            </p>
                        </div>

                        {/* Signature Block */}
                        <div className="flex flex-col gap-6">
                            <div>
                                <p className="text-3xl md:text-5xl font-signature text-white mb-2 rotate-[-2deg]">
                                    Shevin Nikesh
                                </p>
                                <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">
                                    Founder & Lead Instructor
                                </p>
                            </div>

                            {/* CTA / Socials */}
                            <div className="flex items-center gap-6 pt-6 border-t border-[#222]">
                                <a href="#" className="flex items-center gap-2 text-white hover:text-skillvant-purple transition-colors font-bold group">
                                    Connect on LinkedIn <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>

                    </motion.div>
                </div>

            </div>
        </section>
    );
}
