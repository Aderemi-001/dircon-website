import React from 'react';
import { Mail, Phone, MapPin, Briefcase } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white border-t border-gold/20 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <div className="text-2xl font-bold tracking-tighter flex items-center mb-6">
                            <span className="text-gold text-4xl mr-1">D</span>
                            <div className="flex flex-col leading-none">
                                <span className="text-white text-xl">DIRCON</span>
                                <span className="text-gold text-xs tracking-widest">GROUP</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Professional accounting, auditing, and business consulting services.
                            Helping you navigate the financial landscape with confidence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gold font-bold uppercase tracking-widest mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-gold font-bold uppercase tracking-widest mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                                <span>
                                    Office 303, Hatfield Plaza,<br />
                                    1122 Burbette Street,<br />
                                    Hatfield, Pretoria,<br />
                                    South Africa
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                                <a href="tel:0710711754" className="hover:text-white">071 071 1754</a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                                <a href="mailto:dircon.consult@gmail.com" className="hover:text-white">dircon.consult@gmail.com</a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 text-gold mr-3 flex-shrink-0 text-opacity-50" />
                                <a href="mailto:dircon09@yahoo.com" className="hover:text-white">dircon09@yahoo.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Banking / Business Info */}
                    <div>
                        <h3 className="text-gold font-bold uppercase tracking-widest mb-6">Business Details</h3>
                        <div className="text-gray-400 text-sm space-y-4">
                            <p>
                                <strong className="text-white block mb-1">Bank Details:</strong>
                                FNB<br />
                                Account: 63100069459<br />
                                Name: Dircon Consulting
                            </p>
                            <div className="flex items-center space-x-4 mt-6">
                                {/* Social placeholders or certifications could go here */}
                                <div className="h-10 w-10 bg-gold/10 flex items-center justify-center rounded-full text-gold">
                                    <Briefcase size={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} Dircon Consulting (Pty) Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
