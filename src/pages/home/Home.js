// import { useFetch } from '../../hooks/useFetch'
import { projectFirestore } from '../../firebase/config'
import { useState, useEffect } from 'react'

// style
import './Home.css'

// components
import RecipeList from '../../components/RecipeList/RecipeList'

export default function Home() {
    // const { data, error, isPending } = useFetch('http://localhost:3000/recipes')
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(()=> {
        setIsPending(true)
        
        projectFirestore.collection('recipes').get()
            .then((snapshot)=> {
                if(snapshot.empty){
                    setError('data not found')
                    setIsPending(false)
                } else {
                    let results = []
                    snapshot.docs.forEach((doc)=>{
                        results.push({ id:doc.id, ...doc.data()})
                    })
                    setData(results)
                    setIsPending(false)
                }
            })
            .catch((err)=> {
                setError(err.message)
                setIsPending(false)
            })
    },[])
    return (
        <div>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}
