import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' // react-router-dom@5.2.0

// hooks
import { useTheme } from './hooks/useTheme'
// pages
import Create from './pages/create/Create'
import Home from './pages/home/Home'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'

// components
import Navbar from './components/Navbar/Navbar'
import ThemeSelector from './components/ThemeSelector/ThemeSelector'

// styles
import './App.css'

function App() {
    const { mode } = useTheme()
    return (
        <div className={`App ${mode}`}>
            <Router>
                <Navbar />
                <ThemeSelector />
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
