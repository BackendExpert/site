import React from "react";
import { Database, Globe, Zap, Package } from "lucide-react";

const AboutAPI = () => {
    return (
        <section className="relative bg-[#0b0b0e] text-white overflow-hidden py-24 px-6 lg:px-12">

            {/* Accent Glow */}
            <div className="absolute -top-40 right-0 w-[400px] h-[400px] bg-orange-600/10 blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-[200px]" />

            {/* Header */}
            <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
                <p className="text-xs sm:text-sm tracking-[0.3em] text-orange-300 font-semibold uppercase mb-4">
                    About JKRecipeAPI
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                    
                    <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                        Public Food Recipe API
                    </span>
                </h2>
                <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                    JKRecipeAPI is a free-to-use REST API developed by BlackAlphaLabs
                    for fetching structured food recipes, including ingredients,
                    instructions, preparation time, and nutritional info.
                </p>
            </div>

            {/* Content Grid */}
            <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">

                {/* Left: Info & Features */}
                <div className="space-y-8">
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold text-orange-400 mb-4">API Base URL</h3>
                        <p className="text-gray-300 font-mono text-sm break-all">
                            https://jkrecipeapi.vercel.app/api/
                        </p>
                    </div>

                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold text-orange-400 mb-4">Endpoints</h3>
                        <ul className="text-gray-300 space-y-2 font-mono text-sm">
                            <li>GET /api/alldata → Fetch all recipes</li>
                            <li>GET /api/onerecipe/:id → Fetch recipe by ID (1-19)</li>
                        </ul>
                    </div>

                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold text-orange-400 mb-4">Usage</h3>
                        <p className="text-gray-300 text-sm">
                            Simply visit the endpoint in your browser, or use Postman / CURL.
                        </p>
                        <p className="text-gray-300 font-mono mt-2 text-sm">
                            Example: <br />
                            curl -X GET "https://jkrecipeapi.vercel.app/api/alldata"
                        </p>
                    </div>
                </div>

                {/* Right: Highlights & Future Plans */}
                <div className="space-y-8">

                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold text-orange-400 mb-4">Highlights</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <Database className="text-orange-400" />
                                <span>No authentication required (free plan)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Zap className="text-orange-400" />
                                <span>Fast & lightweight, hosted on Vercel</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Globe className="text-orange-400" />
                                <span>Structured recipe data (ingredients, instructions, nutrition)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Package className="text-orange-400" />
                                <span>Supports up to 19 recipes in v1 beta</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold text-orange-400 mb-4">Future Updates</h3>
                        <ul className="space-y-2 text-gray-300 font-sm list-disc list-inside">
                            <li>More recipes and categories</li>
                            <li>Authentication & API key support</li>
                            <li>Advanced search & filtering</li>
                            <li>Paid plans with premium features</li>
                        </ul>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default AboutAPI;
