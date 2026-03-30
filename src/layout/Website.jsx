import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Nav/Navbar'
import Footer from '../component/Footer/Footer'

const Website = () => {
    return (
        <div>
            <div className="">
                <Navbar />
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