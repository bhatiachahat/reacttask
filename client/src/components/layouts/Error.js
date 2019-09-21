import React from 'react'
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";

export default function Error() {
    return (
        <div>
                 <div className="landing">
            <div className="dark-overlay landing-inner text-light">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1 className="display-3 mb-4">Error 404
                    </h1>
                    <p className="lead"> Page you are looking for does not exist.</p>
                    <hr />
                
                    <Link to="/home" className="btn btn-lg btn-light">Home</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
