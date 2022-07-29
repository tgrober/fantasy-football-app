import './App.css';
import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';
import Keepers from './pages/keepers';
import Blogs from './pages/blogs';
import Rules from './pages/rules';
import Teams from './pages/teams';
import WeeklyPage from './pages/weeklypage';

function App() {

   return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/keepers' element={<Keepers/>} />
        <Route path='/weeklypage' element={<WeeklyPage/>} />
        <Route path='/teams' element={<Teams/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/rules' element={<Rules/>} />
    </Routes>
    </Router>
  );

}

export default App;
