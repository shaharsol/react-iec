import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header () {
    return (
        <div className='Header'>
            <div>logo</div>
            <div>
                <NavLink to="/profile">profile</NavLink> | <NavLink to="/feed">feed</NavLink> 
            </div>
            <div>welcome shahar | logout</div>
        </div>
    )
}