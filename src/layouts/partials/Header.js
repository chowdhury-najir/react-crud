import React, { Component } from "react";
//import Auth from "../../services/Auth";


export default class Header extends Component {
  // logout=()=>{
  //   Auth.setUserSession("", "");
  //   window.location.href="/";
  // }
  render() {
    return (
      <>

        <div class="kt-sideleft-header">
          <div class="kt-logo"><a href="index.html">React</a></div>
          <div id="ktDate" class="kt-date-today"></div>
          <div class="input-group kt-input-search">
            <input type="text" class="form-control" placeholder="Search..." />
            <span class ="input-group-btn mg-0">
            <button class ="btn"><i class ="fa fa-search"></i></button>
            </span>
          </div>
        </div>
  
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


            <div class="dropdown dropdown-profile">
          <a href="" class="nav-link nav-link-profile" data-toggle="dropdown">
            <img src="../img/img3.jpg" class="wd-32 rounded-circle" alt="" />
            <span class="logged-name"><span class="hidden-xs-down">Jane Doe</span> <i class="fa fa-angle-down mg-l-3"></i></span>
          </a>
          <div class="dropdown-menu wd-200">
            <ul class="list-unstyled user-profile-nav">
              <li><a href=""><i class="icon ion-ios-person-outline"></i> Edit Profile</a></li>
              <li><a href=""><i class="icon ion-ios-gear-outline"></i> Settings</a></li>
              <li><a href=""><i class="icon ion-ios-download-outline"></i> Downloads</a></li>
              <li><a href=""><i class="icon ion-ios-star-outline"></i> Favorites</a></li>
              <li><a href=""><i class="icon ion-ios-folder-outline"></i> Collections</a></li>
              <li><a href=""><i class="icon ion-power"></i> Sign Out</a></li>
            </ul>
          </div> {/*<!-- dropdown-menu --> */}
        </div>

            {/* <div class="kt-breadcrumb">
              <nav class="breadcrumb">
                <a class="breadcrumb-item" href="index.html">Katniss</a>
                <span class="breadcrumb-item active">Dash</span>
              </nav>
            </div>  */}
          </div>
         </div> 
         </>
      
    );
  }
}
