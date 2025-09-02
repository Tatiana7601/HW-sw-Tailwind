import {useContext} from 'react';
import {Link} from "react-router";
import {HeroContext} from "../utils/useContext.ts";
import type {INavItem} from "../utils/constants.ts"


interface Props{
    item:INavItem
}

const NavItem = ({item}:Props) => {
    const {hero} =useContext(HeroContext)!;

    return (
        <Link to={`${item.route}/${hero}`}
              className="nav-item btn btn-danger mx-1">{item.title}</Link>
    );
};

export default NavItem;