import React, { Component } from "react";

class InnerSpinner extends Component {
  render() {
    return (
      <div>
        <div className="body text-center m-t-50">
          <div className="loader">
            <div className="preloader">
              <div className="spinner-layer pl-red">
                <div className="circle-clipper left">
                  <div className="circle" />
                </div>
                <div className="circle-clipper right">
                  <div className="circle" />
                </div>
              </div>
            </div>
            <p>Please wait...</p>
          </div>
        </div>
      </div>
    );
  }
}

export default InnerSpinner;
