import React from "react";
import "../index.css";
import HeadShot from "../images/KinserStudios-SaltLakeCity-Headshots-JeffS-4.jpg"
import MailIcon from "../images/Mail.svg"
import GitHubIcon from "../images/GitHub Icon.svg"
import TwitterIcon from "../images/Twitter Icon.svg"


export default function Info() {
  return (
    <div className="info--container container">
      <img className="head--shot" src= {HeadShot} alt="One very dashing author"/>
        <div className="columns">
          <div className="info--blurb">
            <h1>Jeff Stratford</h1>
            <a href="mailto:jeff.stratford.author@gmail.com" className="fake--btn">
              <img className="mail--icon" src={MailIcon} alt="email icon" />
              <small>  jeff.stratford.author@gmail.com</small>
            </a>
            <p className="info--title">Writer/Front End Web Developer</p>
            <div className="classy--icon">
              <img className="social--icon" src={GitHubIcon} onClick={() => { NewGithubTab ()}} alt="Git Hub Icon" />
              {/* <img src={FacebookIcon} alt="Facebook Icon" /> */}
              <img className="social--icon" onClick={() => { NewTwitterTab ()}} src={TwitterIcon} alt="Twitter Icon" />
            </div>
            </div>
          </div>
          {/* <div className="email--btn">
            <button type="button">Email</button>
          </div> */}
        </div>
    
  )
}

function NewTwitterTab() {
window.open(
"https://twitter.com/The_MasterLight", "_blank"
) 
}

function NewGithubTab() {
window.open(
"https://github.com/TheMasterLight", "_blank"
)
}
  