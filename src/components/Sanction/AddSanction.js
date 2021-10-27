import React from "react";
//import { useForm } from "react-hook-form"
//import nextId from "react-id-generator";
import SanctionService from "../../services/SanctionService";
import { v4 as uuid4 } from "uuid";
class AddSanction extends React.Component {

  state = {
    SanctionPartyType: 1,
    Name: "",
    OtherName : "",
    DateOfBirth: new Date(),
    Nationality: "",
    Address: "",
    IdentificationType: 1,
    IdentificationNumber : "",
    SanctionTypeId: 1,
    SanctionDetails: "",
    SanctionDate: new Date(),
    SanctionExpiration: new Date()
  }

  add = (e) => {
    e.preventDefault();
    if (this.state.Name === "" || this.state.OtherName === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    console.log(this.state);

    SanctionService.addSanctionHandler(this.state);
    this.setState(
      {SanctionPartyType: 1,
      Name: "",
      OtherName : "",
      DateOfBirth: new Date(),
      Nationality: "",
      Address: "",
      IdentificationType: 1,
      IdentificationNumber : "",
      SanctionTypeId: 1,
      SanctionDetails: "",
      SanctionDate: new Date(),
      SanctionExpiration: new Date()
    });
    this.props.history.push("/");  //take to contact page
  };

  handleChange = (e) => {
    let name = e.target.name;
    if(name === "SanctionTypeId" || name === "IdentificationType"){
      var value =parseInt(e.target.value) ;
    }
    else{
      var value = e.target.value;
    }
    this.setState({ [name]: value });
    console.log(this.state);
  }

  render() {
    console.log(this.props);
    return (
      <div className="kt-mainpanel">
        <div className="kt-pagebody">
          <div className="ui main">
            <h2>Add Sanction</h2>
            <form className="ui form" onSubmit={this.add}>
              <div className="three fields">
                <div className="field">
                  <label>Name</label>
                  <input
                    type="text"
                    name="Name"
                    placeholder="FirstName"
                    value={this.state.Name}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="field">
                  <label>Other Name</label>
                  <input
                    type="text"
                    name="OtherName"
                    placeholder="OtherName"
                    value={this.state.OtherName}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="field">
                  <label for="birthday">Birthday</label>
                  <input type="date" id="birthday" name="DateOfBirth" onChange={this.handleChange} value={this.state.DateOfBirth} />
                </div>

              </div>

              <div className="three fields">
                <div className="field">
                  <label>Nationality</label>
                  <input
                    type="text"
                    name="Nationality"
                    placeholder="Nationality"
                    value={this.state.Nationality}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="field">
                  <label>Identification Type</label>
                  <select
                    name="IdentificationType"
                    value={this.state.IdentificationType}
                    onChange={this.handleChange}
                  >
                    <option value="1" >National ID</option>
                    <option value="2" >Voter ID</option>
                    <option value="3" >NHIS</option>
                    <option value="4" >Driving License</option>
                    <option value="5" >Passport</option>
                  </select>
                </div>

                <div className="field">
                  <label>Identification Number</label>
                  <input
                    type="text"
                    name="IdentificationNumber"
                    placeholder="IdentificationNumber"
                    value={this.state.IdentificationNumber}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="three fields">
                <div className="field">
                  <label>Sanction Type</label>
                  <select
                    name="SanctionTypeId"
                    value={this.state.SanctionTypeId}
                    onChange={this.handleChange}
                  >
                    <option value="1" >Deny Withdrawal </option>
                    <option value="2" >Deny Accout Creation</option>
                    <option value="3" >Deny Customer Creation</option>
                    <option value="4" >Reject Cheques</option>
                    <option value="5" >Deny Loan</option>
                  </select>
                </div>

                <div className="field">
                  <label>Sanction Details</label>
                  <textarea
                   name="SanctionDetails"
                   placeholder="Sanction Details"
                   value={this.state.SanctionDetails}
                   onChange={this.handleChange}
                  rows="1"
                >
                </textarea>
                </div>
              </div>

          

              <div className = "three fields">
                <div className="field">
                    <label for="birthday">Sanction Date</label>
                    <input type="date" id="SanctionDate" name="SanctionDate" onChange={this.handleChange} value={this.state.SanctionDate} />
                  </div>
                <div className="field">
                  <label for="birthday">Sanction Expiration Date</label>
                  <input type="date" id="" name="SanctionExpiration" onChange={this.handleChange} value={this.state.SanctionExpiration} />
                </div>
              </div>

              <div className = "two fields">
              <div className="field">
                <label>Address</label>
                <textarea
                  name="Address"
                  value={this.state.Address}
                  onChange={this.handleChange}
                  rows="1"
                >
                </textarea>
              </div>

            </div>

              <button className="ui button blue">Add</button>
            </form>
          </div>
        </div>

      </div>

    );
  }
}

export default AddSanction;
