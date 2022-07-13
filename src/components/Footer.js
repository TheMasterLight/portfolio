import React from "react";
import "../index.css";
import GitHubIcon from "../images/GitHub Icon.svg"
import FacebookIcon from "../images/Facebook Icon.svg"
import TwitterIcon from "../images/Twitter Icon.svg"


export default function Footer() {
  return(
    <div className="footer container">
      <img className="social--icon" src={GitHubIcon} onClick={() => { NewGithubTab ()}} alt="Git Hub Icon" />
      {/* <img src={FacebookIcon} alt="Facebook Icon" /> */}
      <img className="social--icon" onClick={() => { NewTwitterTab ()}} src={TwitterIcon} alt="Twitter Icon" />
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