import React from "react";
import { Smartphone, DownloadCloud, Globe } from "lucide-react";

const actionsData = [
    {
        title: "Download Android APK",
        desc: "Get the latest APK and run Learning Hub directly on your Android device.",
        icon: <Smartphone size={28} className="text-green-500" />,
        href: "/LearningHub.apk",
        comingSoon: false,
    },
    {
        title: "Continue on Web",
        desc: "Open Learning Hub directly in your browser — no installation needed.",
        icon: <Globe size={28} className="text-indigo-500" />,
        href: "/learninghub",
        comingSoon: true,
    },
];

const GetStarted = () => {
    return (
        <section className="bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
                    Get Started with Learning Hub
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {actionsData.map((action, idx) => (
                        <div
                            key={idx}
                            className={`relative rounded-3xl p-8 shadow-lg transition-transform duration-300 overflow-hidden
                            ${action.comingSoon ? "cursor-not-allowed bg-gray-100" : "bg-white hover:shadow-2xl hover:scale-105"}`}
                        >
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 mb-6">
                                {action.icon}
                            </div>

                            <h3 className={`text-xl font-semibold mb-2 transition-colors ${action.comingSoon ? "text-gray-400" : "text-gray-900 group-hover:text-indigo-600"}`}>
                                {action.title}
                            </h3>

                            <p className={`leading-relaxed ${action.comingSoon ? "text-gray-400" : "text-gray-600"}`}>
                                {action.desc}
                            </p>

                            {action.comingSoon && (
                                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-bold uppercase bg-yellow-400 text-black rounded-full shadow-md">
                                    Coming Soon
                                </span>
                            )}

                            {!action.comingSoon && (
                                <div className="absolute top-0 left-0 w-0 h-0 bg-indigo-100 rounded-full opacity-30 blur-2xl group-hover:w-40 group-hover:h-40 transition-all duration-700 pointer-events-none" />
                            )}

                            {/* BUTTON ADDED BELOW CONTENT */}
                            {!action.comingSoon && (
                                <a
                                    href={action.href}
                                    className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                                >
                                    Get {action.title}
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center text-gray-500 text-sm">
                    No signup required. Free and open 24/7.
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
