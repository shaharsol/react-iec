import { useEffect, useRef, useState } from 'react'
import './Demo.css'

function getDogs() {
    return ['Lucky', 'Vasilly', 'Shay']
}

function getCats() {
    return ['Katya', 'Muli', 'Patrick']
}


function Demo() {

    const [ animals, setAnimals ] = useState<string[]>([])
    const [ isDogs, setIsDogs] = useState<boolean>(true)

    useEffect(() => {
        setAnimals(isDogs ? getDogs() : getCats())
    }, [ isDogs ])

    function selectChanged() {
        setIsDogs(!isDogs)
    }

    return (
        <div className='Demo'>
            <select onChange={selectChanged}>
                <option value="dogs">dogs</option>
                <option value="cats">cats</option>
            </select>

            <ul>
                {animals.map(animal => <li key={animal}>{animal}</li>)}
            </ul>
        </div>
    )
}

export default Demo