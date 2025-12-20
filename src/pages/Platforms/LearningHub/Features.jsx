import React from "react";
import {
    Zap,
    Code,
    Globe,
    Activity,
    Shield,
    Users,
    RefreshCw,
    FastForward,
} from "lucide-react";

const featuresData = [
    {
        title: "Quick Tech Knowledge",
        desc: "Instantly access tutorials, coding tips, frameworks, and database guides, all designed to save you time.",
        icon: <Zap size={28} className="text-indigo-500" />,
        gradient: "bg-gradient-to-br from-indigo-100 to-indigo-200",
    },
    {
        title: "Developer-Friendly Tools",
        desc: "Curated resources made by developers for developers — no ads, no distractions, just value.",
        icon: <Code size={28} className="text-green-500" />,
        gradient: "bg-gradient-to-br from-green-100 to-green-200",
    },
    {
        title: "South Asian Tech Focus",
        desc: "The only hub dedicated to empowering developers across South Asia with regional tools and insights.",
        icon: <Globe size={28} className="text-orange-500" />,
        gradient: "bg-gradient-to-br from-orange-100 to-orange-200",
    },
    {
        title: "Built with Performance",
        desc: "Optimized for speed, reliability, and scalability — built using modern MERN and MVC architecture.",
        icon: <Activity size={28} className="text-pink-500" />,
        gradient: "bg-gradient-to-br from-pink-100 to-pink-200",
    },
    {
        title: "Secure & Private",
        desc: "No data selling or invasive tracking. Learning Hub prioritizes your privacy and security.",
        icon: <Shield size={28} className="text-red-500" />,
        gradient: "bg-gradient-to-br from-red-100 to-red-200",
    },
    {
        title: "Community Collaboration",
        desc: "Built with feedback from students, freelancers, and enterprise developers to match real-world needs.",
        icon: <Users size={28} className="text-teal-500" />,
        gradient: "bg-gradient-to-br from-teal-100 to-teal-200",
    },
    {
        title: "Continuous Updates",
        desc: "Constantly evolving with new resources, frameworks, and tools added every month.",
        icon: <RefreshCw size={28} className="text-blue-500" />,
        gradient: "bg-gradient-to-br from-blue-100 to-blue-200",
    },
    {
        title: "Built for Speed",
        desc: "Lightweight, minimal, and modern — get what you need faster without waiting.",
        icon: <FastForward size={28} className="text-purple-500" />,
        gradient: "bg-gradient-to-br from-purple-100 to-purple-200",
    },
];

const Features = () => {
    return (
        <section className="bg-slate-50 py-24">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
                    Key Features of Learning Hub
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuresData.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition relative overflow-hidden`}
                        >
                            {/* Icon with gradient circle */}
                            <div
                                className={`w-14 h-14 flex items-center justify-center rounded-full mb-6 ${feature.gradient} group-hover:scale-110 transition-transform`}
                            >
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>

                            {/* Subtle hover accent */}
                            <div className="absolute top-0 left-0 w-0 h-0 bg-indigo-100 rounded-full opacity-30 blur-2xl group-hover:w-40 group-hover:h-40 transition-all duration-700 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
