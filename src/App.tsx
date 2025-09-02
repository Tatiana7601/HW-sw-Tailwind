import './App.css'
import Header from "./components/Header.tsx";
import MainBlock from "./components/MainBlock.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {HeroContext} from "./utils/useContext.ts";

function App() {
    const [hero, setHero] = useState("luke");

    return (
        <>
            <HeroContext value={
                {hero, setHero}
            }>
                <Header/>
                <MainBlock/>
            </HeroContext>
            <Footer/>
        </>
    )
}

export default App
