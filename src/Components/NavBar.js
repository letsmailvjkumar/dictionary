import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    

    return (
    <main>
    <div className='navbar'>
        <div className='left-context'>Dictionary App</div>
        <div className='right-context'>
          <Link to='/'>Home</Link>
          <Link to='/history'>History</Link>
        </div>
    </div>
    </main>
  )
}

export default NavBar