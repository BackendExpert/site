import React from 'react'
import Hero from './Hero'
import Stats from './Stats'
import JKCSS from './JKCSS'
import CoconutDB from './CoconutDB'
import CoconutServeJS from './CoconutServeJS'
import JKCSSAI from './JKCSSAI'


const EcoSystem = () => {
    return (
        <div>
            <div className="">
                <Hero />
            </div>
            <div className="">
                <Stats />
            </div>
            <div className="">
                <JKCSS />
            </div>
            <div className="">
                <CoconutDB />
            </div>
            <div className="">
                <CoconutServeJS />
            </div>
            <div className="">
                <JKCSSAI />
            </div>
        </div>
    )
}

export default EcoSystem