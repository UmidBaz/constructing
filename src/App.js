import React from 'react';
import { Navbar } from './components';
import { Header } from './container';
import './app.css';

const App = () => {
  return (
    <div className='App'> 
      <Navbar/>
      <Header/>
    </div>
  )
}

export default App