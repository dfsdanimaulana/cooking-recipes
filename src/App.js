import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' // react-router-dom@5.2.0

// pages
import Create from './pages/create/Create'
import Home from './pages/home/Home'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'

// components
import Navbar from './components/Navbar/Navbar'

// styles
import './App.css'

function App() {
    return (
        <div className='App'>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/create'>
                        <Create />
                    </Route>
                    <Route path='/search'>
                        <Search />
                    </Route>
                    <Route path='/recipes/:id'>
                        <Recipe />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
