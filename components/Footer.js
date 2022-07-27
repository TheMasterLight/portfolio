import React from "react";
import Image from "next/image";
import GitHubIcon from "../public/images/GitHubIcon.svg";
// import FacebookIcon from "../public/images/Facebook Icon.svg"
import TwitterIcon from "../public/images/TwitterIcon.svg";

export default function Footer() {
  return (
    <div className="footer container">
      <div className="social--icon">
        <Image
          src={GitHubIcon}
          onClick={() => {
            NewGithubTab();
          }}
          alt="Git Hub Icon"
        />
      </div>
      {/* <Image src={FacebookIcon} alt="Facebook Icon" /> */}
      <div className="social--icon">
        <Image
          onClick={() => {
            NewTwitterTab();
          }}
          src={TwitterIcon}
          alt="Twitter Icon"
        />
      </div>
    </div>
  );
}

function NewTwitterTab() {
  window.open("https://twitter.com/The_MasterLight", "_blank");
}

function NewGithubTab() {
  window.open("https://github.com/TheMasterLight", "_blank");
}
