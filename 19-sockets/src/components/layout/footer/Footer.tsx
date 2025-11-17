import useUsername from '../../../hooks/use-username'
import './Footer.css'

export default function Footer () {

    const name = useUsername()

    return (
        <div className='Footer'>
            <div>copyrights (c) IR</div>
            <div>current user: {name}</div>
            <div>server: {import.meta.env.VITE_REST_SERVER_URL}</div>
            <div>password: {import.meta.env.VITE_MY_PASSWORD}</div>
        </div>
    )
}