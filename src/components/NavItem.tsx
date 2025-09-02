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
              className="inline-block
              py-2 px-4
              rounded
              bg-[#DC3545] hover:bg-[#B02A37]
              text-white
              mx-1
              cursor-pointer"
              >
            {item.title}
        </Link>
    );
};

export default NavItem;