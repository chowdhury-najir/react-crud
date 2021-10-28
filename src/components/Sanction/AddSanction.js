import React , {useState} from "react";
import { useForm } from "react-hook-form"
//import nextId from "react-id-generator";
import SanctionService from "../../services/SanctionService";
import { v4 as uuid4 } from "uuid";
function AddSanction (props)  {
  let { register, handleSubmit,watch, formState: { errors }} = useForm();

 let initialState = {
   id : 2,
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

  let [state,setState] = useState(initialState);

  const add = (data) => {

    data.SanctionTypeId = parseInt(data.SanctionTypeId);
    data.IdentificationType = parseInt(data.IdentificationType);
    data.SanctionPartyType = 1;
    data["id"]= uuid4();
    setState(data);
   
   // console.log(data);
  //  Services.getSanctionList()
  //     .then((res) => {
  //       setState({
  //         sanctionTypeData: res,
  //         loading: false,
  //         hasError: false,
  //       });
  //     })
  //     .catch((err) =>

   SanctionService.addSanctionHandler(state)
      .then((response) =>{
        console.log(response);
        
      if(response === 1 ){
        alert("created successfully");
        setState(
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
        //props.history.push("/");  //take to contact page
      }

      })
      .catch( (err)=> console.log(err));
    
  };

 let handleChange = (e) => {
   console.log(e);
   
    let name = e.target.name;
    if(name === "SanctionTypeId" || name === "IdentificationType"){
      var value =parseInt(e.target.value) ;
    }
    else{
       value = e.target.value;
    }
    setState({...state, [name] : value });
    console.log(state);
  }

    return (
      <div className="kt-mainpanel">
        <div className="kt-pagebody">
          <div className="ui main">
            <h2>Add Sanction</h2>
            <form className="ui form" onSubmit={handleSubmit(add)}>
              <div className="three fields">
              <div className="field">
                  <label> Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    value = {state.Name}
                    {...register("Name",{required: "Name is required", onChange: (e) => {handleChange(e)} })}
                  />
                  {errors["Name"] && <span style= {{color:"red", padding : '2px'}}> {errors["Name"]['message']} </span>}
                  
                </div>
                

                <div className="field">
                  <label>Other Name</label>
                  <input
                    type="text"
                    placeholder="Other Name"
                    name = "OtherName"
                    value = {state.OtherName}
                    onChange = {handleChange}
                    {...register("OtherName",{required: "Other Name is required", onChange: (e) => {handleChange(e)}})}
                  />
                  {errors["OtherName"] && <span style= {{color:"red", padding : '2px'}}> {errors["OtherName"]['message']} </span>}
                </div>
                <div className="field">
                  <label htmlFor="birthday">Birthday</label>
                  <input type="date" id="birthday" 
                    name = "DateOfBirth"
                    value = {state.DateOfBirth}
                    onChange = {handleChange}
                   {...register("DateOfBirth",{required: "Birthday is required", onChange: (e) => {handleChange(e)}})}
                   />
                   {errors["DateOfBirth"] && <span style= {{color:"red", padding : '2px'}}> {errors["DateOfBirth"]['message']} </span>}
                </div>

              </div>

              <div className="three fields">
                <div className="field">
                  <label>Nationality</label>
                  <input
                    type="text"
                    placeholder="Nationality"
                    name = "Nationality"
                    value = {state.Nationality}
                    onChange = {handleChange}
                    {...register("Nationality",{required: "Nationality is required" ,onChange: (e) => {handleChange(e)}})}
                  />
                {errors["Nationality"] && <span style= {{color:"red", padding : '2px'}}> {errors["Nationality"]['message']} </span>}
                </div>

                <div className="field">
                  <label>Identification Type</label>

                  <select
                    value = {state.IdentificationType}

                    {...register("IdentificationType" ,{ onChange : (e) => {handleChange(e)} })}
                  >
                    <option value="1" >National ID</option>
                    <option value="2" >Voter ID</option>
                    <option value="3" >NHIS</option>
                    <option value="4" >Driving License</option>
                    <option value="5" >Passport</option>
                  </select>
                  {errors["IdentificationType"] && <span style= {{color:"red", padding : '2px'}}> {errors["IdentificationType"]['message']} </span>}
                </div>

                <div className="field">
                  <label>Identification Number</label>
                  <input
                    type="text"
                    placeholder="IdentificationNumber"
                    name = "IdentificationNumber"
                    value = {state.IdentificationNumber}
                    onChange = {handleChange}
                    {...register("IdentificationNumber",{required: "IdentificationNumber is required" , onChange: (e) => {handleChange(e)}})}
                  />
                {errors["IdentificationNumber"] && <span style= {{color:"red", padding : '2px'}}> {errors["IdentificationNumber"]['message']} </span>}

                </div>
              </div>

              <div className="three fields">
                <div className="field">
                  <label>Sanction Type</label>
                  <select
                  name = "SanctionTypeId"
                  value = {state.SanctionTypeId}
                  
                    {...register("SanctionTypeId",  {onChange: (e) => {handleChange(e)}}) }
                  >
                    <option value="1" >Deny Withdrawal </option>
                    <option value="2" >Deny Accout Creation</option>
                    <option value="3" >Deny Customer Creation</option>
                    <option value="4" >Reject Cheques</option>
                    <option value="5" >Deny Loan</option>
                  </select>
                {errors["SanctionTypeId"] && <span style= {{color:"red", padding : '2px'}}> {errors["SanctionTypeId"]['message']} </span>}

                </div>

                <div className="field">
                  <label>Sanction Details</label>
                  <textarea
                   name="SanctionDetails"
                   placeholder="Sanction Details"
                   value={state.SanctionDetails}
                   onChange = {handleChange}
                   {...register("SanctionDetails",{required : "Sanction Details is required" , onChange: (e) => {handleChange(e)}})}
                  rows="1"
                >
                </textarea>
                {errors["SanctionDetails"] && <span style= {{color:"red", padding : '2px'}}> {errors["SanctionDetails"]['message']} </span>}

                </div>
              </div>

          

              <div className = "three fields">
                <div className="field">
                    <label htmlFor="SanctionDate">Sanction Date</label>
                    <input type="date" id="SanctionDate" 
                    name = "SanctionDate"
                    value = {state.SanctionDate}
                    onChange = {handleChange}
                    {...register("SanctionDate",{required : "Sanction date is required" , onChange: (e) => {handleChange(e)} }) }  
                    />
                    {errors["SanctionDate"] && <span style= {{color:"red", padding : '2px'}}> {errors["SanctionDate"]['message']} </span>}
                  </div>
                <div className="field">
                  <label htmlFor="SanctionExpiration">Sanction Expiration Date</label>
                  <input type="date" id="" 
                     name = "SanctionExpiration"
                     value = {state.SanctionExpiration}
                     onChange = {handleChange}
                   {...register("SanctionExpiration",{required : "SanctionExpiration  is required" , onChange: (e) => {handleChange(e)}}) } 
                   />
                   {errors["SanctionExpiration"] && <span style= {{color:"red", padding : '2px'}}> {errors["SanctionExpiration"]['message']} </span>}
                </div>
              </div>

              <div className = "two fields">
              <div className="field">
                <label>Address</label>
                <textarea
                  name = "Address"
                  value ={state.Address}
                  onChange = {handleChange}
                  {...register("Address",{required : "Address is required" , onChange: (e) => {handleChange(e)}})}
                  rows="1"
                >
                </textarea>
                {errors["Address"] && <span style= {{color:"red", padding : '2px'}}> {errors["Address"]['message']} </span>}
              </div>

            </div>

              <button className="ui button blue">Add</button>
            </form>
          </div>
        </div>

      </div>

    );
}

export default AddSanction;
