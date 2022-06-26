import React from "react";
import CardCSS from "./FeatureCard.module.css";

function FeatureCard(props) {
  return (
    <div className={CardCSS.card}>
      <img src={props.image} alt="" srcset="" />
      <h3>{props.title}</h3>
    </div>
  );
}

export default FeatureCard;
