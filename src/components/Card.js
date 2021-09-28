import React from "react";

function  Card(){


  return (
  
  <div class="kt-pagebody">

    <div class="card pd-20 pd-sm-40">
      <h6 class="card-body-title">Card Body</h6>
      <p class="mg-b-20 mg-sm-b-30">An example of Card </p>
      <div class="card pd-20 pd-sm-40">
          <h6 class="card-body-title">Card Body</h6>
          <p class="mg-b-20 mg-sm-b-30">An example some text within a card body.</p>

          <div class="row mg-b-20">
            <div class="col-md">
              <div class="card card-body bg-gray-200">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consictetur...</p>
              </div>
            </div>
            <div class="col-md mg-t-20 mg-md-t-0">
              <div class="card card-body bg-primary tx-white bd-0">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consictetur...</p>
              </div>
            </div>
            <div class="col-md mg-t-20 mg-md-t-0">
              <div class="card card-body bg-dark tx-white bd-0">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consictetur...</p>
              </div>
            </div>
          </div>
        </div>

    </div>
  </div>



  );
}
export default Card;