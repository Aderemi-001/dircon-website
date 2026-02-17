import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative bg-black-rich text-white min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                {/* Geometric pattern overlay could go here */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 z-10 text-center md:text-left">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-gold font-bold tracking-widest text-sm md:text-base mb-4 uppercase">
                            Dircon Consulting (Pty) Ltd
                        </h2>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
                            Excellence in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dark">
                                Financial Strategy
                            </span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
                            Empowering your business with expert accounting, auditing, and strategic development.
                            Your partner in sustainable growth and financial clarity.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                            <a
                                href="#services"
                                className="group bg-gold text-black px-8 py-3 rounded-sm font-bold text-lg flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Our Services
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3 rounded-sm font-bold text-lg border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Contact Us
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
