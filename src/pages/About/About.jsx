import React from 'react'
import Hero from './Hero'
import History from './History'
import Vison from './Vison'
import Founder from './Founder'
import BuildFuture from './BuildFuture'

const About = () => {
    return (
        <div>
            <div className="">
                <Hero />
            </div>
            <div className="">
                <History />
            </div>
            <div className="">
                <Vison />
            </div>
            <div className="">
                <Founder />
            </div>
            <div className="">
                <BuildFuture />
            </div>
        </div>
    )
}

export default About