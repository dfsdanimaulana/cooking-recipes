import { Link } from 'react-router-dom'

// context
import { useTheme } from '../../hooks/useTheme'

// styles
import './Navbar.css'

// components
import Searchbar from '../Searchbar/Searchbar'

export default function Navbar() {
    
    // access global context
    const { color } = useTheme()
    
    return (
        <div className='navbar' style={{ background: color }}>
            <nav>
                <Link to='/' className='brand'>
                    <h1>Cooking Dan</h1>
                </Link>
                <Searchbar />
                <Link to='/create'>Create Recipe</Link>
            </nav>
        </div>
    )
}
