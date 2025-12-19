import React from 'react'
import Hero from './Hero'
import Products from './Products'
import Platforms from './Platforms'
import Npms from './Npms'
import APIs from './APIs'
import VScodeEx from './VScodeEx'

const Projects = () => {
    return (
        <div>
            <div className="">
                <Hero />
            </div>
            <div className="">
                <Products />
            </div>
            <div className="">
                <Platforms />
            </div>
            <div className="">
                <Npms />
            </div>
            <div className="">
                <APIs />
            </div>
            <div className="">
                <VScodeEx />
            </div>
        </div>
    )
}

export default Projects