import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div>Admin Navbar</div>
    <Link to="/">Site</Link>
    <Link to="/admin">Dashboard</Link>
    <Link to="/admin/products">Products</Link>
    </>
  )
}

export default Navbar