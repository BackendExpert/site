import React from "react";
import { ArrowRight, Book } from "lucide-react";
import { SiBookstack } from "react-icons/si";

const Hero = ({
    title="Publication",
    subtitle = "Research and contributions in IT and education",
    description = "Explore my academic and professional publications, showcasing research in curriculum development, ICT education, and software engineering. This portfolio highlights work that bridges theory and practical applications in the South Asian context.",
    readLink = "https://www.researchgate.net/profile/Jehan-Weerasuriya-2",
    link = "https://scholar.google.com/citations?user=t4_aNDoAAAAJ&hl=en"
}) => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white px-6 md:px-12 py-28">


            <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-indigo-200/40 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-sky-200/40 blur-3xl" />

            <div className="relative max-w-7xl mx-auto grid gap-14 lg:grid-cols-2 items-center">


                <div className="flex flex-col space-y-6">


                    <div className="flex items-center gap-4">
                        <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 p-4 text-white shadow-lg">
                            <Book size={28} />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                            {title}
                        </h1>
                    </div>


                    <p className="text-xl md:text-2xl font-medium text-gray-700 max-w-xl">
                        {subtitle}
                    </p>


                    <p className="text-gray-600 max-w-2xl leading-relaxed">
                        {description}
                    </p>


                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href={readLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full
                bg-gray-900 text-white font-semibold
                hover:bg-gray-800 transition"
                        >
                            Read Publication <ArrowRight size={18} />
                        </a>

                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3 rounded-full
                  border border-gray-300 text-gray-700 font-semibold
                  hover:border-gray-400 hover:text-gray-900 transition"
                            >
                                Google Scholar
                            </a>
                        )}
                    </div>


                    <div className="pt-4 text-sm text-gray-500">
                        Peer-reviewed · Publicly available · Long-term relevance
                    </div>
                </div>


                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative rounded-3xl border border-gray-200 bg-white shadow-xl p-8 flex items-center justify-center">
                        <SiBookstack size={120} className="text-indigo-500" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
