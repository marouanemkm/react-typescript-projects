import { Link } from 'react-router-dom'
import './Navbar.scss'

export const Navbar = ({
    navbarBackground,
    setBackgroundColor 
}: { 
    navbarBackground: string | undefined; 
    setBackgroundColor:  React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
    // pour typer les props d'un composant, ^- voici la méthode à suivre -^

    return (
        <div
            className='navbar'
            style={{backgroundColor: navbarBackground}}
            onClick={() => setBackgroundColor('brown')}
        >

            <Link to='/'>Accueil</Link>
             
        </div>
    )

}