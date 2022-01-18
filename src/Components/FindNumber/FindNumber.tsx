import { useState, useEffect } from 'react'
import { Input } from './Input'

export const FindNumber = () => {

    const [randomNumber, setRandomNumber] = useState<number>(0)
    const [textHelp, setTextHelp] = useState<string>('')

    useEffect(() => {
        setRandomNumber(Math.floor(Math.random() * 100 + 1))
    }, [])

    const play = (inputValue: number) => {
        console.log(randomNumber, inputValue);

        if (inputValue < randomNumber) {
            setTextHelp('Le nombre est plus grand')
        } else if (inputValue > randomNumber) {
            setTextHelp('Le nombre est plus petit')
        } else if (inputValue === randomNumber) {
            setTextHelp('Bravo, c\'était bien le nombre ' + randomNumber)
        }
    }
    

    return (
        <div>
            <h1>Trouver le nombre</h1>
            <Input play={play} />
            {textHelp}
        </div>
    )
}