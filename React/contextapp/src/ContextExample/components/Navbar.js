import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContextext'
import { AuthContext } from '../../contexts/AuthContextext';

export default function Navbar() {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;
    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <p onClick={toggleAuth}>{isAuthenticated ? 'Logged in' : 'Logged out'}</p>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}


