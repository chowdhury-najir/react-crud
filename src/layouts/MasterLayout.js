import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Header from '../layouts/partials/Header'
import Footer from '../layouts/partials/Footer'
import Sidebar from '../layouts/partials/Sidebar'
import CloseableTabs from 'react-closeable-tabs'
import Dashboard from '../components/Dashboard'



import { Container, Row, Col } from "react-bootstrap";
import SidebarAnt from '../layouts/partials/SidebarAnt'

     const MasterLayout = ({children, ...rest}) => {
         return (
            <div>
            <Header />
            
            <SidebarAnt />
            
           
               {children}
        
            
            <Footer />
        </div>
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