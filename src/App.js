import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import rp from "request-promise";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Keepers from './pages/keepers';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';

function App() {

   return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/home' exact element={<Home />} />
        <Route path='/keepers' element={<Keepers/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp/>} />
    </Routes>
    </Router>
  );

}

export default App;
