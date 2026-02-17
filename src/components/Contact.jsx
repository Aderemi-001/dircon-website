import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">Get In Touch</h2>
                    <h3 className="text-4xl font-bold text-black mb-6">Ready to Transform Your Business?</h3>
                    <p className="max-w-2xl mx-auto text-gray-500">
                        Reach out to us today to schedule a consultation. Our team is ready to assist you with tailored solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info Cards */}
                    <div className="space-y-6">
                        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 flex items-start">
                            <div className="bg-black text-gold p-3 rounded-md mr-4">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-black mb-2">Visit Us</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Office 303, Hatfield Plaza<br />
                                    1122 Burbette Street<br />
                                    Hatfield, Pretoria<br />
                                    South Africa
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 flex items-start">
                            <div className="bg-black text-gold p-3 rounded-md mr-4">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-black mb-2">Call Us</h4>
                                <p className="text-gray-600 text-sm mb-1">
                                    <a href="tel:0710711754" className="hover:text-gold transition-colors">071 071 1754</a>
                                </p>
                                <p className="text-gray-500 text-xs">Mon - Fri: 8:00 AM - 5:00 PM</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 flex items-start">
                            <div className="bg-black text-gold p-3 rounded-md mr-4">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-black mb-2">Email Us</h4>
                                <p className="text-gray-600 text-sm mb-1">
                                    <a href="mailto:dircon.consult@gmail.com" className="hover:text-gold transition-colors block">dircon.consult@gmail.com</a>
                                </p>
                                <p className="text-gray-600 text-sm">
                                    <a href="mailto:dircon09@yahoo.com" className="hover:text-gold transition-colors block">dircon09@yahoo.com</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-white rounded-lg shadow-xl border border-gold/10 p-8 md:p-10">
                        <form
                            action="https://formspree.io/f/xeelkvyn"
                            method="POST"
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-gray-600"
                                >
                                    <option>General Inquiry</option>
                                    <option>Accounting & Audit</option>
                                    <option>Business Advisory</option>
                                    <option>Specialized Services (NIN/Visa)</option>
                                    <option>Real Estate</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                                    placeholder="How can we help your business?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-black text-gold font-bold py-4 rounded-sm hover:bg-gray-900 transition-colors flex items-center justify-center"
                            >
                                Send Message
                                <Send size={18} className="ml-2" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
