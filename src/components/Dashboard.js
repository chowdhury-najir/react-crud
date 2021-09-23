import React, { Component } from 'react'
import { Link } from "react-router-dom"


 class Dashboard extends Component {
  constructor(props){
    super(props);
   this.state = {}
  }
    render() {
        return (
          <div>
            <div className="row">
             <div className="col-md-12">
             <div className="col-md-3 card" style={{width: "25%"}}>
                <ul className="list-group list-group-flush">
                  <Link to={"/Country_List/"} className="btn-xsm">
                    <li className="list-group-item">
                      <i className="fa fa-flag"></i>  Country List 
                    </li>
                  </Link>
                </ul>
              </div>

             <div className="col-md-3 card" style={{width: "25%"}}>
                <ul className="list-group list-group-flush">
                  <Link to={"/Country_Add/"} className="btn-xsm">
                    <li className="list-group-item">
                    <i className="fa fa-plus" aria-hidden="true"></i>  Country Add 
                    </li>
                  </Link>
                </ul>
              </div>

              <div className="col-md-3 card" style={{width: "25%"}}>
                <ul className="list-group list-group-flush">
                  <Link to={"/Entity_List/"} className="btn-xsm">
                    <li className="list-group-item">
                    <i className="fa fa-home" aria-hidden="true"></i>  Entity List
                    </li>
                  </Link>
                </ul>
              </div>

              <div className="col-md-3 card" style={{width: "25%"}}>
                <ul className="list-group list-group-flush">
                  <Link to={"/Entity_Add/"} className="btn-xsm">
                    <li className="list-group-item">
                    <i className="fa fa-plus" aria-hidden="true"></i>  Entity Add 
                    </li>
                  </Link>
                </ul>
              </div>

              <div className="col-md-3 card" style={{width: "25%"}}>
                <ul className="list-group list-group-flush">
                  <Link to={"/Exchange_RateTypeList/"} className="btn-xsm">
                    <li className="list-group-item">
                    <i className="fa fa-exchange" aria-hidden="true"></i>  ExchangeRateType List
                    </li>
                  </Link>
                </ul>
              </div>

             </div>
            </div>
          </div>
        )
    }
}

export default Dashboard;
