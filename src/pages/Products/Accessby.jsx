import React from 'react'
import { FaNpm, FaBookOpen, FaGithub } from 'react-icons/fa'

const Accessby = () => {
    return (
        <div className="bg-white">

            {/* HEADER */}
            <section className="max-w-7xl mx-auto px-6 ">
                <h1 className="text-4xl font-extrabold text-gray-900">
                    Access JKCSS
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl">
                    Get started with JKCSS using NPM, explore the official
                    documentation, or access the source code. JKCSS is designed
                    to integrate seamlessly into modern workflows.
                </p>
            </section>

            {/* ACCESS OPTIONS */}
            <section className="">
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
                            Install JKCSS via NPM for use with modern build tools
                            like Vite, Webpack, and React.
                        </p>

                        <code className="block bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-800 mb-6">
                            npm i @jehankandy/jkcss
                        </code>

                        <a
                            href="https://www.npmjs.com/package/@jehankandy/jkcss"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 font-semibold hover:underline"
                        >
                            View on NPM →
                        </a>
                    </div>

                    {/* DOCS */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-4 text-indigo-600">
                            <FaBookOpen size={24} />
                            <h2 className="text-xl font-semibold text-gray-900">
                                Documentation
                            </h2>
                        </div>

                        <p className="text-gray-600 mb-6">
                            Read the official JKCSS documentation to learn about
                            utilities, layout systems, best practices, and
                            integrations.
                        </p>

                        <a
                            href="/jkcss"
                            className="inline-block text-indigo-600 font-semibold hover:underline"
                        >
                            Open Documentation →
                        </a>
                    </div>

                    {/* GITHUB */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-4 text-gray-900">
                            <FaGithub size={26} />
                            <h2 className="text-xl font-semibold text-gray-900">
                                Source Code
                            </h2>
                        </div>

                        <p className="text-gray-600 mb-6">
                            Explore the source code, report issues, or contribute
                            to the development of JKCSS on GitHub.
                        </p>

                        <a
                            href="https://github.com/JKCSS-CSS-Framework"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 font-semibold hover:underline"
                        >
                            View on GitHub →
                        </a>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Accessby
