const Hero = () => {
    return (
        <div
            className='
                xl:py-48 md:pt-40 py-24 
                xl:min-h-[90vh] min-h-screen 
                text-white px-4 xl:px-40 
                bg-cover bg-center

                bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url("/src/assets/AboutMobile.jpg")]
                md:bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url("/src/assets/AboutWeb.jpg")]

                flex items-center justify-center text-center
            '
        >
            <div>
                <h1 className="uppercase tracking-[0.5rem] text-[#00F2FF]">Engineered for performance</h1>
                <h1 className="xl:text-8xl text-4xl mt-4">
                    <span>About </span>
                    <span className="text-[#00F2FF]">BlackAlphaLabs</span>
                </h1>

                <p className="mt-8">
                    Building the structural primitives for the next generation of high- <br /> performance software engineering.
                </p>
            </div>
        </div>
    )
}

export default Hero