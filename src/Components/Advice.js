import React from "react";

import patternDividerMobile from "../images/pattern-divider-mobile.svg";
import patternDividerDesktop from "../images/pattern-divider-desktop.svg";
import iconDice from "../images/icon-dice.svg";

import classes from "./Advice.module.css";

function Advice() {
  const fetchAdvice = async () => {
    console.log("fetchAdvice");
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();
    console.log(advice);
  };

  return (
    <main className={classes.main}>
      <h1 className={classes.header}>ADVICE #117</h1>
      <p className={classes.advice}>
        "It is easy to sit up and take notice. What is difficult is to get up
        and take action".
      </p>
      <picture className={classes.pictureDivider}>
        <source media="(min-width: 768px)" srcSet={patternDividerDesktop} />
        <img src={patternDividerMobile} alt="young man holding laptop" />
      </picture>
      <button className={classes.button} onClick={fetchAdvice}>
        <img className={classes.imgButton} src={iconDice} alt="dice icon" />
      </button>
    </main>
  );
}

export default Advice;
