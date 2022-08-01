import React from "react";
import Image from "next/image";
import HeadShot from "../public/images/HeadShot.jpg";
import GitHubIcon from "../public/images/GitHubIcon.svg";
import FacebookIcon from "../public/images/Facebook Icon.svg";
import TwitterIcon from "../public/images/TwitterIcon.svg";
import MailIcon from "../public/images/Mail.svg";

export default function Info() {
  return (
    <div className="info--container container">
      <div className="head--shot">
        <Image src={HeadShot} alt="One very dashing author" />
      </div>
      <div className="columns">
        <div className="info--blurb">
          <h1>Jeff Stratford</h1>
          <a
            href="mailto:jeff.stratford.author@gmail.com"
            className="fake--btn"
          >
            <div className="mail--icon">
              <Image src={MailIcon} alt="email icon" width={25} height={16}/>
            </div>
            <small> jeff.stratford.author@gmail.com</small>
          </a>
          <p className="info--title">Writer/Front End Web Developer</p>
          <div className="classy--icon">
            <div className="social--icon">
              <Image
                src={GitHubIcon}
                onClick={() => {
                  NewGithubTab();
                }}
                alt="GitHub Icon"
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
        </div>
      </div>
      {/* <div className="email--btn">
            <button type="button">Email</button>
          </div> */}
    </div>
  );
}

function NewTwitterTab() {
  window.open("https://twitter.com/The_MasterLight", "_blank");
}

function NewGithubTab() {
  window.open("https://github.com/TheMasterLight", "_blank");
}
