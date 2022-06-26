import React from "react";
import LinkCSS from "./Links.module.css";
import facebook from "../svg/facebook.svg";
import google from "../svg/google.svg";
import instagram from "../svg/instagram.svg";
import linkedin from "../svg/linkedin.svg";
function Links() {
  return (
    <div className={LinkCSS.linkList}>
      <a href="https://www.fb.me/azran.mrx">
        <img src={facebook} alt="" srcset="" />
      </a>
      <a href="https://www.google.com">
        <img src={google} alt="" srcset="" />
      </a>
      <a href="https://www.instagram.com/b14ck0ps/">
        <img src={instagram} alt="" srcset="" />
      </a>
      <a href="https://www.linkedin.com/in/azran/">
        <img src={linkedin} alt="" srcset="" />
      </a>
    </div>
  );
}

export default Links;
