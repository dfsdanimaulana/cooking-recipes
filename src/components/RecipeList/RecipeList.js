import { projectFirestore } from '../../firebase/config'
import { Link } from 'react-router-dom'

// icons
import trashcan from '../../assets/trashcan.svg'

// styles
import './RecipeList.css'

export default function RecipeList({ recipes }) {
    if (recipes.length === 0) {
        return <p className='error'>Data not found...</p>
    }

    const handleClick = (id) => {
        try {
            projectFirestore.collection('recipes').doc(id).delete()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='recipe-list'>
            {recipes.map((recipe) => (
                <div className='card' key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime}</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                    <img
                        className='delete'
                        src={trashcan}
                        alt='delete'
                        onClick={() => handleClick(recipe.id)}
                    />
                </div>
            ))}
        </div>
    )
}
