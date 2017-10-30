import React from 'react';
import Nav from '../components/nav';
import Header from '../components/header'
import './app.scss'

const App = ({ children }) => (
  <div className="wrapper">
    <Nav></Nav>
    <main>
      <div className="header">
        <Header></Header>
      </div>
      <div className="main">
        { children }
      </div>
    </main>
  </div>
)

export default App
