import React, { Component } from 'react'
import axios from 'axios'

export default class CreateSubDomain extends Component {
    constructor(){
        super()
        this.initialstate={
subdomain:"",
message:"",
available:false
        }
        this.state=this.initialstate
    }
    componentDidMount(){
        this.setState({message:"",available:false})
    }
    handleChange=(event)=>{
        this.setState({ [event.target.name]:event.target.value},()=>{
           // console.log(this.state)
        })

    }
    checkavailability=(event)=>{
        event.preventDefault();
       var name=this.state.subdomain;
       if(name){
        var pr= axios.get(`https://app.api.convin.ai/domains/availability?name=${name}`

        );
       
       pr.then(data=>{
           //console.log("Successfull",data);
         
     if(data.data.status==="success" && data.data.available ){
          // console.log("true");
           this.setState({message:"Subdomain available.",available:true })  
           localStorage.setItem('name',(this.state.subdomain));
          // console.log("domain created ",localStorage.getItem("name"));
      
       }
       else if(!data.data.available){
        this.setState({message:"Subdomain not available!",available:false })  
       }
           
       
    
   
       }).catch(err=>{
  //console.log("err is",err)
       }).finally(function () {
           // always executed
         //  console.log("always executed");
          
         })
       
        
       }
       else{
          // console.log("Empty");
           this.setState({message:"Please Fill the fields!"})
       }
      
       


    }
    handleSubmit=(event)=>{
        event.preventDefault();
        var obj={name:this.state.subdomain}
        if(obj.name){
         var pr= axios.post(`https://app.api.convin.ai/domains/`,
 obj
         );
         
        pr.then(data=>{
          //  console.log("Successfull",data);
          
      if(data.data.status=="success" && data.data.message==="success" && data.status===201 ){
         //  console.log("true");
            this.setState({message:"Subdomain created." })  
        
       }
       else {
        this.setState({message:"Error in creating Subdomain!" })  
       }
            
        
     
    
        }).catch(err=>{
 //  console.log("err is",err)
        }).finally(function () {
            // always executed
           // console.log("always executed");
           
          })
        
         
        }
        else{
           // console.log("Empty");
            this.setState({message:"Please Fill the fields!"})
        }
       

    }
    render() {
        return (
            <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Create SubDomain</h1>
                  <p className="lead text-center">Create your DevConnector SubDomain</p>
                  <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Enter subdomain" name="subdomain" onChange={this.handleChange} value={this.state.subdomain} required />
                    </div>
                   
                  
                    <button  disabled={!this.state.subdomain} onClick={this.checkavailability} className="btn btn-info btn-block mt-4" >Check Availability</button>
                  
                    {this.state.available && <input type="submit" disabled={!this.state.subdomain} value="Create Subdomain" onClick={this.handleSubmit} className="btn btn-info btn-block mt-4" />}
                  </form>
                  {this.state.message}
                </div>
              </div>
            </div>
          </div>
        )
    }
}
