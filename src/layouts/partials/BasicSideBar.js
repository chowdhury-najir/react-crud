import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { sidebarData } from './sidebarData';

const BasicSidebar = () => {
    const [navData, setNavData] = useState([]);

    useEffect(() => {
        setNavData(sidebarData);
    }, []);

    return (
        <div class="kt-sideleft">
        <ul className="nav kt-sideleft-menu">
   
            {navData.map((tab) => (
                <li className="nav-item" key={tab.id}>
                    <Link  to="" className="nav-link with-sub" >
                    <i className="icon ion-ios-gear-outline"></i>
                         {tab.name}
                     </Link>
                     {
                    
                     <ul className="nav kt-sideleft-menu">
                        {tab.childData &&
                            tab.childData.map((child) => (

                                child.subChildData ?  
                                <li className= "nav-item" key={child.id}>
                                    <Link  to = {child.url} className = "nav-link with-sub">
                                    <i className="icon ion-ios-gear-outline"></i>
                                    {child.name}     
                                    </Link> 
                                    <ul className = "nav-sub">
                                        {child.subChildData &&
                                            child.subChildData.map((subChild) => (
                                                <li  className="nav-item" key={subChild.id}>
                                                    <Link  to={subChild.url} className="nav-link " >

                                                        {subChild.name}
                                                     </Link>  
                                                </li>
                                            ))}
                                    </ul>
                                </li> :
                                <li className = "nav-item" key={child.id}>
                                    <Link  to={child.url} className="nav-link " >
                                         {child.name}
                                    </Link>
                                </li>
                            ))}
                        </ul> 
                        // <li className = "nav-item">
                        // {tab.childData &&
                        //     tab.childData.map((child) => (
                        //         <li className= "nav-item" key={child.id}>
                        //             {child.name}      
                        //             <ul className = "nav-sub">
                        //                 {child.subChildData &&
                        //                     child.subChildData.map((subChild) => (
                        //                         <li  className="nav-item" key={subChild.id}>
                        //                             <Link  to="" className="nav-link " >
                        //                                 <i className="icon ion-ios-gear-outline"></i>
                        //                                 {subChild.name}
                        //                              </Link>  
                        //                         </li>
                        //                     ))}
                        //             </ul>
                        //         </li>
                        //     ))}
                        // </li>
                        

                     }
                </li>
            ))}
        </ul>
    </div>
            
    )
}

export default BasicSidebar;