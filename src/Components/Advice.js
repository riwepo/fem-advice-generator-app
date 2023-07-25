import React from "react";

import patternDividerMobile from "../images/pattern-divider-mobile.svg";
import patternDividerDesktop from "../images/pattern-divider-desktop.svg";
import iconDice from "../images/icon-dice.svg";

import classes from "./Advice.module.css";

function Advice() {
  return (
    <main className={classes.main}>
      <h1 className={classes.header}>Advice #35</h1>
      <p className={classes.advice}>
        "It is easy to sit up and take notice. What is difficult is to get up
        and take action".
      </p>
      <picture>
        <source media="(min-width: 768px)" srcSet={patternDividerDesktop} />
        <img
          className={classes.imgDivider}
          src={patternDividerMobile}
          alt="young man holding laptop"
        />
      </picture>
      <button className={classes.button}>
        <img className={classes.imgButton} src={iconDice} alt="dice icon" />
      </button>
    </main>
  );
}

export default Advice;
