import React from 'react'
import Hero from './Hero'
import Release from './Release'
import Features from './Features'
import GetStarted from './GetStarted'

const Learning = () => {
    return (
        <div>
            <div className="">
                <Hero />
            </div>
            <div className="">
                <Release />
            </div>
            <div className="">
                <Features />
            </div>
            <div className="">
                <GetStarted />
            </div>
        </div>
    )
}

export default Learning