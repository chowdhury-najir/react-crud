import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Auth from "../../services/Linkuth";

export default class Sidebar extends Component {

  render() {
    
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
          <label className="kt-sidebar-label">Navigation</label>
          <ul className="nav kt-sideleft-menu">
            <li className="nav-item">
              <Link to="index" className="nav-link active">
                <i className="icon ion-ios-home-outline"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link with-sub">
                <i className="icon ion-ios-gear-outline"></i>
                <span>Forms</span>
              </Link>
              <ul className="nav-sub">
                <li className="nav-item"><Link to="form-elements" className="nav-link">Form Elements</Link></li>
                <li className="nav-item"><Link to="form-layouts" className="nav-link">Form Layouts</Link></li>
                <li className="nav-item"><Link to="form-validation" className="nav-link">Form Validation</Link></li>
                <li className="nav-item"><Link to="form-wizards" className="nav-link">Form Wizards</Link></li>
                <li className="nav-item"><Link to="form-editor-text" className="nav-link">Text Editor</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link with-sub">
                <i className="icon ion-ios-filing-outline"></i>
                <span>UI Elements</span>
              </Link>
              <ul className="nav-sub">
                <li className="nav-item"><Link to="accordion" className="nav-link">Accordion</Link></li>
                <li className="nav-item"><Link to="alerts" className="nav-link">Alerts</Link></li>
                <li className="nav-item"><Link to="buttons" className="nav-link">Buttons</Link></li>
                <li className="nav-item"><Link to="cards" className="nav-link">Cards</Link></li>
                <li className="nav-item"><Link to="icons" className="nav-link">Icons</Link></li>
                <li className="nav-item"><Link to="modal" className="nav-link">Modal</Link></li>
                <li className="nav-item"><Link to="navigation" className="nav-link">Navigation</Link></li>
                <li className="nav-item"><Link to="pagination" className="nav-link">Pagination</Link></li>
                <li className="nav-item"><Link to="popups" className="nav-link">Tooltip &amp; Popover</Link></li>
                <li className="nav-item"><Link to="progress" className="nav-link">Progress</Link></li>
                <li className="nav-item"><Link to="spinners" className="nav-link">Spinners</Link></li>
                <li className="nav-item"><Link to="typography" className="nav-link">Typography</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link with-sub">
                <i className="icon ion-ios-analytics-outline"></i>
                <span>Charts</span>
              </Link>
              <ul className="nav-sub">
                <li className="nav-item"><Link to="chart-morris" className="nav-link">Morris Charts</Link></li>
                <li className="nav-item"><Link to="chart-flot" className="nav-link">Flot Charts</Link></li>
                <li className="nav-item"><Link to="chart-chartjs" className="nav-link">Chart JS</Link></li>
                <li className="nav-item"><Link to="chart-rickshaw" className="nav-link">Rickshaw</Link></li>
                <li className="nav-item"><Link to="chart-sparkline" className="nav-link">Sparkline</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link with-sub">
                <i className="icon ion-ios-navigate-outline"></i>
                <span>Maps</span>
              </Link>
              <ul className="nav-sub">
                <li className="nav-item"><Link to="map-google" className="nav-link">Google Maps</Link></li>
                <li className="nav-item"><Link to="map-vector" className="nav-link">Vector Maps</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link with-sub">
                <i className="icon ion-ios-list-outline"></i>
                <span>Tables</span>
              </Link>
              <ul className="nav-sub">
                <li className="nav-item"><Link to="table-basic" className="nav-link">Basic Table</Link></li>
                <li className="nav-item"><Link to="table-datatable" className="nav-link">Data Table</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link with-sub">
                <i className="icon ion-ios-bookmarks-outline"></i>
                <span>Pages</span>
              </Link>
              <ul className="nav-sub">
                <li className="nav-item"><Link to="blank" className="nav-link">Blank Page</Link></li>
                <li className="nav-item"><Link to="mailbox" className="nav-link">Mailbox</Link></li>
                <li className="nav-item"><Link to="chat" className="nav-link">Chat Page</Link></li>
                <li className="nav-item"><Link to="calendar" className="nav-link">Calendar</Link></li>
                <li className="nav-item"><Link to="edit-profile" className="nav-link">Edit Profile</Link></li>
                <li className="nav-item"><Link to="file-manager" className="nav-link">File Manager</Link></li>
                <li className="nav-item"><Link to="page-signin" className="nav-link">Signin Page</Link></li>
                <li className="nav-item"><Link to="page-signup" className="nav-link">Signup Page</Link></li>
                <li className="nav-item"><Link to="page-notfound" className="nav-link">404 Page Not Found</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="widgets" className="nav-link">
                <i className="icon ion-ios-briefcase-outline"></i>
                <span>Widgets</span>
              </Link>
            </li>
          </ul>
        </div>
    </>
    
    );
  }
}
