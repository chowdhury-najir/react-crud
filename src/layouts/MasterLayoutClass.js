import React, { Component,useState,useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Header from './partials/Header'
import Footer from './partials/Footer'
import CloseableTabs from 'react-closeable-tabs'
import Dashboard from '../components/Dashboard'
import Cards from '../components/Cards'
import FormElements from '../components/FormElements'
import FormLayouts from '../components/FormLayouts'
import Audit from "../components/Audit";
import AuditHistory from "../components/AuditHistory";
import AuditType from "../components/AuditType";
import ExternalAudit from "../components/ExternalAudit";
import InternalAudit from "../components/InternalAudit";
import Debit from "../components/Debit";
import Credit from "../components/Credit";




import Sidebar from './partials/Sidebar'



const allComponents = {
    Cards : Cards,
    FormElements : FormElements,
    FormLayouts : FormLayouts,
    Audit : Audit,
    AuditHistory : AuditHistory,
    AuditType : AuditType,
    InternalAudit : InternalAudit,
    ExternalAudit : ExternalAudit
    ,Debit : Debit,
    Credit : Credit
};

class MasterClass extends Component {
    constructor(props){
      super(props);
     this.state = {
        list: [{
            tab: 'Dashboard', 
            component: <Dashboard />, 
            id: 0, 
            closeable: false
        }],
        
     }
    }

    addTab=(componentname,componentdisplayname, editcomponentid)=>{
        let indexNumber = 0;
        for(let i = 0; i < this.state.list.length; i++) {
            if (this.state.list[i].tab === componentdisplayname) {
                indexNumber = i;
                break;
            }
        }

        if(indexNumber>0)
        {         
            var DynamicallyChooseComponent = allComponents[componentname];
            const id = new Date().valueOf();
            const tabAfterFilter=
            {
                tab: componentdisplayname,
                    component:  <DynamicallyChooseComponent closeTabFromComponent={this.closeTab} 
                    editcomponentid={editcomponentid} tabId={id} />,
                    id: id,
                    closeable: true
            };

            const newItems = [...this.state.list];
            for(let j = 0; j < newItems.length; j++) {
                if (newItems[j].tab === componentdisplayname) {
                    newItems[j]=tabAfterFilter
                }
            }

            this.setState({
                list: newItems,
                activeIndex: indexNumber
            });
        }
       
        else {
            this.addTabCoreFunction(componentname,componentdisplayname, editcomponentid)
        }
    }

 

    addTabCoreFunction=(componentname,componentdisplayname, editcomponentid)=>{
        const id = new Date().valueOf();
        var DynamicallyChooseComponent = allComponents[componentname];
        this.setState({
            list: this.state.list.concat({
            tab: componentdisplayname,
            component:  <DynamicallyChooseComponent closeTabFromComponent={this.closeTab} 
            editcomponentid={editcomponentid} tabId={id} />,
            id: id,
            closeable: true
        }),
        activeIndex: this.state.list.length
        });
    }

    componentWillReceiveProps=(props)=>{
     let splitedQueryString=this.props.history.location.pathname.split('/');
     console.log(props);
     if(splitedQueryString.length>=2){
        let tabDisplayName= splitedQueryString[1].replace("_", " ");
        var lastIdx = splitedQueryString[splitedQueryString.length-1];
        var hasUpdateId =!isNaN(parseInt(lastIdx)) ; 
        if(hasUpdateId){
            this.addTab(splitedQueryString[1],tabDisplayName, splitedQueryString[2])
        }else{
            this.addTab(lastIdx,lastIdx, lastIdx)
        }  
     }
    }
    closeTab=(tabidfromcomponent,newIndex)=>{
        let currentIndex=this.state.list.findIndex(item => item.id === tabidfromcomponent);
        let previousIndex=currentIndex-1;
        previousIndex=previousIndex<0?0:previousIndex;
        this.setState({
            list: this.state.list.filter(item => item.id !== tabidfromcomponent),
            activeIndex:  previousIndex
        });
    }

     render() {
         return (
            <div>
            <Header />
            <Sidebar addTabFromSideBar={this.addTab} />
            <div className="kt-mainpanel">
                    <CloseableTabs data={this.state.list}  onCloseTab={(id, newIndex) => {this.closeTab(id,newIndex)}}
                    activeIndex={this.state.activeIndex} tabPanelColor='#486b7d' mainClassName = "closable-tab-wrapper" tabPanelClass = "closable-tab" tabContentClass = "closable-tab-content-panel"
                    />
            </div>
            <Footer />
        </div>
         )
     }
 }

const MasterLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps =>
             (
                <MasterClass {...matchProps} />
            ) 
        }
        />

    )

};

export default MasterLayoutRoute;