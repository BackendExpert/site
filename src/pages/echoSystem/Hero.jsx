

const Hero = () => {
    return (
        <div
            className='
                xl:py-48 md:pt-40 py-24 
                xl:min-h-[90vh] min-h-screen 
                text-white px-4 xl:px-40 
                bg-cover bg-center

                bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url("/src/assets/EcoSystem.jpg")]

                flex items-center justify-center text-center
            '
        >
            <div>
                <div className="px-4 py-2 rounded-full bg-[#313030] inline-block">
                    <div className="mt-2 md:mt-0 flex items-center justify-center md:justify-end gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#00F2FF] animate-pulse"></span>
                        <h1 className="">
                            v4.0.0 Stable Deployment
                        </h1>
                    </div>
                </div>
                <h1 className="xl:text-8xl text-4xl mt-4">
                    <span>The </span>
                    <span className="text-[#00F2FF]">BlackAlphaLabs </span>
                    <span>Ecosystem</span>
                </h1>

                <p className="mt-8">
                    A unified suite of high-performance tools engineered for the next <br /> generation of decentralized and real-time computing.
                </p>
            </div>
        </div>
    )
}

export default Hero