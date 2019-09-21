import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
export default class Landing extends Component {
    render() {
        console.log("landing");
        return (
            <div className="landing">
            <div className="dark-overlay landing-inner text-light">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1 className="display-3 mb-4">Developer Connector
                    </h1>
                    <p className="lead"> Create a subdomains and get help from other developers</p>
                    <hr />
                    <Link to="/register" className="btn btn-lg btn-info mr-2">Sign Up</Link>
                    <Link to="/login" className="btn btn-lg btn-light">Login</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

