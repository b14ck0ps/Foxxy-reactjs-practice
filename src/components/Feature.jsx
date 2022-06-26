import React from "react";
import FeatureCard from "./FeatureCard";
import FeatureCSS from "./Feature.module.css";
import book from "../svg/books.svg";
import picture from "../svg/picture.svg";
import pc from "../svg/computer.svg";
function Feature() {
  return (
    <div>
      <div className={FeatureCSS.content}>
        <h3>FEATURED</h3>
        <h1>
          This is the new <br /> creative process
        </h1>
      </div>
      <div className={FeatureCSS.catagory}>
        <FeatureCard image={book} title="Learn About Your Creative" />
        <FeatureCard image={picture} title="Learn About Your Creative" />
        <FeatureCard image={pc} title="Learn About Your Creative" />
      </div>
      <div className={FeatureCSS.content}>
        <p>
          From boring content campaign to unexpected one,there is us.Break your
          email <br />
          vision & give your content something your subscribers have never seen
          before.
        </p>
      </div>
    </div>
  );
}

export default Feature;
