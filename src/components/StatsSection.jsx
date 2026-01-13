import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { motion } from "framer-motion";

const stats = [
    { value: "5000+", label: "Elite Students" },
    { value: "98%", label: "Placement Success" },
    { value: "100+", label: "Hiring Partners" },
    { value: "24/7", label: "Mentor Support" },
];

export default function StatsSection() {
    const canvasRef = useRef();
    const pointerInteracting = useRef(null);
    const pointerInteractionMovement = useRef(0);

    useEffect(() => {
        let phi = 0;

        // Define base markers (Specific Path Locations)
        // Locations: Australia (Sydney), Sri Lanka (Colombo), India (Bangalore), Japan (Tokyo), China (Shanghai), USA (SF)
        const cities = [
            { location: [-33.8688, 151.2093], size: 0.05 }, // Australia (Sydney)
            { location: [6.9271, 79.8612], size: 0.05 },    // Sri Lanka (Colombo)
            { location: [12.9716, 77.5946], size: 0.05 },   // India (Bangalore)
            { location: [35.6762, 139.6503], size: 0.05 },  // Japan (Tokyo)
            { location: [31.2304, 121.4737], size: 0.05 },  // China (Shanghai)
            { location: [37.7595, -122.4367], size: 0.05 }, // USA (San Francisco)
        ];

        // Define sequential chain routes
        const routes = [
            { start: [-33.8688, 151.2093], end: [6.9271, 79.8612] },    // Australia -> Sri Lanka
            { start: [6.9271, 79.8612], end: [12.9716, 77.5946] },      // Sri Lanka -> India
            { start: [12.9716, 77.5946], end: [35.6762, 139.6503] },    // India -> Japan
            { start: [35.6762, 139.6503], end: [31.2304, 121.4737] },   // Japan -> China
            { start: [31.2304, 121.4737], end: [37.7595, -122.4367] },  // China -> USA
        ];

        // Helper: Calculate point along Great Circle path
        // t is 0 to 1
        const getGreatCirclePoint = (start, end, t) => {
            const toRad = (d) => (d * Math.PI) / 180;
            const toDeg = (r) => (r * 180) / Math.PI;

            const lat1 = toRad(start[0]);
            const lon1 = toRad(start[1]);
            const lat2 = toRad(end[0]);
            const lon2 = toRad(end[1]);

            const d = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin((lat1 - lat2) / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin((lon1 - lon2) / 2), 2)));

            const A = Math.sin((1 - t) * d) / Math.sin(d);
            const B = Math.sin(t * d) / Math.sin(d);

            const x = A * Math.cos(lat1) * Math.cos(lon1) + B * Math.cos(lat2) * Math.cos(lon2);
            const y = A * Math.cos(lat1) * Math.sin(lon1) + B * Math.cos(lat2) * Math.sin(lon2);
            const z = A * Math.sin(lat1) + B * Math.sin(lat2);

            const lat = Math.atan2(z, Math.sqrt(x * x + y * y));
            const lon = Math.atan2(y, x);

            return [toDeg(lat), toDeg(lon)];
        };


        // State for animations
        // Each route has a 'phase' (0 to 1) representing the position of the "head" of the comet
        // Stagger them slightly so they look like a continuous flow
        let phases = routes.map((_, i) => i * 0.1);

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3], // Higher visibility grey
            markerColor: [0.54, 0.36, 0.96],
            glowColor: [0.3, 0.3, 0.3], // Subtle grey glow
            opacity: 1,
            markers: [], // Set in onRender
            onRender: (state) => {
                // 1. Handle Rotation
                if (!pointerInteracting.current) {
                    phi += 0.003;
                }
                state.phi = phi + pointerInteractionMovement.current;

                // 2. Animate Arcs (Comets)
                const newMarkers = [...cities];

                routes.forEach((route, i) => {
                    // Update phase
                    phases[i] += 0.005; // Speed
                    if (phases[i] > 1) phases[i] -= 1; // Loop

                    const currentPhase = phases[i];

                    // Draw the comet trail
                    const trailLength = 0.3; // Length of the arc
                    const steps = 30; // Dots in the trail

                    for (let j = 0; j < steps; j++) {
                        const offset = (j / steps) * trailLength;
                        let t = currentPhase - offset;

                        if (t < 0) t += 1;

                        const [lat, lon] = getGreatCirclePoint(route.start, route.end, t);

                        const size = 0.04 * (j / steps);

                        if (size > 0.005) {
                            newMarkers.push({
                                location: [lat, lon],
                                size: size
                            });
                        }
                    }
                });

                state.markers = newMarkers;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <section className="bg-[#080808] py-32 px-6 relative overflow-hidden border-t border-[#222]">

            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-skillvant-purple/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-skillvant-purple font-mono text-sm tracking-widest uppercase mb-6 font-bold"
                        >
                            Global Impact
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-space-grotesk font-bold text-white mb-8 leading-[0.9] tracking-tight"
                        >
                            The backbone for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
                                elite careers.
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 font-inter text-lg leading-relaxed max-w-xl"
                        >
                            Skillvant makes mastering complex AI and Design architectures as seamless as moving data.
                            Our curriculum is trusted by architects in offices around the world, processing millions in revenue
                            for ambitious creators of all sizes.
                        </motion.p>


                        {/* Global Salary Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-10 border-t border-[#222] pt-8 max-w-sm"
                        >
                            <h4 className="text-white font-space-grotesk font-bold text-lg mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-skillvant-purple animate-pulse" />
                                Average AI Architect Salary
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between group border-b border-[#222] pb-2 last:border-0 last:pb-0">
                                    <span className="text-gray-400 font-inter text-sm flex items-center gap-2">
                                        <span className="opacity-50 text-xs">USA</span> United States
                                    </span>
                                    <span className="text-skillvant-purple font-mono font-bold text-lg">$120,000<span className="text-xs text-gray-600 font-normal">/yr</span></span>
                                </div>
                                <div className="flex items-center justify-between group border-b border-[#222] pb-2 last:border-0 last:pb-0">
                                    <span className="text-gray-400 font-inter text-sm flex items-center gap-2">
                                        <span className="opacity-50 text-xs">AUS</span> Australia
                                    </span>
                                    <span className="text-skillvant-purple font-mono font-bold text-lg">$95,000<span className="text-xs text-gray-600 font-normal">/yr</span></span>
                                </div>
                                <div className="flex items-center justify-between group border-b border-[#222] pb-2 last:border-0 last:pb-0">
                                    <span className="text-gray-400 font-inter text-sm flex items-center gap-2">
                                        <span className="opacity-50 text-xs">LKR</span> Sri Lanka
                                    </span>
                                    <span className="text-skillvant-purple font-mono font-bold text-lg">300K<span className="text-xs text-gray-600 font-normal">/mo</span></span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Graphic (Cobe Globe) */}
                    <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center overflow-hidden">

                        {/* Canvas Container with Mask to soften edges if needed */}
                        <div className="w-full h-full relative" style={{
                            maskImage: 'radial-gradient(circle, white 40%, transparent 80%)',
                            WebkitMaskImage: 'radial-gradient(circle, white 40%, transparent 80%)'
                        }}>
                            <canvas
                                ref={canvasRef}
                                onPointerDown={(e) => {
                                    pointerInteracting.current =
                                        e.clientX - pointerInteractionMovement.current;
                                    canvasRef.current.style.cursor = 'grabbing';
                                }}
                                onPointerUp={() => {
                                    pointerInteracting.current = null;
                                    canvasRef.current.style.cursor = 'grab';
                                }}
                                onPointerOut={() => {
                                    pointerInteracting.current = null;
                                    canvasRef.current.style.cursor = 'grab';
                                }}
                                onMouseMove={(e) => {
                                    if (pointerInteracting.current !== null) {
                                        const delta = e.clientX - pointerInteracting.current;
                                        pointerInteractionMovement.current = delta * 0.003;
                                    }
                                }}
                                onTouchMove={(e) => {
                                    if (pointerInteracting.current !== null && e.touches[0]) {
                                        const delta = e.touches[0].clientX - pointerInteracting.current;
                                        pointerInteractionMovement.current = delta * 0.003;
                                    }
                                }}
                                style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1, cursor: 'grab' }}
                                className="mx-auto block"
                            />
                        </div>

                    </div>
                </div>

                {/* Bottom Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-[#222] pt-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="relative pl-6"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-skillvant-purple to-transparent" />
                            <h3 className="text-3xl md:text-4xl font-space-grotesk font-bold text-white mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-gray-500 font-inter text-sm md:text-base leading-tight">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section >
    );
}
