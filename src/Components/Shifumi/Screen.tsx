import { useState, useEffect } from "react"
import Score from './Score'

const Screen = ({
    yourElement, 
    ordiElement, 
    showElements, 
    setMessage, 
    yourScore, 
    setYourScore, 
    ordiScore, 
    setOrdiScore
}: {
    yourElement: number; 
    ordiElement: number; 
    showElements: boolean; 
    setMessage: Function;
    yourScore: number;
    setYourScore: Function;
    ordiScore: number;
    setOrdiScore: Function
}) => {

    useEffect(() => {
        if (showElements) {
            if (yourElement === ordiElement) {
                setMessage("Match nul, retente le coup")
            } else if ((yourElement === 1 && ordiElement === 3) || (yourElement === 2 && ordiElement === 1) || (yourElement === 3 && ordiElement === 2)) {
                setMessage("Tu as gagné, bravo !")
                setYourScore(yourScore + 1)
            } else if ((yourElement === 1 && ordiElement === 2) || (yourElement === 2 && ordiElement === 3) || (yourElement === 3 && ordiElement === 1)) {
                setMessage("l'ordi a gagné, tente ta chance")
                setOrdiScore(ordiScore + 1)
            }
        }
    }, [ordiElement])
    
    
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <h2>Ton arme : {
                    showElements && yourElement === 1 ? 'Pierre' :
                    showElements && yourElement === 2 ? 'Feuille' :
                    showElements && yourElement === 3 ? 'Ciseaux' :
                    ''
                }</h2>
                <h2>Celle de l'ordi : {
                    showElements && ordiElement === 1 ? 'Pierre' :
                    showElements && ordiElement === 2 ? 'Feuille' :
                    showElements && ordiElement === 3 ? 'Ciseaux' :
                    ''
                }</h2>
            </div>
            <br />
            <Score yourScore={yourScore} ordiScore={ordiScore} />
        </div>
    )
}

export default Screen