import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import listToTreeConverter from "../../data/ListToTreeConverter";
import { sidebardata } from "../../data/sidebardata";

//converting flat json data to tree view data for sidebar view generation
const sidebarData = listToTreeConverter(sidebardata);
//console.log(sidebarData);

const Sidebar = () => {
    const [navData, setNavData] = useState([]);
    useEffect(() => {
        setNavData(sidebarData); //useEffect is used to set the the data to current ccomponent
    },
        []);

    return (
        <div class="kt-sideleft">
            <ul className="nav kt-sideleft-menu">

                {navData.map((tab) => (
                    <li className="nav-item" key={tab.id}>
                        <Link to="" className="nav-link with-sub" >
                            <i className= {tab.icon}></i>
                            {tab.name}
                        </Link>
                        {
                        <ul className="nav nav-sub-sub kt-sideleft-menu">
                            {tab.childMenus &&
                            tab.childMenus.map((child) => (
                                child.subChildMenus ?
                                <li className="nav-item" key={child.id}>
                                    <Link to={child.url} className="nav-link with-sub child-with-subchild">
                                        <i className={child.icon}></i>
                                        {child.name}
                                    </Link>
                                    <ul className="nav-sub">
                                        {child.subChildMenus &&
                                            child.subChildMenus.map((subChild) => (
                                                <li className="nav-item" key={subChild.id}>
                                                    <Link to={subChild.url} className="nav-link " >
                                                        {subChild.name}
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                </li> :
                                <li className="nav-item" key={child.id}>
                                    <Link to={child.url} className="nav-link " >
                                        {child.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;