import { useFetch } from '../../hooks/useFetch'

// style
import './Home.css'

// components
import RecipeList from '../../components/RecipeList/RecipeList'

export default function Home() {
    const { data, error, isPending } = useFetch('http://localhost:3000/recipes')

    return (
        <div>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}
