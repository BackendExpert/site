import React from "react";
import { useNavigate } from "react-router-dom";
import HeroHome from "../../assets/HeroHome.jpg";

const ErrorPage = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    return (
        <div
            className="h-screen w-full bg-cover bg-center bg-no-repeat flex justify-center items-center relative"
            style={{ backgroundImage: `url(${HeroHome})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Glassmorphic Card */}
            <div className="relative z-10 backdrop-blur-xl bg-black/30 border border-white/10 shadow-2xl rounded-2xl px-10 py-12 max-w-md text-center">

                <h1 className="text-5xl font-bold text-white mb-4 tracking-wide">
                    404
                </h1>

                <h2 className="text-xl text-gray-200 mb-3">
                    Page Not Found
                </h2>

                <p className="text-gray-400 mb-8">
                    The page you’re trying to access doesn’t exist or has been moved.
                </p>

                <button
                    onClick={goHome}
                    className="px-8 py-3 text-white font-medium rounded-lg border border-white/20 
                    bg-white/10 hover:bg-white/20 transition-all backdrop-blur-md"
                >
                    Go Back Home
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;