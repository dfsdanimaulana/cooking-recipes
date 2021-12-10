import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import { useFetch } from '../../hooks/useFetch'

// styles
import './Recipe.css'
import { projectFirestore } from '../../firebase/config'

export default function Recipe() {
    const { id } = useParams()

    const [recipe, setRecipe] = useState(null)
    // const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    // const url = 'http://localhost:3000/recipes/' + id

    // const { data: recipe, isPending, error } = useFetch(url)

    useEffect(() => {
        setIsPending(true)
        const unsub = projectFirestore
            .collection('recipes')
            .doc(id)
            .onSnapshot(
                (doc) => {
                    if (doc.exists) {
                        setIsPending(false)
                        setRecipe(doc.data())
                    } else {
                        setIsPending(false)
                        setError('data not found')
                    }
                },
                (error) => {
                    setIsPending(false)
                    setError('data not found')
                },
            )

        return () => unsub()
    }, [id])

    const handleUpdate = () => {
        projectFirestore.collection('recipes').doc(id).update({
            title: 'Updated title',
        })
    }
    return (
        <div className='recipe'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading</p>}
            {recipe && (
                <>
                    <h2 className='page-title'>{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime}</p>
                    <ul>
                        {recipe.ingredients.map((ing) => (
                            <li key={ing}>{ing}</li>
                        ))}
                    </ul>
                    <p className='method'>{recipe.method}</p>
                    <button onClick={handleUpdate}>Update</button>
                </>
            )}
        </div>
    )
}
