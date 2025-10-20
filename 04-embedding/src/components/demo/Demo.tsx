import './Demo.css'

function Demo() {

    const name = 'Shahar'
    const isMale = true
    const age = 22

    const grades = [90, 70, 80]

    function sayHi() {
        alert(`hi ${name}`)
    }

    return (
        <div className='Demo'>
            <p>hello from Demo</p>
            <p>hello {name}</p>
            <p>you are {isMale ? 'male' : 'female'} {isMale ? 'true' : 'falase'}</p>
            <p>you are {age} years old</p>
            
            <div>your grades are <ul>
                {grades.map((grade, idx) => <li key={idx}>{grade}</li>)}
            </ul></div>

            <button onClick={sayHi}>click me</button>
        </div>
    )
}

export default Demo