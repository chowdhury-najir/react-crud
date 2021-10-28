import React from "react";

export default function SearchComponent() {
    return (
        // <div className="ui search">
        //     <div className="ui icon input">
        //         <input className="prompt" type="text" placeholder="Common passwords..." />
        //         <i className ="search icon"></i>
        //     </div>
        //     <div className="results"></div>
        // </div>
        <div className="list row">
        <div className="col-md-5">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              name = "search"
              value="search"
              
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                
              >
                Search
              </button>
            </div>
          </div>
        </div>
        </div>
    );
};