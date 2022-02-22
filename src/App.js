import React from 'react';
import { Button } from 'antd';
import './App.css';
import Header from './Component/Header';
import 'antd/dist/antd.css';

const App = () => (
  <div className="App">
    <Header/>
    <Button type="primary">Button</Button>
  </div>
);

export default App;
