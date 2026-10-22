import React from 'react'
import"./navbar.css"
export const Navbar = () => {
  return (
    <div>
<div className="containor">
  <div className="logo">
    <img src="./public/images/logo (1).png" alt="logo" />
  </div>
  <nav className='navbar'>
    <ul>
      <a href="home">Home</a>
      <a href="about">About</a>
      <a href="contact">Contact</a>
      
    </ul>
  </nav>
</div>
    </div>
  )
}
