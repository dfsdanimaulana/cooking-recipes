// styles
import { Link } from 'react-router-dom'
import './RecipeList.css'

export default function RecipeList({ recipes }) {
    
    if(recipes.length === 0){
        return <p className="error">Data not found...</p>
    }
    
    return (
        <div className='recipe-list'>
            {recipes.map((recipe) => (
                <div className='card' key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime}</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                </div>
            ))}
        </div>
    )
}
