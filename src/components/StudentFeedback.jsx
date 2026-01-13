import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Globe, Quote, Trophy } from "lucide-react";

// Expanded Testimonials Data
const testimonials = [
    {
        name: "Isuru Jay",
        title: "Agency Founder",
        quote: "Skillvant didn't just teach me tools; it rewired how I think about design and AI. I doubled my agency revenue in 3 months.",
        achievement: "Elite Graduate",
        metric: "$10k/mo Revenue",
        initials: "IJ",
        color: "bg-indigo-900"
    },
    {
        name: "Laila Ahmed",
        title: "Online Coach",
        quote: "Before this, I was stuck doing client work to survive. Now I have a product earning in the background while I focus on what I enjoy.",
        achievement: "Course MVP",
        metric: "$2k/Week",
        initials: "LA",
        color: "bg-zinc-800"
    },
    {
        name: "Amila Perera",
        title: "AI Architect",
        quote: "The certification prep here is unlike anything else. I walked into my interview confident and landed a senior role instantly.",
        achievement: "Top 1% Architect",
        metric: "Hired at TechCorp",
        initials: "AP",
        color: "bg-purple-900"
    },
    {
        name: "Daniel Okoye",
        title: "UX Designer",
        quote: "I was overthinking every step. By week two, I had something live. People were buying it. That changed everything.",
        achievement: "Fast Launcher",
        metric: "First Sale in 14 Days",
        initials: "DO",
        color: "bg-zinc-800"
    },
    {
        name: "Sarah Jenkins",
        title: "Product Designer",
        quote: "From zero coding knowledge to building full-stack AI apps. The 'Knowledge Forge' track is the gold standard.",
        achievement: "Course MVP",
        metric: "Launched SaaS",
        initials: "SJ",
        color: "bg-violet-900"
    },
    {
        name: "Priya Desai",
        title: "Copywriter",
        quote: "I earned more than a week's salary overnight! I packaged a tiny idea I'd been sitting on for months.",
        achievement: "High Earner",
        metric: "Overnight Success",
        initials: "PD",
        color: "bg-orange-900"
    },
    {
        name: "Jacob Lee",
        title: "Web Developer",
        quote: "It turned my knowledge into real income. I always believed I had value to offer but didn't know how to sell it.",
        achievement: "Scale Master",
        metric: "Passive Income",
        initials: "JL",
        color: "bg-blue-900"
    },
    {
        name: "Elena R.",
        title: "Digital Artist",
        quote: "Visuals standard is unmatched. I learned how to monetize my art using the AI pipelines taught here.",
        achievement: "Creative Pro",
        metric: "Full-Time Freedom",
        initials: "ER",
        color: "bg-pink-900"
    }
];

const FeedbackCard = ({ data }) => (
    <div className="bg-[#0A0A0A] border border-[#222] p-8 hover:border-skillvant-purple transition-all duration-300 flex flex-col justify-between mb-6 h-auto min-h-[300px] rounded-xl relative group">

        {/* Quote Icon */}
        <Quote className="w-8 h-8 text-skillvant-purple mb-6 opacity-80" />

        {/* Quote Text */}
        <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-space-grotesk font-bold text-white leading-tight mb-4">
                "{data.quote.split('.')[0]}."
            </h3>
            <p className="text-gray-400 text-sm font-inter leading-relaxed">
                {data.quote.split('.').slice(1).join('.')}
            </p>
        </div>

        {/* Footer: Profile */}
        <div className="flex items-center gap-4 mt-auto">
            <div className={`w-12 h-12 ${data.color} rounded-full flex items-center justify-center text-white font-bold border border-white/10`}>
                {data.initials}
            </div>
            <div>
                <h4 className="text-white font-bold text-base">{data.name}</h4>
                <p className="text-gray-500 text-xs uppercase tracking-wider">{data.title}</p>
            </div>
        </div>
    </div>
);

const MarqueeColumn = ({ items, direction = "up", speed = 20 }) => {
    return (
        <div className="relative h-[800px] overflow-hidden">
            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#080808] to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#080808] to-transparent z-10 pointer-events-none" />

            <motion.div
                initial={{ y: direction === "up" ? 0 : -1000 }}
                animate={{ y: direction === "up" ? -1000 : 0 }}
                transition={{
                    repeat: Infinity,
                    duration: 40, // Slow continuous scroll
                    ease: "linear"
                }}
                className="flex flex-col"
            >
                {/* Render items multiple times for seamless loop */}
                {[...items, ...items, ...items].map((item, idx) => (
                    <FeedbackCard key={idx} data={item} />
                ))}
            </motion.div>
        </div>
    );
};

export default function StudentFeedback() {
    // Split testimonials into two columns
    const col1 = testimonials.slice(0, 4);
    const col2 = testimonials.slice(4, 8);

    return (
        <section className="bg-[#080808] py-24 px-6 border-b border-[#111] relative overflow-hidden">

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Header Content */}
                <div className="lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-skillvant-purple font-mono text-sm tracking-widest block mb-4 uppercase"
                    >
                        03 // Validated Results
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold font-space-grotesk text-white mb-8 leading-[0.9]"
                    >
                        Don’t just take <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-skillvant-purple to-white">
                            our word for it.
                        </span>
                    </motion.h2>

                    <p className="text-gray-400 text-lg max-w-md mb-12">
                        Join hundreds of elite designers, developers, and founders who have redefined their careers with Skillvant.
                    </p>

                    <div className="flex gap-8">
                        <div>
                            <h3 className="text-4xl font-bold text-white">450+</h3>
                            <p className="text-gray-500 text-sm mt-1">Hired Graduates</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-white">$2.5M+</h3>
                            <p className="text-gray-500 text-sm mt-1">Student Revenue</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Dual Marquee Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-[800px] overflow-hidden relative">
                    <MarqueeColumn items={col1} direction="up" />
                    <MarqueeColumn items={col2} direction="down" />
                </div>

            </div>
        </section>
    );
}
