import React, { Component } from "react";
import Dashboard from "./Dashboard";
// import { Link } from "react-router-dom";
//import Auth from "../../services/Auth";

export default class FormLayouts extends Component {

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

  render() {
    
    return (
        <>

{/* <div className="kt-mainpanel">
     
      <div className="kt-pagetitle">
        <h5>Form Layouts</h5>
      </div> */}

<div className="kt-pagebody">

  <div className="card pd-20 pd-sm-40">
    <h6 className="card-body-title">Top Label Layout</h6>
    <p className="mg-b-20 mg-sm-b-30">A form with a label on top of each form control.</p>

    <div className="form-layout">
      <div className="row mg-b-25">
        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label">Firstname: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name={this.state.firstName} onChange = {this.handleChange} value="John Paul" placeholder="Enter firstname" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label">Lastname: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="lastname" value="McDoe" placeholder="Enter lastname" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label">Email address: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="email" value="johnpaul@yourdomain.com" placeholder="Enter email address" />
          </div>
        </div>
        <div className="col-lg-8">
          <div className="form-group mg-b-10-force">
            <label className="form-control-label">Mail Address: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="address" value="Market St. San Francisco" placeholder="Enter address" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group mg-b-10-force">
            <label className="form-control-label">Country: <span className="tx-danger">*</span></label>
            <select className="form-control select2" data-placeholder="Choose country">
              <option label="Choose country"></option>
              <option value="USA">United States of America</option>
              <option value="UK">United Kingdom</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form-layout-footer">
        <button className="btn btn-default mg-r-5">Submit Form</button>
        <button className="btn btn-secondary">Cancel</button>
      </div>
    </div>
  </div>
</div>
{/* </div> */}
</>

)
    };
}