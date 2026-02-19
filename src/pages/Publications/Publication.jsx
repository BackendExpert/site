import React from 'react'
import Hero from './Hero'
import Description from './Description'
import AllPublications from './AllPublications'

const Publication = () => {
    return (
        <div className="">
            <div>
                <Hero />
            </div>
            <div className="">
                <Description />
            </div>
            <div className="">
                <AllPublications />
            </div>
        </div>
    )
}

export default Publication