import React from 'react'
import Hero from './Hero'
import About from './About'
import Accessby from './Accessby'
import Versions from './Versions'

const Coconutdb = () => {
    return (
        <div>
            <div className="">
                <Hero />
            </div>
            <div className="">
                <About />
            </div>
            <div className="">
                <Accessby />
            </div>
            <div className="">
                <Versions />
            </div>
        </div>
    )
}

export default Coconutdb