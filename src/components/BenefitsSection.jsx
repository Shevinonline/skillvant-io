import React from "react";
import { motion } from "framer-motion";
import { Users, Award, MessageCircle, Infinity as InfinityIcon, Network, Download } from "lucide-react";

const benefits = [
    {
        title: "Built by Professionals",
        desc: "Get the best experience knowing that our courses are built by industry veterans and elite architects.",
        icon: Users
    },
    {
        title: "Completion Certificate",
        desc: "Receive a prestigious Completion Award from our Team to validate your expertise and enhance your portfolio.",
        icon: Award
    },
    {
        title: "Instant Chat Help",
        desc: "Have questions? Reach out for a quick chat—here for you 24/7 to unblock your progress instantly.",
        icon: MessageCircle
    },
    {
        title: "Lifetime Membership",
        desc: "With just one payment, you'll get permanent access to the course, including all future updates and modules.",
        icon: InfinityIcon
    },
    {
        title: "Access to Community",
        desc: "Join our private community to connect with like-minded individuals, share wins, and grow together.",
        icon: Network
    },
    {
        title: "Download for Offline Use",
        desc: "Our resources can be downloaded, so you can watch them anytime, anywhere, even without internet.",
        icon: Download
    }
];

const BenefitCard = ({ data, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group bg-[#0A0A0A] border border-[#222] p-8 rounded-2xl hover:border-skillvant-purple/50 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.2)] transition-all duration-300 relative overflow-hidden"
    >
        {/* Hover Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-skillvant-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
            {/* Icon Container */}
            <div className="w-14 h-14 bg-[#111] border border-[#333] rounded-xl flex items-center justify-center mb-6 group-hover:bg-skillvant-purple group-hover:border-skillvant-purple transition-colors duration-300">
                <data.icon className="w-7 h-7 text-gray-400 group-hover:text-black transition-colors duration-300" />
            </div>

            <h3 className="text-xl font-space-grotesk font-bold text-white mb-3 group-hover:text-skillvant-purple transition-colors">
                {data.title}
            </h3>

            <p className="text-gray-400 font-inter text-sm leading-relaxed">
                {data.desc}
            </p>
        </div>
    </motion.div>
);

export default function BenefitsSection() {
    return (
        <section className="bg-[#080808] py-24 px-6 relative overflow-hidden border-t border-[#111]">

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-skillvant-purple/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-[#111] border border-[#333] px-4 py-1.5 rounded-full mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-skillvant-purple animate-pulse" />
                        <span className="text-xs font-mono font-bold text-gray-300 uppercase tracking-widest">
                            Benefits
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-6"
                    >
                        Key Benefits of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-skillvant-purple to-white">
                            Courses
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 font-inter text-base md:text-lg max-w-2xl mx-auto"
                    >
                        Explore the incredible advantages of enrolling in our courses and enhancing your skills for the ultimate career success.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((item, idx) => (
                        <BenefitCard key={idx} data={item} index={idx} />
                    ))}
                </div>

            </div>
        </section>
    );
}
