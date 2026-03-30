import React from 'react'
import DefultButton from '../../component/buttons/DefultButton'
import SecButton from '../../component/buttons/SecButton'

const BuildFuture = () => {
    return (
        <div className='bg-[#151a1a] py-24 xl:px-32 px-6 text-white border-t border-b border-[#002022]'>

            <div className='max-w-6xl mx-auto'>

                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-8'>

                    {/* Left Content */}
                    <div className='text-center md:text-left'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight'>
                            Ready to build the future?
                        </h1>

                        <p className='mt-4 text-gray-300 max-w-xl'>
                            Join the BlackAlphaLabs ecosystem and start building scalable, high-performance systems with developer-first tools.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className='flex flex-col sm:flex-row items-center gap-4'>
                        <a href="">
                            <DefultButton label='Explore Ecosystem' />
                        </a>

                        <a href="">
                            <SecButton label='Get Started' />
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default BuildFuture