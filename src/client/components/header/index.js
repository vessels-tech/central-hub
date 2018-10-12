import React from 'react'
import './header.scss'

const Header = () => (
  <header className='main-header'>
    <div className='header-cozy'>
      <div className='header-actions'>
        <p>Welcome, Jason <a href='/logout'>Logout</a></p>
      </div>
    </div>
  </header>
)

export default Header
