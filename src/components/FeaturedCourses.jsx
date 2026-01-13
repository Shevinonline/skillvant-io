import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, BarChart } from "lucide-react";

const courses = [
    {
        flag: "Skill Path",
        title: "AI-Integrated Web Design",
        subtitle: "Master the art of high-end aesthetics powered by Generative AI workflows.",
        meta: "All Levels | 50+ Hours"
    },
    {
        flag: "Career Path",
        title: "AI-Integrated App Development",
        subtitle: "Build scalable, intelligent applications by bridging the gap between code and AI.",
        meta: "All Levels | 96+ Hours"
    },
    {
        flag: "Skill Path",
        title: "Microsoft Excel Master Class",
        subtitle: "Data architecture and automation secrets for the modern business architect.",
        meta: "All Levels | 20+ Hours"
    }
];

const CourseCard = ({ course, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="group relative cursor-pointer"
    >
        {/* Card Container */}
        <div className="bg-[#080808] border border-[#333] p-8 h-full flex flex-col justify-between transition-all duration-300 group-hover:border-skillvant-purple group-hover:shadow-[inset_0_0_30px_rgba(224,255,0,0.05)] relative z-10">

            {/* Top Content */}
            <div className="space-y-6">
                {/* Flag */}
                <div className="inline-block bg-[#1a1a1a] text-gray-300 text-[10px] font-mono uppercase tracking-widest px-3 py-1 group-hover:bg-skillvant-purple group-hover:text-black transition-colors duration-300">
                    {course.flag}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-space-grotesk font-bold text-white group-hover:text-skillvant-purple transition-colors duration-300 leading-tight">
                    {course.title}
                </h3>

                {/* Subtitle */}
                <p className="text-gray-400 font-inter text-sm leading-relaxed">
                    {course.subtitle}
                </p>
            </div>

            {/* Bottom Meta */}
            <div className="mt-8 pt-6 border-t border-[#222] flex items-center gap-2 text-gray-500 font-mono text-xs uppercase tracking-wider group-hover:border-skillvant-purple/30 transition-colors">
                <Clock className="w-3 h-3" />
                {course.meta}
            </div>
        </div>
    </motion.div>
);

export default function FeaturedCourses() {
    return (
        <section className="bg-[#050505] py-24 relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-skillvant-purple font-mono text-sm tracking-widest block mb-4"
                    >
                        02 // KNOWLEDGE FORGE
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold font-space-grotesk text-white"
                    >
                        Featured Programs
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {courses.map((course, index) => (
                        <CourseCard key={index} course={course} index={index} />
                    ))}
                </div>

                {/* Global CTA */}
                <div className="flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-3 px-8 py-4 border border-gray-600 text-white font-space-grotesk font-bold text-lg hover:border-skillvant-purple hover:bg-skillvant-purple hover:text-black transition-all duration-300"
                    >
                        VIEW ALL COURSES
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                </div>

            </div>
        </section>
    );
}
