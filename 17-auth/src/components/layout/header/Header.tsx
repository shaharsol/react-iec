import { NavLink } from 'react-router-dom'
import './Header.css'
import { useContext, useMemo } from 'react'
import { AuthContext } from '../../auth/auth/Auth'
import { jwtDecode } from 'jwt-decode'
import type User from '../../../models/User'
import useUsername from '../../../hooks/use-username'

export default function Header () {

    const name = useUsername()

    const { logout } = useContext(AuthContext)!

    return (
        <div className='Header'>
            <div>logo</div>
            <div>
                <NavLink to="/profile">profile</NavLink> | <NavLink to="/feed">feed</NavLink> 
            </div>
            <div>welcome {name} | <button onClick={logout}>logout</button></div>
        </div>
    )
}