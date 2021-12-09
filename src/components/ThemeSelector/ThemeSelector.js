import { useTheme } from '../../hooks/useTheme'

// assets
import themeMode from '../../assets/themeMode.svg'

// style
import './ThemeSelector.css'

// color options
const themeColors = ['#73f65c','#ee3df1','#ff0080']

export default function ThemeSelector () {
    const { changeColor, changeMode, mode } = useTheme()
    
    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }
    console.log(mode)
    
    return (
        <div className="theme-selector">
            <div className="toggle-mode">
                <img
                  src={themeMode}
                  alt="mode"
                  onClick={toggleMode}
                  style={{ filter: mode === 'dark' ? 'invert(100%)':'invert(20%)'}}
                />
            </div>
            <div className="theme-buttons">
                {themeColors.map((color)=>(
                    <div 
                      key={color}
                      onClick={()=> changeColor(color)}
                      style={{background: color}}
                    />
                ))}
            </div>
        </div>
    )
}