import { useEffect, useRef, useState } from 'react'
import App from '../../App'
import './Demo.css'

function Demo() {

    const fisrtRenderTime = useRef<string>((new Date()).toLocaleTimeString())
    
    const [ now, setNow ] = useState<string>((new Date()).toLocaleTimeString())

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('updating now...')
            setNow((new Date()).toLocaleTimeString())
        }, 1000)

        // the callback that i return from useEffect
        // is used as the effect destructor
        // my job in this callback is to clean up
        // all the mess i constrcuted in the effect
        return () => {
            clearInterval(intervalId)
        }
    }, [])
    // no 2nd param - run the effect on every re-render
    // empty array - run the effect only on first render
    // non-empty array - run the effect every time one of the variables change
    

    return (
        <div className='Demo'>
            first render:
            <br/>
            {fisrtRenderTime.current}

            <br/>
            <br/>
            
            now:
            <br/>
            {now}

        </div>
    )
}

export default Demo