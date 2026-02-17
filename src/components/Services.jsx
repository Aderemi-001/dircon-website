import React from 'react';
import {
    BarChart3,
    ShieldCheck,
    PieChart,
    FileText,
    TrendingUp,
    Briefcase,
    Users,
    Globe,
    Home
} from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCategory = ({ title, icon: Icon, services, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
    >
        <div className="bg-black text-gold w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-black transition-colors">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold text-black mb-4 border-b border-gold/30 pb-2">{title}</h3>
        <ul className="space-y-2">
            {services.map((service, idx) => (
                <li key={idx} className="flex items-start text-gray-600 text-sm">
                    <span className="text-gold mr-2 mt-1">•</span>
                    {service}
                </li>
            ))}
        </ul>
    </motion.div>
);

const Services = () => {
    const categories = [
        {
            title: "Accounting & Bookkeeping",
            icon: FileText,
            services: [
                "Bookkeeping and Ledger Maintenance",
                "Accounts Payable and Receivable Management",
                "Payroll Processing",
                "Financial Statement Preparation",
                "Management Accounting"
            ]
        },
        {
            title: "Assurance & Audit",
            icon: ShieldCheck,
            services: [
                "Internal Audit",
                "Compliance Audit",
                "Financial Statement Review",
                "Special Audit Engagements",
                "Data Quality Assurance"
            ]
        },
        {
            title: "Data Analytics",
            icon: BarChart3,
            services: [
                "Descriptive Analytics",
                "Data Visualization",
                "Reporting and Dashboarding",
                "Data Mining",
                "Statistical Analysis"
            ]
        },
        {
            title: "Business Advisory",
            icon: TrendingUp,
            services: [
                "Business Planning and Strategy",
                "Financial Planning and Budgeting",
                "Cash Flow Management",
                "Risk Management",
                "Business Valuation",
                "Mergers and Acquisitions"
            ]
        },
        {
            title: "Financial Planning",
            icon: PieChart,
            services: [
                "Retirement Planning",
                "Estate Planning",
                "Investment Planning",
                "Wealth Management",
                "Succession Planning"
            ]
        },
        {
            title: "Consulting Services",
            icon: Users,
            services: [
                "Financial Management Consulting",
                "Operational Improvement",
                "Human Resource Consulting",
                "Information Technology Consulting",
                "Marketing Strategy Development"
            ]
        },
        {
            title: "Company Secretarial",
            icon: Briefcase,
            services: [
                "Company Formation and Registration",
                "Secretarial Services",
                "Business Registration and Licensing",
                "Financial Modeling",
                "Forecasting and Budgeting"
            ]
        },
        {
            title: "Training & Development",
            icon: Users, // Or graduation cap if available, reusing Users for now
            services: [
                "Financial Literacy Training",
                "Accounting Software Training",
                "Financial Planning and Budgeting Training",
                "Tax Compliance Training"
            ]
        },
        {
            title: "Specialized Services",
            icon: Globe,
            services: [
                "NIN / BVN Enrolment & Modification",
                "Nigerian Passport & Visa Assistance",
                "Authentication of Birth Certification",
                "Supply / Procurement Services"
            ]
        },
        {
            title: "Real Estate",
            icon: Home,
            services: [
                "Estate Agency / Management",
                "Buying / Selling of Property"
            ]
        }
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">Our Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">Comprehensive Business Solutions</h3>
                    <p className="max-w-2xl mx-auto text-gray-500 text-lg">
                        We provide a holistic approach to financial and business management,
                        tailored to meet the unique needs of your organization.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <ServiceCategory
                            key={index}
                            {...category}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
