import React from 'react'
import { Outlet } from 'react-router-dom'
import Slidebar from '../Components/Slidebar'
import ButtonComponents from '../Components/ButtonComponents'

export default function Layouts() {
    return (
        <main>
            <Slidebar />
            <ButtonComponents />
            <Outlet />
        </main>
    )
}
