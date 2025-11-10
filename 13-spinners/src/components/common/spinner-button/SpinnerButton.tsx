import './SpinnerButton.css'
import spinnerSrc from '../../../assets/loading.gif'

interface SpinnerButtonProps {
    buttonText: string
    spinnerText: string
    isSubmitting: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}
export default function SpinnerButton(props: SpinnerButtonProps) {

    const { buttonText, spinnerText, isSubmitting, onClick } = props

    return (
        <div className='SpinnerButton'>
            {isSubmitting && <span>{spinnerText}...<i><img src={spinnerSrc}/></i></span>}
            {!isSubmitting && <button onClick={onClick}>{buttonText}</button>}
        </div>
    )
}