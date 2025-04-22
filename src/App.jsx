import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.module.css'
 import { Menu } from './components/Menu';



  export default function App() {

  return (
    <>
      <Menu option01='Sessão 01' option02='Sessão 02' />

      <Routes>
        <Route path='/Req' element={<Req/>}/>
      </Routes>

    </>
  )
}


