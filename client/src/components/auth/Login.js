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
            console.log(this.state)
        })

    }
    handleSubmit=(event)=>{
        event.preventDefault();
        var obj={
            'username':this.state.username,
            'password':this.state.password
        }
        console.log("username is",obj.username," and ","password is",obj.password);
        
        
        if(obj){
            console.log("obj is",obj," ",this.state.username," ",this.state.password);
        //          var pr=axios({
        //      url: 'https://ram.api.convin.ai/persons/get_token/',
        //      method: 'post',
        //      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        //  data: {
        //         username:this.state.username,
        //         password:this.state.password
        //     }
        //      })
        var name=localStorage.getItem("name");
        console.log("name is",name)
            var pr= axios.post(`https://${name}.api.convin.ai/persons/get_token/`,obj);
        
            pr.then(data=>{
                console.log("Successfull",data);
              //  this.setState({message:data.data.message,loader:false })
                // console.log(typeof(data.data.items));
                // // this.setState({...this.state,})
                // this.setState({currentvideo:data.data.items[0],videos:data.data.items}, () => {
                //   console.log("After setState",this.state);
                  
            //    });
         if(data.data.token && data.status===200 ){
              /// console.log("true");
                this.setState({message:"Logged in Successfully." })  
                setTimeout(
                  function() {
                      this.setState({toDashboard:true});
                  }
                  .bind(this),
                  2000);
             // setTimeout(
             //     function() {
                     
             //         localStorage.setItem("user", userObject.email);
             //         console.log("userObject.email",userObject.email);
             //         this.setState({toDashboard:true});
             //     }
             //     .bind(this),
             //     2000);
          }
           else {
            this.setState({message:"Error while login!" })  
           }
                
            
        //   {
        //     "id": 8,
        //     "last_login": null,
        //     "username": "@123",
        //     "is_staff": false,
        //     "is_active": false,
        //     "date_joined": "2019-09-20T12:50:22.388035Z",
        //     "first_name": "ram",
        //     "middle_name": "kumar",
        //     "last_name": "singh",
        //     "email": "ram@gmail.com",
        //     "primary_phone": "",
        //     "designation": 1,
        //     "team": null,
        //     "groups": [],
        //     "user_permissions": [],
        //     "status": "success",
        //     "message": "success",
        //     "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4LCJ1c2VybmFtZSI6IkAxMjMiLCJleHAiOjE1Njg5ODQxMjIsImVtYWlsIjoicmFtQGdtYWlsLmNvbSJ9.1B1Jn14dMy_rX-I1ic7zCetJ51Z2FLiQpCtATuU4Gqw"
        // }
        
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
        }
       

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


// date_joined: "2019-09-01T00:00:00Z"
// designation: 1
// email: "ram@gmail.com"
// first_name: "ram"
// groups: []
// id: 10
// is_active: false
// is_staff: false
// last_login: "2019-09-19T00:00:00Z"
// last_name: "singh"
// message: "success"
// middle_name: "kumar"
// primary_phone: ""
// status: "success"
// team: null
// token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMCwidXNlcm5hbWUiOiJjaGFoYXQiLCJleHAiOjE1Njg5ODY3MTMsImVtYWlsIjoicmFtQGdtYWlsLmNvbSJ9.pua-zcwNWQnDpkRTJFZVFMtNAfFyYhbRQADoUCLL7Xs"
// user_permissions: []
// username: "chahat"




