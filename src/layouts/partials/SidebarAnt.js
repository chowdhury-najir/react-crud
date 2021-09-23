import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Menu, Switch } from 'antd';
import { AccountBookFilled, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { sidebarData } from './sidebarData';
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const SidebarAnt = () => {
    const [state, setState] = useState({
        theme: 'light',
        current: '0',
    })

    const [navData, setNevData] = useState([]);

    useEffect(() => {
        setNevData(sidebarData);
    }, []);

    //console.log(navData)

    const changeTheme = value => {
        setState({
            ...state,
            theme: value ? 'dark' : 'light',
        });
    };

    const handleClick = e => {
        console.log('click ', e);
        setState({
            ...state,
            current: e.key,
        });
    };
    console.log(navData);
    return (
        <>
            <div class="kt-sideleft-header">
                <div class="kt-logo"><Link to="index">katniss</Link></div>
                <div id="ktDate" class="kt-date-today"></div>
                <div class="input-group kt-input-search">
                    <input type="text" class="form-control" placeholder="Search..." />
                    <span class="input-group-btn mg-0">
                        <button class="btn"><i class="fa fa-search"></i></button>
                    </span>
                </div>
            </div>
        <div className="kt-sideleft">
        <div className="sidebar-wrapper-antd">
            <Switch
                checked={state.theme === 'dark'}
                onChange={changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
            />
            <br />
            <br />
            <Menu
                theme={state.theme}
                onClick={handleClick}
                style={{ width: 256 }}
                defaultOpenKeys={['sub1']}
                selectedKeys={[state.current]}
                mode="inline"
            >
                <Menu.Item key="0" icon={<AppstoreOutlined />}>
                    Dashboard
                </Menu.Item>
                {
                   
                    navData.map((tab) => (
                        
                        <SubMenu key={tab.id} icon={<SettingOutlined />} title={tab.name}>
                            {
                                tab.childData &&
                                tab.childData.map((child) => (
                                    <>
                                        {
                                            !child.subChildData ?
                                            <Menu.Item key={child.key}> <Link to = {child.url} > {child.name}  </Link> </Menu.Item>
                                             :
                                                <SubMenu key={child.key}
                                                    icon={<AccountBookFilled />} title={child.name}>
                                                    {
                                                        child.subChildData &&
                                                        child.subChildData.map((subChild) => (
                                                            
                                                             <Menu.Item key={subChild.key}> 
                                                             <Link to = {subChild.url} > {subChild.name} </Link>
                                                             </Menu.Item>
                                                            
                                                        ))
                                                    }
                                                </SubMenu>
                                        }
                                    </>
                                ))
                            }
                        </SubMenu>
                        
                    ))

                }

            </Menu>
        </div>
        </div>
    </>
    )
}

export default SidebarAnt