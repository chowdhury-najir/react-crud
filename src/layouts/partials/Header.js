import React, { Component } from "react";
//import Auth from "../../services/Auth";


export default class Header extends Component {
  // logout=()=>{
  //   Auth.setUserSession("", "");
  //   window.location.href="/";
  // }
  render() {
    return (
  
        <div class="kt-headpanel">
          <div class="kt-headpanel-left">
            <a id="naviconMenu" href="" class="kt-navicon d-none d-lg-flex"><i class="icon ion-navicon-round"></i></a>
            <a id="naviconMenuMobile" href="" class="kt-navicon d-lg-none"><i class="icon ion-navicon-round"></i></a>
          </div>
          {/* <!-- kt-headpanel-left --> */}

          <div class="kt-headpanel-right">
            <div class="dropdown dropdown-notification">
              <a href="" class="nav-link pd-x-7 pos-relative" data-toggle="dropdown">
                <i class="icon ion-ios-bell-outline tx-24"></i>

                <span class="square-8 bg-danger pos-absolute t-15 r-0 rounded-circle"></span>

              </a>
              <div class="dropdown-menu wd-300 pd-0-force">
                <div class="dropdown-menu-header">
                  <label>Notifications</label>
                  <a href="">Mark All as Read</a>
                </div>
              </div> {/* */}
            </div>
            <div class="kt-breadcrumb">
              <nav class="breadcrumb">
                <a class="breadcrumb-item" href="index.html">Katniss</a>
                <span class="breadcrumb-item active">Dash</span>
              </nav>
            </div> 
          </div>
         </div> 
      
    );
  }
}
