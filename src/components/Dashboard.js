import React, { Component } from 'react'
import { Link } from "react-router-dom"


 class Dashboard extends Component {
  constructor(props){
    super(props);
   this.state = {}
  }
    render() {
        return (
          
          <div className="kt-pagebody">
            <div className = "card">
            <h4>This is Dashboard Content</h4>
            <p>
              React js
            </p>
          </div>
          </div>
        
        
        )
    }
}

export default Dashboard;
