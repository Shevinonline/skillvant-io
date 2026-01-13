import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What makes Skillvant different from other platforms?",
        answer: "Skillvant is an elite forge that bridges the gap between AI, Design, and Personal Branding. We focus on high-ticket skill mastery rather than just generic education."
    },
    {
        question: "Do I need prior coding or design experience?",
        answer: "No. Our paths are designed for all levels, starting from foundational logic and moving into advanced AI-integrated architectures."
    },
    {
        question: "What is the 'Talent Board' and how does it help me?",
        answer: "The Talent Board is our exclusive showcase where top students' projects are featured and connected directly with global clients and high-paying opportunities."
    },
    {
        question: "Is there mentorship available during the courses?",
        answer: "Yes. All elite programs include access to our community and expert mentors who provide feedback on your architectural blueprints and projects."
    },
    {
        question: "How long do I have access to the course materials?",
        answer: "Once enrolled, you get lifetime access to the curriculum, including all future updates as AI and technology evolve."
    },
    {
        question: "Will I receive a certificate upon completion?",
        answer: "Absolutely. You will earn a Skillvant Verified Certification that validates your mastery in your chosen 'Skill Path' or 'Career Path'."
    },
    {
        question: "Can I pay in installments?",
        answer: "We offer flexible investment plans for our high-ticket bootcamps to ensure that top-tier talent can access elite knowledge without friction."
    }
];

const FAQItem = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-[#222]">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left group hover:bg-[#111] transition-colors duration-300 px-4 md:px-0"
            >
                <span className={`font-space-grotesk font-bold text-lg md:text-xl transition-colors duration-300 ${isOpen ? "text-skillvant-purple" : "text-white group-hover:text-skillvant-purple"}`}>
                    {item.question}
                </span>
                <span className="text-skillvant-purple ml-4">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-gray-400 font-inter leading-relaxed max-w-2xl px-4 md:px-0">
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#080808] py-24 px-6 border-t border-[#222] relative overflow-hidden">

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold text-white mb-12 text-center md:text-left">
                    Frequently Asked <span className="text-skillvant-purple">Questions.</span>
                </h2>

                <div className="border-t border-[#222]">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            item={faq}
                            isOpen={openIndex === index}
                            onClick={() => toggleFAQ(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
