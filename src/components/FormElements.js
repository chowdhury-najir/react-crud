import React from "react";

function  FormElements(){


  return (
    <>

{/* <div class="kt-mainpanel">
      <div class="kt-pagetitle">
        <h5>Form Elements</h5>
      </div> */}

<div class="kt-pagebody">

  <div class="card pd-20 pd-sm-40">
    <h6 class="card-body-title">Top Label Elements</h6>
    <p class="mg-b-20 mg-sm-b-30">A form with a label on top of each form control.</p>

    <div class="form-layout">
      <div class="row mg-b-25">
        <div class="col-lg-4">
          <div class="form-group">
            <label class="form-control-label">Firstname: <span class="tx-danger">*</span></label>
            <input class="form-control" type="text" name="firstname" value="" placeholder="Enter firstname" />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <label class="form-control-label">Lastname: <span class="tx-danger">*</span></label>
            <input class="form-control" type="text" name="lastname" value="McDoe" placeholder="Enter lastname" />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <label class="form-control-label">Email address: <span class="tx-danger">*</span></label>
            <input class="form-control" type="text" name="email" value="johnpaul@yourdomain.com" placeholder="Enter email address" />
          </div>
        </div>
        <div class="col-lg-8">
          <div class="form-group mg-b-10-force">
            <label class="form-control-label">Mail Address: <span class="tx-danger">*</span></label>
            <input class="form-control" type="text" name="address" value="Market St. San Francisco" placeholder="Enter address" />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group mg-b-10-force">
            <label class="form-control-label">Country: <span class="tx-danger">*</span></label>
            <select class="form-control select2" data-placeholder="Choose country">
              <option label="Choose country"></option>
              <option value="USA">United States of America</option>
              <option value="UK">United Kingdom</option>
              <option value="China">US</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
        </div>
      </div>

      <div class="form-layout-footer">
        <button class="btn btn-default mg-r-5">Submit Form</button>
        <button class="btn btn-secondary">Cancel</button>
      </div>
    </div>
  </div>
  <div class="card pd-20 pd-sm-40">
    <h6 class="card-body-title">Top Label Elements</h6>
    <p class="mg-b-20 mg-sm-b-30">A form with a label on top of each form control.</p>

    <div class="form-layout">
      <div class="row mg-b-25">
        <div class="col-lg-4">
          <div class="form-group">
            <label class="form-control-label">Firstname: <span class="tx-danger">*</span></label>
            <input class="form-control" type="text" name="firstname" value="" placeholder="Enter firstname" />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <label class="form-control-label">Lastname: <span class="tx-danger">*</span></label>
            <input class="form-control" type="text" name="lastname" value="McDoe" placeholder="Enter lastname" />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <label class="form-control-label">Email address: <span class="tx-danger">*</span></label>
            <input class="form-control" type="text" name="email" value="johnpaul@yourdomain.com" placeholder="Enter email address" />
          </div>
        </div>
        <div class="col-lg-8">
          <div class="form-group mg-b-10-force">
            <label class="form-control-label">Mail Address: <span class="tx-danger">*</span></label>
            <input class="form-control" type="text" name="address" value="Market St. San Francisco" placeholder="Enter address" />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group mg-b-10-force">
            <label class="form-control-label">Country: <span class="tx-danger">*</span></label>
            <select class="form-control select2" data-placeholder="Choose country">
              <option label="Choose country"></option>
              <option value="USA">United States of America</option>
              <option value="UK">United Kingdom</option>
              <option value="China">US</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
        </div>
      </div>

      <div class="form-layout-footer">
        <button class="btn btn-default mg-r-5">Submit Form</button>
        <button class="btn btn-secondary">Cancel</button>
      </div>
    </div>
  </div>
  <div class="card pd-20 pd-sm-40">
    <h6 class="card-body-title">Top Label Elements</h6>
    <p class="mg-b-20 mg-sm-b-30">A form with a label on top of each form control.</p>

    <div class="form-layout">
      <div class="row mg-b-25">
        <div class="col-lg-4">
          <div class="form-group">
            <label class="form-control-label">Firstname: <span class="tx-danger">*</span></label>
            <input class="form-control" type="text" name="firstname" value="" placeholder="Enter firstname" />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <label class="form-control-label">Lastname: <span class="tx-danger">*</span></label>
            <input class="form-control" type="text" name="lastname" value="McDoe" placeholder="Enter lastname" />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <label class="form-control-label">Email address: <span class="tx-danger">*</span></label>
            <input class="form-control" type="text" name="email" value="johnpaul@yourdomain.com" placeholder="Enter email address" />
          </div>
        </div>
        <div class="col-lg-8">
          <div class="form-group mg-b-10-force">
            <label class="form-control-label">Mail Address: <span class="tx-danger">*</span></label>
            <input class="form-control" type="text" name="address" value="Market St. San Francisco" placeholder="Enter address" />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group mg-b-10-force">
            <label class="form-control-label">Country: <span class="tx-danger">*</span></label>
            <select class="form-control select2" data-placeholder="Choose country">
              <option label="Choose country"></option>
              <option value="USA">United States of America</option>
              <option value="UK">United Kingdom</option>
              <option value="China">US</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
        </div>
      </div>

      <div class="form-layout-footer">
        <button class="btn btn-default mg-r-5">Submit Form</button>
        <button class="btn btn-secondary">Cancel</button>
      </div>
    </div>
  </div>
</div>
{/* </div> */}
</>

  );
}
export default FormElements;