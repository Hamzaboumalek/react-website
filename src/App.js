import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import './styles.scss';
import 'bootstrap/scss/bootstrap.scss';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )
}

export default App