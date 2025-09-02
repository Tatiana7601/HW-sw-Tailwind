import React, {createContext} from "react";

export interface Hero {
    hero:string,
    setHero: React.Dispatch<React.SetStateAction<string>>
}

export const HeroContext = createContext<Hero|null>(null);