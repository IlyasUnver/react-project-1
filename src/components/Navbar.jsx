import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <img src="./images/newspaper.png" alt=""/>
        </div>
        <div className='navbar-menu'>
            <a href=""><li>Home</li></a>
            <a href=""><li>About</li></a>
        </div>
    </div>
  )
}

export default Navbar
