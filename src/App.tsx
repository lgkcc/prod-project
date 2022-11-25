import React, {Suspense} from 'react';
import {Counter} from "./components/Counter";
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {useTheme} from "./theme/useTheme";
import cn from "./helpers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={cn('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Counter/>
            <Link to='/'>MainPageLink</Link>
            <Link to='/about'>AboutPageLink</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageLazy/>}/>
                    <Route path='/about' element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
