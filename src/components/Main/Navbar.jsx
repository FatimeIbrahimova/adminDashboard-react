import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div>Main Navbar</div>
    <Link to="/admin">Admin</Link>
    <Link to="/">Home</Link>
    </>
  )
}

export default Navbar