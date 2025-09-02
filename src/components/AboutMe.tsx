import {useEffect, useState} from 'react';
import { period} from "../utils/constants.ts";
import {characters} from "../utils/characters.ts";
import {useParams} from "react-router";


interface HeroInfo{
    name:string,
    height:string,
    birth_year:string,
    gender:string,
    mass:string,
    skin_color:string,
    eye_color:string,

}


const AboutMe = () => {
    const [hero, setHero] = useState<HeroInfo>({
        name:"",
        height:"",
        birth_year:"",
        gender:"",
        mass:"",
        skin_color:"",
        eye_color:"",
    });
    const {heroId} = useParams();

    useEffect(() => {
        if (heroId != null) {
            const heroStorage = JSON.parse(localStorage.getItem(heroId)!);
            if (heroStorage && (Date.now() - heroStorage.time) < period) {
                setHero(heroStorage.payload)
            } else {
                fetch(characters[heroId].url)
                    .then(response => response.json())
                    .then(data => {
                        setHero(data);
                        const info = {
                            payload: data,
                            time: Date.now()
                        };
                        localStorage.setItem(heroId, JSON.stringify(info));
                    })
            }
        }

    }, []);

    const heroFields=[
        { label: "Name:", value: hero.name },
        { label: "Height:", value: hero.height },
        { label: "Birth Year:", value: hero.birth_year },
        { label: "Gender:", value: hero.gender },
        { label: "Mass:", value: hero.mass },
        { label: "Skin color:", value: hero.skin_color },
        { label: "Eye color:", value: hero.eye_color }
    ];

    return (
        <div className="my-8 flex justify-center">
            <div className="border-4 rounded-xl border-purple-950 hover:bg-white/25 p-6 shadow bg-white/15
                             text-center group w-full max-w-md
                             hover:shadow-[0_8px_50px_20px_#FFE818] hover:scale-102 transition-all duration-300">
                {heroFields.map((field) => (
                    <div key={field.label} className="mb-3">
                        <p className="font-semibold group-hover:text-yellow-400">{field.label}</p>
                        <p className="text-[#FFE818] group-hover:text-yellow-400">{field.value || "N/A"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

    export default AboutMe;