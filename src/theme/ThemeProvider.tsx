import React, {useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Light

const ThemeProvider:React.FC = (props) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)
    const themeMemo = useMemo(() => ({
        theme,
        setTheme
    }), [theme])
    return (
        <ThemeContext.Provider value={themeMemo} >
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
