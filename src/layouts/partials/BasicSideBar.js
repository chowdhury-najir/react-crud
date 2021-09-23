import React, { useEffect, useState } from 'react'
import { sidebarData } from './sidebarData';
import { Link } from "react-router-dom";

const BasicSidebar = () => {
    const [navData, setNavData] = useState([]);

    useEffect(() => {
        setNavData(sidebarData);
    }, []);

    return (
        <>
         <div class="kt-sideleft-header">
                    <div class="kt-logo"><Link to="index">React js</Link></div>
                    <div id="ktDate" class="kt-date-today"></div>
                    <div class="input-group kt-input-search">
                        <input type="text" class="form-control" placeholder="Search..." />
                        <span class="input-group-btn mg-0">
                            <button class="btn"><i class="fa fa-search"></i></button>
                        </span>
                    </div>
                </div>
        
            <div className="kt-sideleft">

                {
                    navData.map((tab) => (
                        <ul className="nav kt-sideleft-menu">
                            <li className="nav-item">
                                <Link to="/forms" className="nav-link with-sub" >
                                    <i className="icon ion-ios-home-outline"></i>
                                    <span>{tab.name}</span>
                                </Link>
                                {
                                    tab.childData &&
                                    tab.childData.map((child) => (
                                        <>
                                        {
                                            
                                            !child.subChildData ?
                                            <ul className="nav-sub">
                                                <li className="nav-item">
                                                <Link to="form-elements" className="nav-link">{child.name}</Link>
                                                </li>
                                            </ul>
                                            :
                                            <ul className="nav kt-sideleft-menu">
                                                    <li className="nav-item">
                                                    <Link to="" className="nav-link with-sub">
                                                        <i className="icon ion-ios-filing-outline"></i>
                                                        <span>{child.name}</span>
                                                    </Link>
                                                    </li>

                                                {
                                                    
                                                    child.subChildData &&
                                                    child.subChildData.map((subchild) => (
                                                        <ul className="nav-link with-sub">
                                                            <li className="nav-item">
                                                            <Link to="" className="nav-sub">
                                                                    <i className="icon ion-ios-gear-outline"></i>
                                                                    <span>{subchild.name}</span>
                                                            </Link>
                                                                
                                                            </li>
                                                        </ul>

                                                    ))
                                                }
                                            </ul>
                                        }
                                        </>
                                     ))
                                 }  

                            </li>

                        </ul>

                    ))
                }
            </div>
        </>
    )
}

export default BasicSidebar
