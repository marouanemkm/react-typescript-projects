import { useState } from 'react'

export const Input = ({play}: {play: Function;}) => {

    const [inputValue, setInputValue] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        play(Number(inputValue))
        setInputValue('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
                <button type='submit'>Jouer</button>
            </form>
        </div>
    )
}