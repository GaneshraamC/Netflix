import React from 'react'
import { BrowserRouter, Switch, Route, Routes} from 'react-router-dom'
import './App.css';
import netflixshow from './pages/netflixshow';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import Row from './components/Row/Row';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    < BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' Component={netflixshow}/>
      </Routes>
      <Navbar/>
      <Banner/>
      <Row/>
      <Footer/>
    
     
      
    </div>
    </BrowserRouter>
  );
}

export default App;
