import {useContext} from 'react';
import {characters} from "../utils/characters.ts";
import {HeroContext} from "../utils/useContext.ts";

const Hero = () => {
    const{hero}=useContext(HeroContext)!;


    return (
        <section className="float-left w-1/4">
            <img className="w-full" src={characters[hero].img} alt="hero"/>
        </section>
    );
};

export default Hero;