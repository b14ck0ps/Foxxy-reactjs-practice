import React from "react";
import CardCSS from "./Card.module.css";
import booksSvg from "../images/books.png";
function Card() {
  return (
    <div>
      <div className={CardCSS}>
        <div className={CardCSS.grad__card}>
          <img src={booksSvg} alt="books"></img>
          <div className={CardCSS.texts}>
            <h1>
              We Love Helping You <br /> Bring ideas to life
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Quisquam, quidem. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. <br /> <br />
              <a
                className={CardCSS.ref}
                href="https://dribbble.com/shots/14980062--Foxxy-landing-page/attachments/6699909?mode=media"
              >
                Dribbble Ref Link
              </a>
              <br />
            </p>
            <button>Get Early Access</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
