import React from 'react';
import CEO from '../../assets/CEO.jpg';

const FounderLeadership = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <div className="max-w-3xl mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Founder-Led Engineering
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                        BlackAlphaLabs is independently founded and led, with every core
                        product architected and built under a single, long-term vision.
                        This ensures deep technical ownership, consistency, and
                        uncompromised engineering quality.
                    </p>
                </div>

                <div className="md:flex items-center gap-6 p-6 rounded-xl border border-gray-200 bg-[#f8fafc]">
                    <div className="flex-shrink-0">
                        <img
                            src={CEO}
                            alt="Founder"
                            className="md:w-16 md:h-16 w-32 h-32 rounded-full object-contain"
                        />
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                            Jehan Weerasuriya
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                            Founder & CEO · Product Architect · Lead Software Engineer
                        </p>
                        <p className="text-sm text-gray-500 mt-2 max-w-xl">
                            Architect of JKCSS, CoconutDB, and the BlackAlphaLabs ecosystem,
                            focused on building scalable developer tools with a strong
                            emphasis on performance, clarity, and long-term maintainability.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FounderLeadership;
