import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import Website from '../layout/Website'
import ErrorPage from '../component/ErrorPage/ErrorPage'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Projects from '../pages/Projects/Projects'
import JKCSS from '../pages/Products/JKCSS/JKCSS'
import Coconutdb from '../pages/Products/CoconutDB/Coconutdb'
import ReactJKCSS from '../pages/Products/ReactJKCSS/ReactJKCSS'
import JKReactIcon from '../pages/Products/JKReactIcons/JKReactIcon'
import Learning from '../pages/Platforms/LearningHub/Learning'

import JKCss from '../pages/Npms/JKCss'
import CoconutDB from '../pages/Npms/Coconutdb'
import ReactJKCSSNPM from '../pages/Npms/ReactJKCSSNPM'
import MySqlEasy from '../pages/Npms/MySqlEasy'
import SourceMERN from '../pages/Npms/SourceMERN'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Website /> }>
                    <Route path='*' element={<ErrorPage /> } />
                    <Route index element={<HomePage /> } />
                    <Route path='/aboutus' element={<About /> } />
                    <Route path='/contactus' element={<Contact /> } />
                    <Route path='/projects' element={<Projects /> } />
                    <Route path='jkcss' element={<JKCSS /> } />
                    <Route path='coconutdb' element={<Coconutdb /> } />
                    <Route path='react-jkcss' element={<ReactJKCSS /> } />
                    <Route path='jkreact-icons' element={<JKReactIcon /> } />

                    <Route path='learning-hub' element={<Learning /> } />
                    <Route path='npms/jkcss' element={<JKCss /> } />
                    <Route path='npms/coconutdb' element={<CoconutDB /> } />
                    <Route path='npms/reactjkcss' element={<ReactJKCSSNPM /> } />
                    <Route path='npms/mysqleasy' element={<MySqlEasy /> } />
                    <Route path='npms/source-mern' element={<SourceMERN /> } />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
