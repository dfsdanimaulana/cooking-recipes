import { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Create.css'

export default function Create() {
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [newIngredient, setnewIngredient] = useState('')
    const [ingredients, setIngredients] = useState([])
    const ingredientInput = useRef(null)
    const history = useHistory()
    
    const { postData, data } = useFetch('http://localhost:3000/recipes','POST')

    const handleSubmit = (e) => {
        e.preventDefault()
        postData({ title, method, cookingTime: cookingTime + ' minutes', ingredients })
    }

    const handleAdd = (e) => {
        e.preventDefault()

        // remove whitespace
        const ing = newIngredient.trim()

        // prevent duplicate
        if (ing && !ingredients.includes(ing)) {
            setIngredients((prevState) => [...prevState, ing])
        }
        setnewIngredient('')
        ingredientInput.current.focus()
    }
    
    // redirect user when get data response
    useEffect(()=> {
        if(data){
            history.push('/')
        }
    },[data, history])
    
    return (
        <div className='create'>
            <h2 className='page-title'>Add New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe title :</span>
                    <input
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </label>

                <label>
                    <span>Recipe ingredients :</span>
                    <div className='ingredients'>
                        <input
                            type='text'
                            onChange={(e) => setnewIngredient(e.target.value)}
                            value={newIngredient}
                            ref={ingredientInput}
                        />
                        <button className='btn' onClick={handleAdd}>
                            add
                        </button>
                    </div>
                </label>
                <p>Curren ingredients : {ingredients.map((i)=> <em key={i}>{i}, </em> )}</p>

                <label>
                    <span>Recipe method :</span>
                    <textarea
                        onChange={(e) => setMethod(e.target.value)}
                        value={method}
                        required
                    />
                </label>
                <label>
                    <span>Cooking time (minutes) :</span>
                    <input
                        type='number'
                        onChange={(e) => setCookingTime(e.target.value)}
                        value={cookingTime}
                        required
                    />
                </label>
                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}
