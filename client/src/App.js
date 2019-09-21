import React from 'react';
import Landing from './components/layouts/Landing'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import CreateSubDomain from './components/CreateSubDomain'
import {DomainProvider} from './context/Domaincontext'; 
import Dashboard from './components/user/Dashboard'
import './App.css';

function App() {
  return (
    <DomainProvider value="Chahat" >
    <Router>
            <Switch>
      <div className="App">

      <Navbar/>
  <Route exact path="/"  component={CreateSubDomain} />
  <div className="container">
  
   <Route exact path="/login" component={Login} />
   <Route exact path="/register" component={Register} /> 
   <Route exact path="/home" component={Landing} /> 
   <Route exact path="/dashboard" component={Dashboard} /> 

  </div>
  <Footer/>
  
  {/* <Route component={Error}/> */}
  
      </div>
      </Switch>
    
   </Router>
   </DomainProvider>
     
    
      
     
    
  );
}

export default App;
