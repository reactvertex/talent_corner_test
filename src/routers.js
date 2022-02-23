import React from 'react';
import Login from './Pages/login';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Routers () {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    )
}
export default Routers