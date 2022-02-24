import React from 'react';
import './App.css';
import Footer from './Component/Footer';
import 'antd/dist/antd.css';
import { Outlet } from 'react-router-dom';

function App() {

  return(
    <div className="App">
      <Footer/>
      <Outlet/>
    </div>
    )
};

export default App;
