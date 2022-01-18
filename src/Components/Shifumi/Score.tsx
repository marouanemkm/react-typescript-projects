const Score = ({yourScore, ordiScore}: {yourScore: number; ordiScore: number;}) => {

    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <h1>Ton Score : {yourScore}</h1>
            <h1>Le score de l'ordi : {ordiScore}</h1>
        </div>
    )
}

export default Score