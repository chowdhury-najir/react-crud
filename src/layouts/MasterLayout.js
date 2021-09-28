import React, { Component,useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Header from '../layouts/partials/Header'
import Footer from '../layouts/partials/Footer'
import Sidebar from '../layouts/partials/Sidebar'
import CloseableTabs from 'react-closeable-tabs'
import Dashboard from '../components/Dashboard'
import Cards from '../components/Card'




import { Container, Row, Col } from "react-bootstrap";
import SidebarAnt from '../layouts/partials/SidebarAnt'
import BasicSidebar from './partials/BasicSidebar'

     const MasterLayout = ({children, ...rest}) => {
         console.log(children.props);
         const [state, setState] = useState({data: [{
            tab: 'Dashboard', 
            component: <Dashboard />, 
            id: 0, 
            closeable: true
        },{
            tab: 'cards',
            component: <Cards />,
            id: 1,
            closeable: true
          }
    ]})
         return (
             <>
            
            <Header></Header>
            <Sidebar></Sidebar>
            <div className = " kt-mainpanel" >
            <CloseableTabs tabPanelColor='lightgray' data={state.data} onCloseTab={(id, newIndex) => {
                setState({
                data: state.data.filter(item => item.id !== id),
                activeIndex: newIndex
                });
            }}
            activeIndex={state.activeIndex}
        />
        
        </div>
        <Footer />
            </>
            
         )
     }

 const MasterLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps =>
           (
                <MasterLayout  >
                    <Component {...matchProps} />
                 </MasterLayout>
            ) 
        }
        />

    )

};

export default MasterLayoutRoute;