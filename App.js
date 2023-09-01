import React from 'react'
import './App.css';
import './pages/Home.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Search from './pages/Search';
import SearchPage from './pages/SearchPage';

const App = () => {
  return (

    <>
    <div className='app'>
      <Router>
            <Routes>
              <Route path='/search' Component={SearchPage}>
              </Route>
              <Route path='/' Component={Home}>
                {/* <Home/> */}
              </Route>
            </Routes>

            {/* <h1>hello world</h1> */}
            {/* home with search bar */}
            {/* search page  */}
      </Router>
    </div>
    
    </>
    
  )
}

export default App
