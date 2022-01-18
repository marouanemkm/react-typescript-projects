import { useState, useEffect } from 'react'
import Keyboard from "./Keyboard"
import Screen from "./Screen"

const Shifumi = () => {

    const [yourElement, setYourElement] = useState<number>(0)
    const [ordiElement, setOrdiElement] = useState<number>(0)
    const [showElements, setShowElements] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [yourScore, setYourScore] = useState<number>(0)
    const [ordiScore, setOrdiScore] = useState<number>(0)

    useEffect(() => {
        setOrdiElement(Math.floor(Math.random() * 3) + 1)
    }, [yourElement])

    return (
        <div>
            <Keyboard setYourElement={setYourElement} setShowElements={setShowElements} />

            <br />
            <br />
            <br />

            <Screen 
                yourElement={yourElement} 
                ordiElement={ordiElement} 
                showElements={showElements} 
                setMessage={setMessage} 
                yourScore={yourScore} 
                setYourScore={setYourScore} 
                ordiScore={ordiScore} 
                setOrdiScore={setOrdiScore} 
            />

            <h2>{message}</h2>
        </div>
    )
}

export default Shifumi