import  {useContext} from 'react';
import Navigation from "./Navigation.tsx";
import {characters} from "../utils/characters.ts";
import {HeroContext} from "../utils/useContext.ts";

const Header = () => {
    const {hero} = useContext(HeroContext)!

    return (
        <header>
            <Navigation/>
            <h1>{characters[hero].name}</h1>
        </header>
    );
};

export default Header;