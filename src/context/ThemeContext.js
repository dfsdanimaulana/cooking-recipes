import { createContext } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider ({ children }) {
    
    // custom logic

    return (
        <ThemeContext.Provider value={{ color: '#f4325a'}}>
            { children }
        </ThemeContext.Provider>
    )
}