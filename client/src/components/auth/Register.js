import React, { Component } from 'react'
import axios from 'axios'
import '../../App.css'

export default class Register extends Component {
    constructor(){
        super()
        
        this.initialState= { password: "",
       last_login:"",
        username: "",
        date_joined: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        primary_phone: "",
        user_permissions:[],
        groups:[],
        team: null,
    message:""}
        this.state=this.initialState
    }
    componentDidMount(){
        this.setState({message:""})
    }
    handleSubmit=(event)=>{
        event.preventDefault();
      //  console.log(this.state.date_joined);
        var d = new Date(this.state.date_joined);
        var n = d.toISOString();
      //  console.log(this.state.last_login);
        var d = new Date(this.state.last_login);
        var p = d.toISOString();
  

       // console.log("this.state.last_login",p);
        //console.log("this.state.last_login",n);
        
        var obj=
        
            {
                "password": this.state.password,
                "last_login":p,
                "username": this.state.username,
                "date_joined":n ,
                "first_name": this.state.first_name,
                "middle_name": this.state.middle_name,
                "last_name": this.state.last_name,
                "email": this.state.email,
                "primary_phone":"",
                "team": null,
                "groups": [],
                "user_permissions": []
            }
           
          
      
        if(obj){
          var name=localStorage.getItem("name");
         // console.log("name is",name,"  ",`https://${name}.api.convin.ai/persons/create_admin/`);
         if(!localStorage.getItem("name")){
           
          var pr= axios.post(`https://app.api.convin.ai/persons/create_admin/`,obj   );
       
          pr.then(data=>{
              console.log("Successfull",data);
          
        if(data.data.status=="success" && data.data.message==="success"){
         //  console.log("true");
             this.setState({message:"Congratulations, Sign up Successfull." })  
          
       }
        else {
         this.setState({message:"Error in register!" })  
         }
              
    
      
          }).catch(err=>{
    console.log("err is",err)
    this.setState({message:"Error in register!" })
          }).finally(function () {
              // always executed
              console.log("always executed");
             
            })
         }
         else if(localStorage.getItem("name")){
          var pr= axios.post(`https://${name}.api.convin.ai/persons/create_admin/`,obj   );
       
          pr.then(data=>{
              //console.log("Successfull",data);
          
        if(data.data.status=="success" && data.data.message==="success"){
         //  console.log("true");
             this.setState({message:"Congratulations, Sign up Successfull." })  
          
       }
        else {
         this.setState({message:"Error in register!" })  
         }
              
    
      
          }).catch(err=>{
    // console.log("err is",err)
          }).finally(function () {
              // always executed
              console.log("always executed");
             
            })
          
           

         }
        
        }
        else{
         //   console.log("Empty");
            this.setState({message:"Please Fill the fields!"})
        }
       
    }
    handleChange=(event)=>{
        this.setState({ [event.target.name]:event.target.value},()=>{
            //console.log(this.state)
        })

    }
    render() {
   
        return (
            <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Sign Up</h1>
                  <p className="lead text-center">Create your DevConnector account</p>
                  <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                 <label >
                   <b>Password</b></label>
       
                 <input type="password" onChange={this.handleChange} value={this.state.password} className="form-control form-control-lg" placeholder="Password" name="password"  />
               </div>
               <div className="form-group">
                 <label><b>Last Login</b></label>
       
                 <input type="date"  onChange={this.handleChange} value={this.state.last_login} className="form-control form-control-lg" placeholder="Last Login" name="last_login"  />
               </div>
               <div className="form-group">
                 <label><b>Username</b></label>
       
                 <input type="text"  onChange={this.handleChange} value={this.state.username} className="form-control form-control-lg" placeholder="username" name="username"  />
               </div>
               <div className="form-group">
                 <label><b>Date Joined</b></label>
       
                 <input type="date"  onChange={this.handleChange} value={this.state.date_joined} className="form-control form-control-lg" placeholder="Date of joining " name="date_joined"  />
               </div>
               <div className="form-group">
                 <label><b>First Name</b></label>
       
                 <input type="text"  onChange={this.handleChange} value={this.state.first_name} className="form-control form-control-lg" placeholder="First Name " name="first_name"  />
               </div>       
               <div className="form-group">
                 <label><b>Middle Name</b></label>
       
                 <input type="text"  onChange={this.handleChange} value={this.state.middle_name} className="form-control form-control-lg" placeholder="Middle Name " name="middle_name"  />
               </div>  
               <div className="form-group">
                 <label><b>Last Name</b></label>
       
                 <input type="text"  onChange={this.handleChange} value={this.state.last_name} className="form-control form-control-lg" placeholder="Last Name " name="last_name"  />
               </div>   
               <div className="form-group">
                 <label><b>Email</b></label>
       
                 <input type="email"  onChange={this.handleChange} value={this.state.email} className="form-control form-control-lg" placeholder="Email " name="email" />
               </div>       
               <div className="form-group">
                 <label><b>Primary Phone</b></label>
       
                 <input type="number"  onChange={this.handleChange} value={this.state.primary_phone} className="form-control form-control-lg" placeholder="Phone" name="primary_phone" />
               </div>    
               <div className="form-group">
                 <label><b>Group</b></label>
       
                 <input type="text" disabled onChange={this.handleChange} value={this.state.groups} className="form-control form-control-lg" placeholder="No Items to select" name="groups"  />
                 <small className="form-text text-muted">The groups this user belongs to. A user will get all permissions granted to each of their groups.</small>
               </div>   
               <div className="form-group">
                 <label><b>Team</b></label>
       
                 <input type="text" disabled onChange={this.handleChange} value={this.state.team} className="form-control form-control-lg" placeholder="----" name="team" />
               </div>   
               <div className="form-group">
                 <label><b>User Permissions</b></label>
       
           
                 <select  className="form-control form-control-lg" 
        value={this.state.user_permissions} placeholder="User Permissions"
        onChange={this.handleChange}  name="user_permissions"
      >
       <option value="account|add email address">account|add email address</option>
        <option value="account|view email address">account|view email address</option>
        <option value="account|change email address">account|change email address</option>
      </select>
                 <small className="form-text text-muted">Specific permissions for this user.</small>
               </div> 
                    <input type="submit"  onChange={this.handleChange} value="Sign Up"  className="btn btn-info btn-block mt-4" />
                  </form>
                  {this.state.message}
                </div>
              </div>
            </div>
          </div>
        )
    }
}









