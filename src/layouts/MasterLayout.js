import React, { Component,useState,useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Header from '../layouts/partials/Header'
import Footer from '../layouts/partials/Footer'
import Sidebar from '../layouts/partials/Sidebar'
import CloseableTabs from 'react-closeable-tabs'
import Dashboard from '../components/Dashboard'
import Cards from '../components/Cards'
import FormElements from '../components/FormElements'
import FormLayouts from '../components/FormLayouts'




import { Container, Row, Col, Card } from "react-bootstrap";
import SidebarAnt from '../layouts/partials/SidebarAnt'
import BasicSidebar from './partials/BasicSidebar'



const allComponents = {
    Cards : Cards,
    FormElements : FormElements,
    FormLayouts : FormLayouts
};

     const MasterLayout = ({children, ...rest}) => {
         console.log(children.props.history.location.pathname);
         const [state, setState] = useState({list: [{
            tab: 'Dashboard', 
            component: <Dashboard />, 
            id: 0, 
            closeable: false,
         }
        ,{
            tab: 'Cards',
            component: <Cards />,
            id: 1,
            closeable: true
          },
          {
            tab: 'FormElements',
            component: <FormElements />,
            id: 2,
            closeable: true
          }

    ],
    activeIndex : 0
})

   const addTab=(componentname,componentdisplayname, editcomponentid)=>{
        let indexNumber = 0;
        for(let i = 0; i <state.list.length; i++) {
            if (state.list[i].tab === componentdisplayname) {
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
                    component:  <DynamicallyChooseComponent closeTabFromComponent={closeTab} 
                    editcomponentid={editcomponentid} tabId={id} />,
                    id: id,
                    closeable: true
            };

            const newItems = [...state.list];
            for(let j = 0; j < newItems.length; j++) {
                if (newItems[j].tab === componentdisplayname) {
                    newItems[j]=tabAfterFilter
                }
            }

           setState({
                list: newItems,
                activeIndex: indexNumber
            });
        }
       
        // else {
        //    addTabCoreFunction(componentname,componentdisplayname, editcomponentid)
        // }
    }



//   const  addTabCoreFunction=(componentname,componentdisplayname, editcomponentid)=>{
//         const id = new Date().valueOf();
//         var DynamicallyChooseComponent = allComponents[componentname];
//        setState({
//             list:state.list.concat({
//             tab: componentdisplayname,
//             component:  <DynamicallyChooseComponent closeTabFromComponent={closeTab} 
//             editcomponentid={editcomponentid} tabId={id} />,
//             id: id,
//             closeable: true
//         }),
//         activeIndex:state.list.length
//         });
//     }
    useEffect( (children) => {
       // alert(children.props.history.location.pathname)
        let splitedQueryString=children.props.history.location.pathname.split('/');
        if(splitedQueryString.length>=2){
           let tabDisplayName= splitedQueryString[1].replace("_", " ");
           console.log(splitedQueryString);
           var lastIdx = splitedQueryString[splitedQueryString.length-1];
           var hasUpdateId =!isNaN(parseInt(lastIdx)) ; 
           console.log(lastIdx);
           if(hasUpdateId){
              addTab(splitedQueryString[1],tabDisplayName, splitedQueryString[2])
           }else{
              addTab(lastIdx,lastIdx, lastIdx)
           }  
        }

    });

  
  const  closeTab=(tabidfromcomponent,newIndex)=>{
        let currentIndex=state.list.findIndex(item => item.id === tabidfromcomponent);
        let previousIndex=currentIndex-1;
        previousIndex=previousIndex<0?0:previousIndex;
       setState({
            list:state.list.filter(item => item.id !== tabidfromcomponent),
            activeIndex:  previousIndex
        });
    }


 



         return (
             <>
            
            <Header></Header>
            <BasicSidebar addTabFromSideBar={addTab}  />
            <div className = " kt-mainpanel" >
            <CloseableTabs tabPanelColor='lightgray' data={state.list} onCloseTab={(id, newIndex) => {closeTab(id,newIndex)}}
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