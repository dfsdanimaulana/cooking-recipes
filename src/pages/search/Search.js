import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Search.css'

// components
import RecipeList from '../../components/RecipeList/RecipeList'

export default function Search() {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const url = 'http://localhost:3000/recipes?q=' + query

    const { data, error, isPending } = useFetch(url)

    return (
        <div>
            <h2 className='page-title'>Search result for "{query}"</h2>
            {error && <p>{error}</p>}
            {isPending && <p>{isPending}</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}
