import './Footer.css'

export default function Footer () {
    return (
        <div className='Footer'>
            <div>copyrights (c) IR</div>
            <div>server: {import.meta.env.VITE_REST_SERVER_URL}</div>
        </div>
    )
}