import React from 'react'
import Hero from './Hero'
import Npm from './Npm'
import VsCode from './VsCode'

const DevTools = () => {
    return (
        <div>
            <div className="">
                <Hero />
            </div>
            <div className="">
                <Npm />
            </div>
            <div className="">
                <VsCode />
            </div>
        </div>
    )
}

export default DevTools