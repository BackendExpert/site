import React from 'react'
import Hero from './Hero'
import Introduction from './Introduction'
import APIAccess from './APIAccess'
import APIAccessBase from './APIAccessBase'
import GetStarted from './GetStarted'
import RoadMap from './RoadMap'
import DevelopTeam from './DevelopTeam'

const RacdApi = () => {
    return (
        <div className="">
            <section id='hero'>
                <Hero />
            </section>
            <section id='intro'>
                <Introduction />
            </section>
            <section id='api-access'>
                <APIAccess />
            </section>
            <section id='api-access-basu-url' className='md:block hidden'>
                <APIAccessBase />
            </section>
            <section id='get-started' className='md:block hidden'>
                <GetStarted />
            </section>
            <section id='road-map' className='md:block hidden'>
                <RoadMap />
            </section>
            <section id='team'>
                <DevelopTeam />
            </section>
        </div>
    )
}

export default RacdApi