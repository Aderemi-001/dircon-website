import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-black text-white sticky top-0 z-50 shadow-lg border-b border-gold/20">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo Area */}
                <div className="flex items-center space-x-2">
                    {/* Placeholder for Logo Image - matching the D shape description if possible, or just text for now */}
                    <div className="text-2xl font-bold tracking-tighter flex items-center">
                        <span className="text-gold text-4xl mr-1">D</span>
                        <div className="flex flex-col leading-none">
                            <span className="text-white text-xl">DIRCON</span>
                            <span className="text-gold text-xs tracking-widest">GROUP</span>
                        </div>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
                    <a href="#home" className="hover:text-gold transition-colors">HOME</a>
                    <a href="#services" className="hover:text-gold transition-colors">SERVICES</a>
                    <a href="#about" className="hover:text-gold transition-colors">ABOUT</a>
                    <a href="#contact" className="hover:text-gold transition-colors">CONTACT</a>
                    <a
                        href="tel:0710711754"
                        className="bg-gold text-black px-4 py-2 rounded-sm font-bold hover:bg-gold-light transition-colors"
                    >
                        GET IN TOUCH
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gold"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 md:hidden">
                    <button
                        className="absolute top-6 right-4 text-gold"
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={32} />
                    </button>
                    <nav className="flex flex-col items-center space-y-6 text-xl font-medium tracking-widest">
                        <a href="#home" className="hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>HOME</a>
                        <a href="#services" className="hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>SERVICES</a>
                        <a href="#about" className="hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>ABOUT</a>
                        <a href="#contact" className="hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>CONTACT</a>
                        <a
                            href="tel:0710711754"
                            className="bg-gold text-black px-8 py-3 rounded-full font-bold hover:bg-gold-light transition-colors mt-4"
                            onClick={() => setIsOpen(false)}
                        >
                            GET IN TOUCH
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
