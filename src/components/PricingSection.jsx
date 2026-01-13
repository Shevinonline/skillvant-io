import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Smartphone, Layers } from "lucide-react";
import SkillvantLogo from "../assets/skillvanlogo.png";

// Bank Details Data
const bankDetails = [
    {
        bank: "People's Bank",
        name: "Shevin Nikesh Bandaranayaka",
        acc: "294-2-002-5-0019563",
        branch: "Alawathugoda"
    },
    {
        bank: "Nation Trust Bank PLC",
        name: "Shevin Nikesh Bandaranayaka",
        acc: "205003175100",
        branch: "Head Office -001"
    }
];

export default function PricingSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleWhatsApp = () => {
        const message = encodeURIComponent("Hi Shevin, I have completed the payment for Skillvant. Here is my slip.");
        window.open(`https://wa.me/94767948073?text=${message}`, "_blank");
    };

    return (
        <section className="bg-[#080808] py-24 px-6 relative overflow-hidden flex justify-center items-center min-h-screen">

            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-skillvant-purple/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Main Pricing Card Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 w-full max-w-2xl bg-[#090909] border border-[#222] rounded-3xl p-8 md:p-12 shadow-[0_0_50px_-10px_rgba(139,92,246,0.15)]"
            >
                {/* Logo Header */}
                <div className="flex justify-center mb-10">
                    <img src={SkillvantLogo} alt="Skillvant" className="h-12 object-contain" />
                </div>

                {/* Value Stack List */}
                <div className="space-y-6 mb-12">
                    {[
                        { name: "Full Course Library Access", value: "$999/Year" },
                        { name: "Weekly Live Masterclass", value: "$1,200/Year" },
                        { name: "Premium Community Access", value: "$499/Year" },
                        { name: "Verified Talenter Badge", value: "Priceless", highlight: true },
                        { name: "100% Income Guarantee", value: "Included", highlight: true },
                    ].map((item, i) => (
                        <div key={i} className="flex items-end justify-between group">
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-skillvant-purple shrink-0" />
                                <span className="text-gray-300 font-inter text-base md:text-lg">{item.name}</span>
                            </div>

                            {/* Dashed Leader */}
                            <div className="flex-grow mx-4 border-b border-dashed border-gray-800 mb-1 opacity-50 relative bottom-1" />

                            <span className={`font-mono text-sm md:text-base ${item.highlight ? 'text-white font-bold' : 'text-gray-500 line-through decoration-gray-600'}`}>
                                {item.value}
                            </span>
                        </div>
                    ))}

                    {/* Bonus Item */}
                    <div className="flex items-end justify-between group mt-2">
                        <div className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-skillvant-purple shrink-0" />
                            <span className="text-white font-bold font-inter text-base md:text-lg">Skillvant Certification</span>
                        </div>
                        <div className="flex-grow mx-4 border-b border-dashed border-gray-800 mb-1 opacity-50 relative bottom-1" />
                        <span className="font-mono text-sm md:text-base text-skillvant-purple font-bold">
                            Valuable
                        </span>
                    </div>
                </div>

                {/* Total Price Section */}
                <div className="text-center pt-8 border-t border-[#222]">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-gray-500 font-mono text-lg">Total Value:</span>
                        <span className="text-gray-400 line-through font-mono text-xl decoration-red-500/50">$2,698</span>
                    </div>

                    <motion.div
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        className="mb-8"
                    >
                        <h2 className="text-7xl md:text-8xl font-space-grotesk font-bold text-transparent bg-clip-text bg-gradient-to-br from-skillvant-purple via-violet-400 to-white tracking-tight">
                            $199
                        </h2>
                        <p className="text-gray-500 font-mono text-sm mt-2 uppercase tracking-widest">One-Time Payment • Lifetime Access</p>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsModalOpen(true)}
                        className="w-full bg-skillvant-purple text-black font-space-grotesk font-bold text-2xl py-5 rounded-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
                    >
                        GET ACCESS NOW
                    </motion.button>
                    <p className="text-xs text-gray-600 font-mono mt-4">
                        Financing available • 14-Day Money Back Guarantee
                    </p>
                </div>

            </motion.div>

            {/* Payment Modal (Preserved) */}
            <AnimatePresence>
                {isModalOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        >
                            {/* Modal Content */}
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-[#0A0A0A] border border-[#333] w-full max-w-2xl p-6 md:p-10 relative overflow-y-auto max-h-[90vh] rounded-xl"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="absolute top-4 right-4 text-gray-500 hover:text-white"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6 text-center">
                                    Complete Your Enrollment
                                </h3>

                                {/* Price Summary */}
                                <div className="bg-[#111] border border-[#222] p-4 mb-8 text-center rounded-lg">
                                    <p className="text-gray-400 font-mono text-sm mb-1">Total Amount</p>
                                    <p className="text-3xl text-white font-bold">$199.00</p>
                                    <p className="text-skillvant-purple text-sm font-bold mt-1">Approx. LKR 60,000.00</p>
                                </div>

                                {/* Bank Details Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    {bankDetails.map((bank, idx) => (
                                        <div key={idx} className="bg-[#080808] border border-[#222] p-5 hover:border-skillvant-purple/30 transition-colors rounded-lg">
                                            <p className="text-skillvant-purple font-bold text-sm uppercase mb-3">{bank.bank}</p>
                                            <div className="space-y-2 text-sm text-gray-300 font-mono">
                                                <p><span className="text-gray-500">Name:</span><br />{bank.name}</p>
                                                <p><span className="text-gray-500">Acc:</span><br /><span className="text-white text-base select-all">{bank.acc}</span></p>
                                                <p><span className="text-gray-500">Branch:</span><br />{bank.branch}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* WhatsApp Action */}
                                <div className="text-center">
                                    <p className="text-gray-500 text-sm mb-4">
                                        After transfer, please send your slip to confirm activation.
                                    </p>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleWhatsApp}
                                        className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-black font-bold py-4 rounded-lg hover:bg-[#1faa52] transition-colors"
                                    >
                                        <Smartphone className="w-5 h-5" />
                                        Send Slip Via WhatsApp
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
