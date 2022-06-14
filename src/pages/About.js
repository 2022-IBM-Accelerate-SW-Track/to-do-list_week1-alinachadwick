import React, { Component } from 'react';
import "./About.css";
import linkedin from "../assets/linkedin.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={linkedin}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Alina Chadwick</div>
            <div className="brief_description">
              <p> I am a '24 at Dartmouth College studying Computer Science </p>
              <p>Fun fact: I am scared of fish </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}