import {useContext} from 'react';
import {characters} from "../utils/characters.ts";
import {useNavigate} from "react-router";
import {navItems} from "../utils/constants.ts";
import {HeroContext} from "../utils/useContext.ts";

const DreamTeam = () => {
    const {hero} = useContext(HeroContext)!
    const navigate = useNavigate();

    return (
        <section className="w-full
                     sm:w-1/2 sm:float-right
                     border p-2 border-white
                     grid grid-cols-3 gap-2">
            <h2 className="col-span-3
                    text-center text-2xl mb-2">
                Dream Team
            </h2>

            {
                Object.keys(characters).filter(f => f !== hero)
                    .map((friend, i) => (
                        <img key={i + 1} className=""
                             onClick={() => navigate(`/${navItems[0].route}/${friend}`)}
                             src={characters[friend].img} alt={`friend${i + 1}`}/>
                    ))}
        </section>
    );
};

export default DreamTeam;