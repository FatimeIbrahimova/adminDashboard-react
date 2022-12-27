import React from 'react'
import Navbar from '../../components/Admin/Navbar';
import { Outlet } from "react-router-dom";

const AdminRoot = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default AdminRoot