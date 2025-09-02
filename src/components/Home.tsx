import {useContext, useEffect} from 'react';
import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import FarGalaxy from "./FarGalaxy.tsx";
import {useNavigate, useParams} from "react-router";
import {HeroContext} from "../utils/useContext.ts";
import {characters} from "../utils/characters.ts";
import {defaultHero, navItems} from "../utils/constants.ts";

const Home = () => {
    const {setHero}=useContext(HeroContext)!;
    const {heroId} = useParams();
    const navigate=useNavigate();


    useEffect(() => {
        if (Object.keys(characters).includes(heroId!)) {
            setHero(heroId!);
        } else {
            navigate(`/${navItems[0].route}/${defaultHero}`);
        }
    }, [heroId]);


    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    );
};

export default Home;
