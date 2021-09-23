import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="main-footer">
          <div className="pull-right hidden-xs">
            <b>Version</b> 1.0.0
          </div>
          <strong>Copyright © <a href="#/">ASAI</a>.</strong> All rights
    reserved.
  </footer>
        <aside className="control-sidebar control-sidebar-dark" style={{ display: 'none' }}>
          <div className="tab-content">
            <div className="tab-pane" id="control-sidebar-home-tab">
              <h3 className="control-sidebar-heading">Recent Activity</h3>
              <ul className="control-sidebar-menu">
                <li>
                  <a href="/#">
                    <i className="menu-icon fa fa-birthday-cake bg-red" />
                    <div className="menu-info">
                      <h4 className="control-sidebar-subheading">Langdon's Birthday</h4>
                      <p>Will be 23 on April 24th</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="menu-icon fa fa-user bg-yellow" />
                    <div className="menu-info">
                      <h4 className="control-sidebar-subheading">Frodo Updated His Profile</h4>
                      <p>New phone +1(800)555-1234</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="menu-icon fa fa-envelope-o bg-light-blue" />
                    <div className="menu-info">
                      <h4 className="control-sidebar-subheading">Nora Joined Mailing List</h4>
                      <p>nora@example.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="menu-icon fa fa-file-code-o bg-green" />
                    <div className="menu-info">
                      <h4 className="control-sidebar-subheading">Cron Job 254 Executed</h4>
                      <p>Execution time 5 seconds</p>
                    </div>
                  </a>
                </li>
              </ul>
              <h3 className="control-sidebar-heading">Tasks Progress</h3>
              <ul className="control-sidebar-menu">
                <li>
                  <a href="/#">
                    <h4 className="control-sidebar-subheading">
                      Custom Template Design
                <span className="label label-danger pull-right">70%</span>
                    </h4>
                    <div className="progress progress-xxs">
                      <div className="progress-bar progress-bar-danger" style={{ width: '70%' }} />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <h4 className="control-sidebar-subheading">
                      Update Resume
                <span className="label label-success pull-right">95%</span>
                    </h4>
                    <div className="progress progress-xxs">
                      <div className="progress-bar progress-bar-success" style={{ width: '95%' }} />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <h4 className="control-sidebar-subheading">
                      Laravel Integration
                <span className="label label-warning pull-right">50%</span>
                    </h4>
                    <div className="progress progress-xxs">
                      <div className="progress-bar progress-bar-warning" style={{ width: '50%' }} />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <h4 className="control-sidebar-subheading">
                      Back End Framework
                <span className="label label-primary pull-right">68%</span>
                    </h4>
                    <div className="progress progress-xxs">
                      <div className="progress-bar progress-bar-primary" style={{ width: '68%' }} />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
            <div className="tab-pane" id="control-sidebar-settings-tab">
            </div>
          </div>
        </aside>
        <div className="control-sidebar-bg" />
      </div>

    );
  }
}
