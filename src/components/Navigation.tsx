import {navItems} from "../utils/constants.ts";
import NavItem from "./NavItem.tsx";

const Navigation = () => {
    return (
        <nav className="fixed-top ms-5 mt-2">
            <ul className="nav">
                {navItems.map(item =>
                    <NavItem key={item.title} item={item}/>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;