import React, { useEffect, useState } from 'react'
import { sidebarData } from './sidebarData';

const BasicSidebar = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        setState(sidebarData);
    }, []);

    return (
        <>
            <ul className="basic-nav">
                {state.map((tab) => (
                    <li className="dropdown cssState" key={tab.id}>
                        {tab.name}
                            <ul>
                            {tab.childData &&
                                tab.childData.map((child) => (
                                    <li key={child.id}>
                                        {child.name}
                                        <ul>
                                            {child.subChildData &&
                                                child.subChildData.map((subChild) => (
                                                    <li key={subChild.id}>{subChild.name}</li>
                                                ))}
                                        </ul>
                                    </li>
                                ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default BasicSidebar
