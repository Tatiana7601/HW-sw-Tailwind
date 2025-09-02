import Home from "./Home.tsx";
import AboutMe from "./AboutMe.tsx";
import StarWars from "./StarWars.tsx";
import {Route, Routes} from "react-router";
import {navItems} from "../utils/constants.ts";
import Contact from "./Contact.tsx";



const MainBlock = () => {

    return (
        <Routes>
            {['/',`${navItems[0].route}/:heroId`,`${navItems[0].route}`].map(p =>
                    <Route key={p} path={p} element={
                        <Home/>}></Route>
                )
            }

            <Route path={`${navItems[1].route}/:heroId`} element={<AboutMe/>}></Route>
            <Route path={`${navItems[2].route}/:heroId`} element={<StarWars/>}></Route>
            <Route path={`${navItems[3].route}/:heroId`} element={<Contact/>}></Route>
            <Route path={'*'} element={<h1>ERROR!</h1>}></Route>
        </Routes>
    )

};

export default MainBlock;