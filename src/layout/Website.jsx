import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../component/Nav/Nav'
import Footer from '../component/Footer/Footer'

const Website = () => {
    return (
        <div>
            <div className="">
                <Nav />
            </div>
            <div className="">
                <Outlet />
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    )
}

export default Website