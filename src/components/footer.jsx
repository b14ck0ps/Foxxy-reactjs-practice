import React from "react";
import footerCss from "./footer.module.css";
function footer() {
  return (
    <div>
      <div className={footerCss.footer}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Gallery</li>
        </ul>
        <h2> &copy; 2022 b14ck0ps .ALL RIGHT RESERVED</h2>
      </div>
    </div>
  );
}

export default footer;
