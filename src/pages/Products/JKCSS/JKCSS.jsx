import React from 'react'
import Hero from './Hero'
import About from './About'
import Versions from './Versions'
import Accessby from './Accessby'

const JKCSS = () => {
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

export default JKCSS