import React, { Component } from 'react'
import './Formcss.css';

export class Form extends Component {
  constructor(){
    super()
    this.state={
      // name:"",
      // email:"",
      // Pnumber:"",
      // password:"",
      // Cpassword:"",
      // error:"file the details"
      fields:{},
      errors:{}

    }
  }
  handelchange=(event,key,conf)=>{
    //this.setState({[event.target.name]:event.target.value})
    //console.log(key2)
    let fields = this.state.fields;
    fields[key] = event.target.value;
    this.setState({ fields });
    
  }
   validation=()=>{
  //   //let validatiom=true;
  //  // let validatiom=false;
  //  let errors = "";
  //   let formIsValid = true;
  //   if(this.state.name==""){  
  //     formIsValid = false;
  //     errors= "Cannot be empty";
  //   }
  //   this.setState({ errors: errors });
  //   return formIsValid;
  let fields = this.state.fields;
  let formIsValid = true;
  let errors = {};



  if(!fields["name"]){
  // this.setState({ errors: "not valid "});
    formIsValid = false;
   errors["name"] = "Cannot be empty";
 
  }
  if(!fields["email"]){
  //  this.setState({ errors: "not valid "});
    formIsValid = false;
   errors["email"] = "Cannot be empty";
  }
  if(!fields["Pnumber"] || fields["Pnumber"].length !== 10){
    //  this.setState({ errors: "not valid "});
      formIsValid = false;
     errors["Pnumber"] = "Cannot be empty or Give the right password length";
    }
  
  if(!fields["password"]){
    formIsValid = false;
    errors["password"] = "Cannot be empty";
  }
 
  if(!fields["Cpassword"]){
    formIsValid = false;
    errors["Cpassword"] = "Cannot be empty";
  }
  
  if(!(fields["password"]===fields["Cpassword"])){
    formIsValid = false;
    errors["conf"] = "password not match";
  }
 
  this.setState({ errors: errors });
  return formIsValid;

   }
  
  submit=(event)=>{
   // alert("Your form is now Submitted")
   event.preventDefault();
   if (this.validation()) {
    alert("Form submitted");
    
    
  } else {
    alert("Form has errors");
  
  } 
  }

  render() {
    return (
      <div  >
          <form onSubmit={this.submit}>
            <div className='flex'>
              <label>Name</label>
              <input type="text"   name="name" value={this.state.fields["name"]} onChange={(event)=>this.handelchange(event,'name')}></input>
              <spam className="colour">{this.state.errors["name"]}</spam>
              
                <br/>
             
              <label>Email</label>
              <input type="email"  name="email" value={this.state.fields["email"]}  onChange={(event)=>this.handelchange(event,'email')}></input>
              <spam className="colour">{this.state.errors["email"]}</spam>
              <br/>

              <label>Phone Number</label>
              <input type="number"  name="Pnumber" value={this.state.fields["Pnumber"]} onChange={(event)=>this.handelchange(event,"Pnumber")}></input>
              <spam className="colour">{this.state.errors["Pnumber"]}</spam><br/>

              <label>Password</label>
              <input type="number" name="password" value={this.state.fields["password"]} onChange={(event)=>this.handelchange(event,"password")}></input>
              <spam className="colour">{this.state.errors["password"]}</spam><br/>

              <label>Confirm Password</label>
              <input type="number" name="Cpassword" value={this.state.fields["Cpassword"]} onChange={(event)=>this.handelchange(event,"Cpassword","conf")}></input>
              <spam className="colour">{this.state.errors["Cpassword"]}</spam>  <spam className="colour">{this.state.errors["conf"]}</spam>  
              
              <br/>
             

              <button type="submit" id="button">Submit</button>
              </div>


          </form>
        
      </div>
    )
  }
}

export default Form
