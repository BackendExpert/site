import React from "react";
import { FaNpm, FaBookOpen, FaGithub } from "react-icons/fa";

const Accessby = () => {
    return (
        <div className="bg-white">

            {/* HEADER */}
            <section className="max-w-7xl mx-auto px-6">
                <h1 className="text-4xl font-extrabold text-gray-900">
                    Access CoconutDB
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl">
                    Get started with CoconutDB via NPM. Documentation and source
                    access are actively being prepared and will be released
                    soon.
                </p>
            </section>

            {/* ACCESS OPTIONS */}
            <section>
                <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-8">

                    {/* NPM */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-4 text-red-600">
                            <FaNpm size={28} />
                            <h2 className="text-xl font-semibold text-gray-900">
                                NPM Package
                            </h2>
                        </div>

                        <p className="text-gray-600 mb-6">
                            Install CoconutDB via NPM and integrate it into
                            Node.js-based applications and internal platforms.
                        </p>

                        <code className="block bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-800 mb-6">
                            npm i coconutdb
                        </code>

                        <a
                            href="https://www.npmjs.com/package/coconutdb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-600 font-semibold hover:underline"
                        >
                            View on NPM →
                        </a>
                    </div>

                    {/* DOCS – COMING SOON */}
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm opacity-60">
                        <div className="flex items-center gap-3 mb-4 text-gray-500">
                            <FaBookOpen size={24} />
                            <h2 className="text-xl font-semibold text-gray-900">
                                Documentation
                            </h2>
                        </div>

                        <p className="text-gray-600 mb-6">
                            Official CoconutDB documentation covering
                            architecture, querying, and best practices.
                        </p>

                        <span className="text-sm font-semibold text-gray-500">
                            Coming Soon
                        </span>
                    </div>

                    {/* GITHUB – COMING SOON */}
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm opacity-60">
                        <div className="flex items-center gap-3 mb-4 text-gray-500">
                            <FaGithub size={26} />
                            <h2 className="text-xl font-semibold text-gray-900">
                                Source Code
                            </h2>
                        </div>

                        <p className="text-gray-600 mb-6">
                            The CoconutDB source repository will be published
                            once the public API stabilizes.
                        </p>

                        <span className="text-sm font-semibold text-gray-500">
                            Coming Soon
                        </span>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Accessby;
