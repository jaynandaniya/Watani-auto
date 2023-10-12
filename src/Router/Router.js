import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginbck from '../component/header/Loginbck';
import Landingpage from '../component/carlist/Landingpage.jsx';
import NotFound from '../component/NotFound';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Loginbck />} />
                <Route path="/Landingpage/:id" exact element={<Landingpage />} />
                {/* <Route path="/Loginbck//"  element={<Loginbck />} /> */}
                <Route path="*" exact element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router