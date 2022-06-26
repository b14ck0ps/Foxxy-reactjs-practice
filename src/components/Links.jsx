import React from "react";
import LinkCSS from "./Links.module.css";
import facebook from "../svg/facebook.svg";
import google from "../svg/google.svg";
import instagram from "../svg/instagram.svg";
import linkedin from "../svg/linkedin.svg";
function Links() {
  return (
    <div className={LinkCSS.linkList}>
      <img src={facebook} alt="" srcset="" />
      <img src={google} alt="" srcset="" />
      <img src={instagram} alt="" srcset="" />
      <img src={linkedin} alt="" srcset="" />
    </div>
  );
}

export default Links;
