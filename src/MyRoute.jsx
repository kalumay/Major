import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'


const MyRoute=() => {
    return(
        <Router>
            <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
                </Route>  
            </Routes>
        </Router>
    )
}

export default MyRoute