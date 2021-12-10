import React from 'react'
import ReactDOM from 'react-dom'

// context
import { ThemeProvider } from './context/ThemeContext'

// styles
import './index.css'

// components
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
)
