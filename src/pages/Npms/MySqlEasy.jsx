import React from 'react'
import { Database, Zap, Terminal } from "lucide-react";
import { Package, Code, Wrench } from "lucide-react";

import About from '../../component/Npms/About';
import Hero from '../../component/Npms/Hero';

const MySqlEasy = () => {
    return (
        <div>
            {/* Hero Section */}
            <div>
                <Hero
                    npmname="JKMySQL Easy"
                    title1="MySQL"
                    title2="Made Easy"
                    subtitle="A Node.js backend support package that removes the need to write SQL queries."
                    shortdesc="JKMySQL Easy is a lightweight Node.js npm package that simplifies MySQL database operations using simple JavaScript functions."
                    version="v1.0.0"
                    npmlink="#"
                    getstarted="#install"
                    mainfeuters={[
                        { icon: <Database />, text: "No SQL Queries Needed" },
                        { icon: <Zap />, text: "Simple Function-Based API" },
                        { icon: <Terminal />, text: "Node.js Ready" },
                    ]}
                    coremodules={[
                        "database connection",
                        "select / insert / update",
                        "search & count",
                        "email utilities",
                    ]}
                />
            </div>

            {/* About Section */}
            <div>
                <About
                    label="About JKMySQL Easy"
                    title1="Backend Made Simple."
                    title2="Powered by Node.js."
                    description="JKMySQL Easy is a backend support npm package for Node.js that allows developers to work with MySQL without writing raw SQL queries."
                    paragraphs={[
                        "The package provides simple JavaScript functions to connect, read, insert, update, and search data in MySQL databases.",
                        "It is ideal for beginners, rapid backend development, and small to medium-scale Node.js applications.",
                        "Additional utilities like email configuration and sending are included for common backend needs."
                    ]}
                    highlights={[
                        {
                            icon: <Code />,
                            title: "Function-Based API",
                            desc: "Perform MySQL operations using simple JavaScript functions.",
                        },
                        {
                            icon: <Wrench />,
                            title: "Beginner Friendly",
                            desc: "No need to write complex SQL queries manually.",
                        },
                        {
                            icon: <Package />,
                            title: "Backend Utilities",
                            desc: "Includes database and email helper functions.",
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default MySqlEasy;
