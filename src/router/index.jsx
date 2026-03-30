import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Website from '../layout/Website'
import ErrorPage from '../component/ErrorPage/ErrorPage'
import HomePage from '../pages/home/HomePage'
import About from '../pages/about/About'
import EcoSystem from '../pages/echoSystem/EcoSystem'
import DevTools from '../pages/devTools/DevTools'



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Website />}>
                    <Route path='*' element={<ErrorPage />} />
                    <Route index element={<HomePage />} />
                    <Route path='about' element={<About /> } />
                    <Route path='eco-system' element={<EcoSystem />} />
                    <Route path='devtools' element={<DevTools />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
