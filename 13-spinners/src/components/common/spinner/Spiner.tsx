import './Spinner.css'
import spinner from '../../../assets/loading.gif'

export default function Spinner() {
    return (
        <div className='Spinner'>
            <img src={spinner} />
        </div>
    )
}
