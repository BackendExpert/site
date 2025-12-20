import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import Website from '../layout/Website'
import ErrorPage from '../component/ErrorPage/ErrorPage'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Projects from '../pages/Projects/Projects'
import JKCSS from '../pages/Products/JKCSS/JKCSS'
import Coconutdb from '../pages/Products/CoconutDB/Coconutdb'


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
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
