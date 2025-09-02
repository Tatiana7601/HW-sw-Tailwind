import {navItems} from "../utils/constants.ts";
import NavItem from "./NavItem.tsx";

const Navigation = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 ml-12 mt-2">
            <ul className="nav">
                {navItems.map(item =>
                    <NavItem key={item.title} item={item}/>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;