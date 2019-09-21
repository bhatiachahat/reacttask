import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from  "react-router-dom";



export default class Login extends Component {
    constructor(){
        super()
        this.initialState={
            username:"",
            password:"",
            toDashboard:false,
            message:" "
        }
        this.state=this.initialState
    }
    handleChange=(event)=>{
        this.setState({ [event.target.name]:event.target.value},()=>{
           // console.log(this.state)
        })

    }
    handleSubmit=(event)=>{
        event.preventDefault();
        var obj={
            'username':this.state.username,
            'password':this.state.password
        }
        //console.log("username is",obj.username," and ","password is",obj.password);
        
        
        if(obj){
         //   console.log("obj is",obj," ",this.state.username," ",this.state.password);
      
        var name=localStorage.getItem("name");
       // console.log("name is",name," ",localStorage.getItem("name"))
        if(!localStorage.getItem("name")){
          var pr= axios.post(`https://app.api.convin.ai/persons/get_token/`,obj);
        
          pr.then(data=>{
         //     console.log("Successfull",data);
            
       if(data.data.token && data.status===200 ){
         localStorage.setItem("token",data.data.token);
        
            /// console.log("true");
              this.setState({message:"Logged in Successfully." })  
              setTimeout(
                function() {
                    this.setState({toDashboard:true});
                }
                .bind(this),
                2000);
       
        }
         else {
          this.setState({message:"Error while login!" })  
         }
              
          
  
      
          }).catch(err=>{
     console.log("err is",err)
     this.setState({message:"Error in login!" })
          }).finally(function () {
              // always executed
              console.log("always executed");
             
            })
          
        }
            else if(localStorage.getItem("name"))
            {var pr= axios.post(`https://${name}.api.convin.ai/persons/get_token/`,obj);
        
            pr.then(data=>{
           //     console.log("Successfull",data);
              
         if(data.data.token && data.status===200 ){
           localStorage.setItem("token",data.data.token);
          
              /// console.log("true");
                this.setState({message:"Logged in Successfully." })  
                setTimeout(
                  function() {
                      this.setState({toDashboard:true});
                  }
                  .bind(this),
                  2000);
         
          }
           else {
            this.setState({message:"Error while login!" })  
           }
                
            
    
        
            }).catch(err=>{
       console.log("err is",err)
            }).finally(function () {
                // always executed
                console.log("always executed");
               
              })
            
             
        }
       
        
        else{
            console.log("Empty");
           // this.setState({message:"Please Fill the fields!"})
        }}
       

    }
    render() {
        console.log("Login");
        if(this.state.toDashboard ===true){
          return(
              <Redirect to='/dashboard' />
          )
         
      }
     
        return (
       
          
            <div className="login">
                 
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Log In</h1>
          <p className="lead text-center">Sign in to your DevConnector account</p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" className="form-control form-control-lg" onChange={this.handleChange} value={this.state.username} placeholder="Enter username" name="username" />
            </div>
            <div className="form-group">
              <input type="password" onChange={this.handleChange}  className="form-control form-control-lg" value={this.state.password} placeholder="Password" name="password" />
            </div>
            <input type="submit" disabled={!this.state.username || !this.state.password} className="btn btn-info btn-block mt-4" />
          </form>
          {this.state.message}
        </div>
      </div>
    </div>
  </div>
  
        )
    }
}




