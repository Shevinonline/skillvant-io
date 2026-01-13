import React from "react";
import { motion } from "framer-motion";

export default function FinalCTA() {
    return (
        <section className="py-32 bg-skillvant-black text-white text-center px-6 border-t border-white/10">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl md:text-8xl font-bold font-space-grotesk leading-tight"
                >
                    Don't Just Learn. <br />
                    <span className="text-skillvant-purple">Evolve.</span>
                </motion.h2>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black px-12 py-6 text-xl font-bold font-space-grotesk hover:bg-skillvant-purple transition-colors"
                >
                    Enroll Now
                </motion.button>
            </div>
        </section>
    );
}
