const Keyboard = ({setYourElement, setShowElements}: {setYourElement: Function; setShowElements: Function;}) => {

    const handleRock = (e : React.MouseEvent<HTMLButtonElement>) => {
        setYourElement(1)
        setShowElements(true)
    }

    const handlePaper = (e : React.MouseEvent<HTMLButtonElement>) => {
        setYourElement(2)
        setShowElements(true)
    }

    const handleCisors = (e : React.MouseEvent<HTMLButtonElement>) => {
        setYourElement(3)
        setShowElements(true)
    }

    return (
        <div>
            <button onClick={handleRock}>Pierre</button>
            <br />
            <button onClick={handlePaper}>Feuille</button>
            <br />
            <button onClick={handleCisors}>Ciseaux</button>
        </div>
    )
}

export default Keyboard