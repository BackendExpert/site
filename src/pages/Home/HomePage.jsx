import React from 'react'
import Hero from './Hero'
import Ecosystem from './Ecosystem'
import WhyBlackAlphaLabs from './WhyBlackAlphaLabs'
import EngineeringPhilosophy from './EngineeringPhilosophy'
import FounderStatement from './FounderStatement'
import FounderLeadership from './FounderLeadership'

const HomePage = () => {
    return (
        <div>
            <div className="">
                <Hero />
            </div>
            <div className="">
                <Ecosystem />
            </div>
            <div className="">
                <WhyBlackAlphaLabs />
            </div>
            <div className="">
                <EngineeringPhilosophy />
            </div>
            <div className="">
                {/* <FounderStatement /> */}
            </div>
            <div className="">
                <FounderLeadership />
            </div>
        </div>
    )
}

export default HomePage