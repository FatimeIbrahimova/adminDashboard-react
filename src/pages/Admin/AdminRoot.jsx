import React, { useState } from 'react'
import Navbar from '../../components/Admin/Navbar';
import { Outlet } from "react-router-dom";

const AdminRoot = () => {
    const [box,setBox]=useState([])
    return (
        <>
            <Navbar />
            <Outlet box={box} setBox={setBox}/>
        </>
    )
}

export default AdminRoot