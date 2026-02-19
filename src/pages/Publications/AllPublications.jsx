import React from "react";
import { motion } from "framer-motion";
import {
    FileText,
    ShieldCheck,
    Globe,
    GraduationCap,
    Database,
} from "lucide-react";
import SNGAPI from '../../assets/pdfs/Designing_Secure_National_Government_API_Infrastructure_SNGAPI_Jehan_Weerasuriya_2026.pdf'
import SkillMissMatch from '../../assets/pdfs/Exam_Oriented_Education_and_Graduate_Skill_Mismatch_in_Sri_Lanka.pdf'
import SNGAPIPPresntation from '../../assets/pdfs/SNGAPI_support_presentation.pdf'

const publications = [
    {
        title:
            "Designing a Secure National Government API Infrastructure (SNGAPI) for Digital Public Services in Sri Lanka",
        type: "Research",
        icon: ShieldCheck,
        category: "Digital Public Infrastructure",
        link: '/pdfs/Designing_Secure_National_Government_API_Infrastructure_SNGAPI_Jehan_Weerasuriya_2026.pdf'
    },
    {
        title:
            "Secure National Government API Infrastructure (SNGAPI): A Governance-Driven Framework for Sri Lanka's Digital Public Infrastructure",
        type: "Presentation (Pre-Experimental)",
        icon: Globe,
        category: "Governance & Architecture",
        link: '/pdfs/SNGAPI_support_presentation.pdf'

    },
    {
        title:
            "Managing Vehicle Population Saturation Risk in Sri Lanka: Island Capacity Constraints, Fiscal Dependence, and Sustainable Policy Pathways",
        type: "Conference Paper",
        icon: FileText,
        category: "Public Policy",
        link: '/pdfs/MANAGING_VEHICLE_POPULATION_SATURATION_RISK_IN_SRI_LANKA.pdf'

    },
    {
        title: "Exam-Oriented Education and Graduate Skill Mismatch in Sri Lanka",
        type: "Research",
        icon: GraduationCap,
        category: "Education Policy",
        link: '/pdfs/Exam_Oriented_Education_and_Graduate_Skill_Mismatch_in_Sri_Lanka.pdf'
    },
    {
        title:
            "Prototype Implementation and Validation of a Hybrid Authorization Model for Mitigating Administrative Misuse Using Password-less Authentication and Fine-Grained Overrides",
        type: "Technical Report",
        icon: ShieldCheck,
        category: "Cybersecurity",
        link: '/pdfs/Prototype_Implementation_and_Validation_of_a_Hybrid_Authorization_Model_for_Mitigating_Administrative_Misuse_Using_Password.pdf'

    },
    {
        title:
            "A Hybrid Authorization Model for Mitigating Administrative Misuse Using Password-less Authentication and Fine-Grained Overrides",
        type: "Preprint",
        icon: ShieldCheck,
        category: "Cybersecurity",
        link: '/pdfs/A_Hybrid_Authorization_Model_for_Mitigating_Administrative_Misuse_Using_Password_update_RG.pdf'

    },
    {
        title:
            "A Security-First Backend Framework with Adaptive Middleware Flow and Policy-Based Access Control",
        type: "Conference Paper",
        icon: Database,
        category: "Backend Security",
        link: '/pdfs/IEEE_reseach_confrace_new.pdf'

    },
    {
        title:
            "A Security-First Backend Framework with Adaptive Middleware Flow and Policy-Based Access Control for Enterprise Applications",
        type: "Article / Preprint",
        icon: Database,
        category: "Enterprise Systems",
        link: '/pdfs/research_article_SFBF.pdf'

    },
];

const AllPublications = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white px-6 py-20">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                        Research & Publications
                    </h1>
                    <p className="mt-6 text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        A collection of research papers, technical reports, conference
                        publications, and policy proposals focused on Digital Public
                        Infrastructure, Cybersecurity, Governance, and Education Reform in Sri Lanka.
                    </p>
                </motion.div>

                {/* Publications Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {publications.map((pub, index) => {
                        const Icon = pub.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.06 }}
                                className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-6 hover:border-cyan-500/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
                            >
                                {/* Top Section */}
                                <div className="flex items-center justify-between mb-5">
                                    <div className="p-3 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition">
                                        <Icon className="w-6 h-6 text-cyan-400" />
                                    </div>

                                    <span className="text-xs px-3 py-1 rounded-full border border-slate-700 text-cyan-400 bg-slate-800/60">
                                        {pub.type}
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 className="text-lg font-semibold leading-snug mb-4 group-hover:text-cyan-400 transition">
                                    {pub.title}
                                </h2>

                                {/* Bottom Section */}
                                <div className="flex items-center justify-between mt-6">
                                    <span className="text-sm text-slate-400">
                                        {pub.category}
                                    </span>

                                    <a href={pub.link} target="_blank">
                                        <button className="text-sm px-4 py-2 rounded-lg border border-slate-700 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300">
                                            View
                                        </button>
                                    </a>
                                </div>

                                {/* Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:via-cyan-500/10 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AllPublications;
