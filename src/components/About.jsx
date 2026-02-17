import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-black text-white relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold rounded-full filter blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="md:w-1/2"
                >
                    <div className="relative">
                        {/* Placeholder Image */}
                        <div className="w-full h-96 bg-gray-800 rounded-lg overflow-hidden border-2 border-gold/30 relative">
                            <div className="absolute inset-0 bg-gold/5"></div>
                            {/* Ideally use a real image of office or team here */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-bold text-xl uppercase tracking-widest">
                                Dircon Headquarters
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-38 h-38 bg-gold text-black p-8 rounded-lg shadow-xl hidden md:block">
                            <span className="block text-4xl font-bold">10+</span>
                            <span className="text-sm font-medium uppercase tracking-wider">Years of Excellence</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="md:w-1/2"
                >
                    <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">About Us</h2>
                    <h3 className="text-4xl font-bold mb-6">Your Strategic Partner in Growth</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        DIRCON CONSULTING (PTY) LTD is a premier consulting firm based in Pretoria, dedicated to providing top-tier financial, analytical, and business solutions. We combine deep industry knowledge with technical expertise to help our clients navigate complex challenges.
                    </p>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        From meticulous bookkeeping to advanced data analytics and strategic planning, our team is committed to driving value and ensuring compliance. We believe in building long-term relationships based on trust, integrity, and exceptional service delivery.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="border-l-2 border-gold pl-4">
                            <h4 className="text-white font-bold text-lg">Mission</h4>
                            <p className="text-gray-400 text-sm">To empower businesses through insightful analysis and robust financial strategies.</p>
                        </div>
                        <div className="border-l-2 border-gold pl-4">
                            <h4 className="text-white font-bold text-lg">Vision</h4>
                            <p className="text-gray-400 text-sm">To be the most trusted consultancy for sustainable business growth in South Africa.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
